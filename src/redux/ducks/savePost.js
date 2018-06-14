import update from 'immutability-helper';
import { toggleSave } from './posts';

const SAVE = 'savePost/SAVE';
const UNSAVE = 'savePost/UNSAVE';
const SHOW_SAVED = 'savePost/SHOW_SAVED';

const initialState = {
    saved: [],
    showSaved: false
}
export default function reducer(state =  initialState, action){
    switch(action.type){
        case SAVE:
            return update(state, {saved:{ $push: [action.post] }});
        case UNSAVE:
            return update(state, {saved:{$splice: [[action.index ,1]]}});
        case SHOW_SAVED:
            return {...state, showSaved: action.bool};
        default:
            return state;
    }
}

export function savePost(post){
    return { type: SAVE, post };
}
export function unSavePost(index){
    return { type: UNSAVE, index };
}
export function showSaved(bool){
    return { type: SHOW_SAVED, bool };
}
export function unSave(id){
    return (dispatch, getState) => {
        const  state = getState();
        const toRemove = state.savePost.saved.findIndex((post) => 
        post.data.id === id);
        dispatch(unSavePost(toRemove));
    }
}
export function saveUnsave(id) {
    return (dispatch, getState) => {
        const firstState = getState();
        const index = firstState.posts.findIndex((post) => 
            post.data.id === id);
        dispatch(toggleSave(index));
        
        const secondState = getState();
        const toSave = secondState.posts.find((post) => {
            return post.data.id === id
        });
        const thirdState = getState();
        if (toSave.data.saved){
            dispatch(savePost(toSave));
        }else if(!toSave.data.saved){
            const toRemove = thirdState.savePost.saved.findIndex((post) => 
            post.data.id === id);

            dispatch(unSavePost(toRemove));
        }else{
            console.log('error')
        }
        
    }
}
