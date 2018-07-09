import axios from 'axios';
import update from 'immutability-helper';

const ADD = 'subs/ADD';
const UPDATE_SUBS = 'subs/UPDATE_SUBS';
const UPDATE_SUBSCRIBERS = 'subs/UPDATE_SUBSCRIBERS';

const initialState = {
   user: ['all', 'animemes', 'leagueoflegends'],
   trending: []
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_SUBS:
            return {...state, trending: action.update }
        default:
            return state;
    }
}

export function addSub(sub){
    return { type: ADD, sub };
}
export function UpdateSubs(update){
    return  { type: UPDATE_SUBS, update };
}
export function updateSubscribers(update, index){
    return  { type: UPDATE_SUBSCRIBERS, update, index };
}

export function fetchTrending(){
    return (dispatch) => {
   
        axios.get('https://www.reddit.com/api/trending_subreddits.json')
        .then((response) => {
             dispatch(fetchSubs(response.data.subreddit_names));
        })

    }
}
export function fetchSubs(subs){
    return (dispatch) => {
        let urls = subs.map((x) => {
            return `https://www.reddit.com/r/${x}/about.json`;
        }) 
        
        axios.all(urls.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
            const subscribers = res.map((subs) => {
                return subs.data.data.subscribers 
            });
            let final = [];
            for(let i = 0; i<= subscribers.length-1; i++){
                final.push({ sub: subs[i], subscribers: subscribers[i]})
            }
            dispatch(UpdateSubs(final));
        }
    ));
}}
