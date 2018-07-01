import update from 'immutability-helper';
import axios from 'axios';
import { errorFound } from './errorfound';
import { Loading } from './isLoading';
import { dinamiqURLCreator, setAfter, setBefore } from './dinamiqURL';
import moment from 'moment';

const TOGGLE_SAVE = 'posts/TOGGLE_SAVE';
const FETCH_SUCCESS = 'posts/FETCH_SUCCESS';
const LOAD_SAVED = 'posts/LOAD_SAVED';
const TOGGLE_COMMENTS = 'post/TOGGLE_COMMENTS';
const K_FORMATTING = 'post/K_FORMATTING';
const TIME_FORMATTING = 'post/TIME_FORMATTING';

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
        case K_FORMATTING:
            return  update(state, {$set: action.newFormat});
        case TIME_FORMATTING: 
            return  update(state, {$set: action.newFormat});
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
export function kFormat(newFormat){
    return { type: K_FORMATTING, newFormat };
}
export function timeFormat(newFormat){
    return { type: TIME_FORMATTING, newFormat };
}

export function formatPosts(posts){
    posts.forEach((x)=>{
        x.data.created_utc = moment.unix(x.data.created_utc).fromNow();
    });

    posts.forEach((x)=>{
        x.data.score =  x.data.score>1000 ? (x.data.score / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : x.data.score;
    
    });
}
export function fetchData(){
    return (dispatch, getState) => {

        dispatch(Loading(true));
        dispatch(dinamiqURLCreator());
        let url = getState();
        axios.get(url.dinamiqURL.urlParts.final)
        .then((response) => {
            dispatch(setAfter(response.data.data.after));
            dispatch(setBefore(response.data.data.before));
            const items = response.data.data.children.map((item) => {
                return item;
            });
            dispatch(Loading(false));
            
            formatPosts(items);

            let state = getState();
            
            if(state.savePost.saved.length>0){
                items.forEach((item) => 
                    state.savePost.saved.forEach((saved) => {
                        if(item.data.id === saved.data.id){
                            item.data.saved = saved.data.saved;
                        }
                }));     
           // dispatch(fetchDataSuccess(items));

            }
            dispatch(fetchDataSuccess(items));
        })
        .catch(() => dispatch(errorFound(true)));
       
    } 
}


function loadSavedPosts(arr1, arr2){

    if(arr2.saved.length>0){
        arr1.forEach((item) => 
           arr2.saved.forEach((saved) => {
                if(item.data.id === saved.data.id){
                    item.data.saved = saved.data.saved;
                }
        }));     
    }
    return arr1;
} 
