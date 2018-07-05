import update from 'immutability-helper';
import moment from 'moment';
import axios from 'axios';

const STORE_COMMENTS = 'comments/STORE_COMMENTS';
const REMOVE_COMMENTS = 'comments/REMOVE_COMMENTS';

export default function reducer(state = {}, action){
    switch(action.type){
        case STORE_COMMENTS:
            return update(state, { [action.index]:
                {$set:   action.comments }})
        case REMOVE_COMMENTS:
            return removeByKey(state, action.index)
        default:
            return state;
    }
}
//return update(state, { [action.index]: {$set: []}})
function removeByKey (myObj, deleteKey) {
    return Object.keys(myObj)
      .filter(key => key != deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
    }, {});
  }

export function storeComments(comments, index){
    return { type: STORE_COMMENTS, comments, index };
}
export function removeComments(index){
    return { type: REMOVE_COMMENTS, index }
}
export function fetchComments(sub, id, index){
    return (dispatch) => {
        axios.get(`https://www.reddit.com/r/${sub}/comments/${id}.json?limit=5&sort=hot`)
        .then((response) => {
          
            const comments = response.data[1].data.children.map((comment) => {
                return comment.data;
            });
            formatPosts(comments);
            dispatch(storeComments(comments, index));
        });   
    }
}
function formatPosts(fetched){
    fetched.forEach((post)=>{
        post.created_utc = moment.unix(post.created_utc).fromNow();
    });

    fetched.forEach((post)=>{
        post.score =  post.score>1000 ? (post.score / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : post.score;
    
    });
}