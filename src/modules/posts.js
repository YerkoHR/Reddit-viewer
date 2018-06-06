import update from 'immutability-helper';
import axios from 'axios';
import { errorFound } from './errorfound';
import { Loading } from './isLoading';

const TOGGLE_SAVE = 'redux-3/posts/TOGGLE_SAVE';
const FETCH_SUCCESS = 'redux-3/posts/FETCH_SUCCESS';

export default function reducer(state = [], action){
    switch(action.type){
        case FETCH_SUCCESS:
            return  action.posts;
        case TOGGLE_SAVE:
            return  update(state, {
                [action.index]: { 
                    data: {
                        saved: {
                            $set: !state[action.index].data.saved}}}});
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

export function fetchData(url){
    return (dispatch) => {
        
        dispatch(Loading(true));
        axios.get(url)
        .then((response) => {
            
            const items = response.data.data.children.map((item) => {
                return item;
            });
            dispatch(Loading(false));
            dispatch(fetchDataSuccess(items))
        })
        .catch(() => dispatch(errorFound(true)));
    }
}
