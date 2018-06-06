import update from 'immutability-helper';
import { toggleSave } from './posts';

const SAVE = 'redux-3/savePost/SAVE';
const UNSAVE = 'redux-3/savePost/UNSAVE';

export default function reducer(state =  [], action){
    switch(action.type){
        case SAVE:
            return update(state, { $push: [action.post] });
        case UNSAVE:
            return update(state, {$splice: [[action.index ,1]]});
        default:
            return state;
    }
}

export function savePost(post){
    return { type: SAVE, post };
}
export function unsavePost(index){
    return { type: UNSAVE, index };
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
            const toRemove = thirdState.savePost.findIndex((post) => 
            post.data.id === id);

            dispatch(unsavePost(toRemove));
        }else{
            console.log('error')
        }

    }
}
