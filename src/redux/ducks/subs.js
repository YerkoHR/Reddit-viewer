import axios from 'axios';

const ADD_SUB = 'subs/ADD_SUB';
const TRENDING_DETAILS = 'subs/TRENDING_DETAILS';
const UPDATE_ACTIVE = 'subs/UPDATE_ACTIVE';
const REMOVE_SUB = 'subs/REMOVE_SUB';

const initialState = {
   user: [],
   active: {},
   trending: []
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case TRENDING_DETAILS:
            return {...state, trending: action.update }
        case UPDATE_ACTIVE:
            return {...state, active: action.update }
        case ADD_SUB:
            return { ...state, user: [...state.user, action.sub] }
        case REMOVE_SUB:
            return { ...state, user: [ ...state.user.slice(0, action.index), ...state.user.slice(action.index + 1)]}
        default:
            return state;
    }
}

export function addSub(sub){
    return { type: ADD_SUB, sub };
}
export function removeSub(index){
    return { type: REMOVE_SUB, index };
}
export function UpdateSubs(update){
    return  { type: TRENDING_DETAILS, update };
}
export function UpdateActive(update){
    return  { type: UPDATE_ACTIVE, update };
}

export function fetchDetails(sub){
    return (dispatch) => {
   
        axios.get(`https://www.reddit.com/api/${sub}.json`)
        .then((response) => {
             dispatch(fetchSubs(response.data.subreddit_names));
        })

    }
}

export function fetchSubs(arrayOfSubs){
    return (dispatch) => {
        let urls = arrayOfSubs.map((x) => {
            return `https://www.reddit.com/r/${x}/about.json`;
        }) 
        
        axios.all(urls.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
            const subscribers = res.map((subs) => {
                return subs.data.data.subscribers 
            });
            let final = [];
            for(let i = 0; i<= subscribers.length-1; i++){
                final.push({ sub: arrayOfSubs[i], subscribers: subscribers[i]})
            }
            dispatch(UpdateSubs(final));
        }
    ));
}}

export function fetchActive(sub){
    return (dispatch) => {
        
        axios.get(`https://www.reddit.com/r/${sub}/about.json`)
            .then((response) => {
                formatPosts(response.data.data)
                dispatch(UpdateActive(Object.assign({}, response.data.data)));
            })
        }

}

export function toRemove(subName){
    return (dispatch, getState) => {
        const  state = getState();
        const toRemove = state.subs.user.findIndex((sub) => 
        sub === subName);
        dispatch(removeSub(toRemove));
    }
}

function formatPosts(fetched){
    fetched.active_user_count =  fetched.active_user_count>1000 ? (fetched.active_user_count / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : fetched.active_user_count;
    fetched.subscribers =  fetched.subscribers>1000 ? (fetched.subscribers / 1000).toFixed(1).replace(/\.0$/, '') + 'K' : fetched.subscribers;
}