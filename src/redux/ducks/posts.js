import update from 'immutability-helper';
import axios from 'axios';
import { errorFound } from './errorfound';
import { Loading } from './isLoading';
import { dinamiqURLCreator, setAfter, setBefore } from './dinamiqURL';
import { showSaved } from './savePost';

const TOGGLE_SAVE = 'posts/TOGGLE_SAVE';
const FETCH_SUCCESS = 'posts/FETCH_SUCCESS';
const LOAD_SAVED = 'posts/LOAD_SAVED';

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
        default:
          return state;
    }
}

export function toggleSave(index) {
    return { type: TOGGLE_SAVE, index };
}

export function fetchDataSuccess(posts){
    return { type: FETCH_SUCCESS, posts };
}
export function loadSaved(posts){
    return { type: LOAD_SAVED, posts };
}

export function fetchData(){
    return (dispatch, getState) => {
        dispatch(showSaved(false));
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
            const savedstate = getState();
            if(savedstate.savePost.saved.length>0){
                const uno = getState();
                let aux = uno;
                items.forEach((x)=>{
                    aux.savePost.saved.forEach((y)=>{
                        if (x.data.id === y.data.id){
                            x.data.saved = y.data.saved;
                        }
                    });
                });
                dispatch(fetchDataSuccess(items));
            }
        dispatch(fetchDataSuccess(items));
        })
        .catch(() => dispatch(errorFound(true)));
       
    } 
}
