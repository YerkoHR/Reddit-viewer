import update from 'immutability-helper';
import { toggleSave } from './posts';

const SAVE = 'savePost/SAVE';
const UNSAVE = 'savePost/UNSAVE';

const initialState = {
    saved: []
}
export default function reducer(state =  initialState, action){
    switch(action.type){
        case SAVE:
            return update(state, {saved:{ $push: [action.post] }});
        case UNSAVE:
            return update(state, {saved:{$splice: [[action.index ,1]]}});
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
        
        const postToggleState = getState();
        const toSave = postToggleState.posts.find((post) => {
            return post.data.id === id
        });
        
        if (toSave.data.saved){
            dispatch(savePost(toSave));
        }else if(!toSave.data.saved){
            const toRemove = postToggleState.savePost.saved.findIndex((post) => 
            post.data.id === id);

            dispatch(unSavePost(toRemove));
        }else{
            console.log('error')
        }
        
    }
}
