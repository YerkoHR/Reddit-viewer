const ADD = 'redux-3/subs/ADD';

const initialState = ['all', 'animemes', 'leagueoflegends'];

export default function reducer (state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}

export function addSub(sub){
    return { type: ADD, sub };
}