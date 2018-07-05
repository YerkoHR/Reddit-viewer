import update from 'immutability-helper';
import axios from 'axios';
import { errorFound } from './errorfound';
import { Loading } from './isLoading';
import { URLGenerator, setAfter, setBefore } from './URL';
import moment from 'moment';

const TOGGLE_SAVE = 'posts/TOGGLE_SAVE';
const FETCH_SUCCESS = 'posts/FETCH_SUCCESS';
const LOAD_SAVED = 'posts/LOAD_SAVED';
const TOGGLE_COMMENTS = 'post/TOGGLE_COMMENTS';

export default function reducer(state = [], action){
    switch(action.type){
        case FETCH_SUCCESS:
            return  update(state, {$set: action.posts});
        case TOGGLE_SAVE:
            return  update(state, {
                [action.index]: { 
                data: {
                saved: {
                $set: !state[action.index].data.saved}}}});
        case LOAD_SAVED:
            return action.posts;
        case TOGGLE_COMMENTS:
            return update(state, {
                [action.index]: { 
                data: {
                clicked: {
                $set: !state[action.index].data.clicked}}}});
        default:
          return state;
    }
}

export function toggleSave(index) {
    return { type: TOGGLE_SAVE, index };
}
export function toggleComments(index){
    return { type: TOGGLE_COMMENTS, index };
}
export function fetchDataSuccess(posts){
    return { type: FETCH_SUCCESS, posts };
}
export function loadSaved(posts){
    return { type: LOAD_SAVED, posts };
}

export function fetchData(){
    return (dispatch, getState) => {

        dispatch(Loading(true));
        dispatch(URLGenerator());
        const state = getState();
        axios.get(state.URL.final)
        .then((response) => {
            dispatch(setAfter(response.data.data.after));
            dispatch(setBefore(response.data.data.before));
            let items = response.data.data.children.map((item) => {
                return item;
            });
            dispatch(Loading(false));
            
            formatPosts(items);

            let state = getState();
            loadSavedPosts(items, state);
            
            dispatch(fetchDataSuccess(items));
        })
        .catch(() => dispatch(errorFound(true)));
       
    } 
}
export function formatPosts(fetched){
    fetched.forEach((post)=>{
        post.data.created_utc = moment.unix(post.data.created_utc).fromNow();
    });

    fetched.forEach((post)=>{
        post.data.score =  post.data.score>1000 ? (post.data.score / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : post.data.score;
    
    });
}
function loadSavedPosts(fetched, state){

const favorites = state.favorites;
    if(favorites.length > 0) {
        fetched.forEach( (item) => 
           favorites.forEach( (saved) => {
                if(item.data.id === saved.data.id){
                    item.data.saved = saved.data.saved;
                }
        }));     
    }
}
