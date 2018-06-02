import { combineReducers } from 'redux';
import { ITEMS_ERROR, IS_LOADING, FETCH_SUCCESS, TOGGLE_SAVE, toggle } from '../actions';

function errorFound(state = false, action){
    switch(action.type){
        case ITEMS_ERROR:
            return action.errorFound;
        default:
            return state;
    }
}
function isLoading(state = false, action){

    switch(action.type){
        case IS_LOADING: 
            return action.isLoading;
        default:
            return state ;
    }
}
 
function posts(state = [], action){
    switch(action.type){
        case FETCH_SUCCESS:
            return action.posts;
        default: 
            return state;
    }
}

function toggleSave(state = false, action){
    switch(action.type){
        case TOGGLE_SAVE:
            return toggle(state);
        default: 
            return state;
    }
}

export const allReducers = combineReducers({
    posts,
    errorFound,
    isLoading,
    toggleSave
});