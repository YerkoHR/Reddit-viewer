import update from 'immutability-helper';
import { toggleSave } from './posts';

const SAVE = 'favorites/SAVE';
const TOGGLE_COMMENTS = 'favorites/TOGGLE_COMMENTS';
const UNSAVE = 'favorites/UNSAVE';

export default function reducer(state = [], action){
    switch(action.type){
        case SAVE:
            return update(state, { $push: [action.post] });
        case UNSAVE:
            return update(state, {$splice: [[action.index ,1]]});
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

export function savePost(post){
    return { type: SAVE, post };
}
export function unSavePost(index){
    return { type: UNSAVE, index };
}
export function toggleComments(index){
    return { type: TOGGLE_COMMENTS, index };
}

export function unSave(id){
    return (dispatch, getState) => {
        const  state = getState();
        const toRemove = state.favorites.findIndex((post) => 
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
            const toRemove = postToggleState.favorites.findIndex((post) => 
            post.data.id === id);

            dispatch(unSavePost(toRemove));
        }else{
            console.log('error');
        }
        
    }
}
