import update from 'immutability-helper';

const SUB_CHANGE = 'dinamiqURL/SUB_CHANGE';
const FILTER_CHANGE = 'dinamiqURL/FILTER_CHANGE';
const TOP_CHANGE = 'dinamiqURL/TOP_CHANGE';
const FINAL_URL = 'dinamiqURL/FINAL_URL';
const RESET_URL = 'dinamiqURL/RESET_URL';

const initialState = {
    urlParts: {
        common: 'http://www.reddit.com/r/',
        currentSub: 'all',
        slash: '/',
        currentFilter: 'hot',
        limit: '.json?limit=25&t=',
        currentTop: 'day',
        //countPag: '&count=25',
        //pagCode: 'left or right'
        final: ''
    },
    normal: [ 'hot', 'new', 'rising', 'controversial'],
    top: [
        { text: 'Past hour', code:'hour'},
        { text: 'Past 24 hours', code:'day'}, 
        { text: 'Past week', code:'week'}, 
        { text: 'Past month', code:'month'}, 
        { text: 'Past year', code:'year'}, 
        { text: 'Past year', code:'all'} 
    ]
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SUB_CHANGE:
            return update(state, {urlParts: {
                currentSub: { $set: action.newSub }
            }});
        case FILTER_CHANGE:
            return update(state, {urlParts: {
                currentFilter: { $set: action.newFilter }
            }});
        case TOP_CHANGE:
            return update(state, {urlParts: {
                currentTop: { $set: action.newTop }
            }});
        case RESET_URL:
            return update(state, {urlParts: {
                final: { $set: '' }
            }});
        case FINAL_URL:
            return update(state, {urlParts: {
                final: { $set: action.final }
            }});
        default:
            return state;
    }
}

export function subChange(newSub){
    return { type: SUB_CHANGE, newSub };
}
export function filterChange(newFilter){
    return { type: FILTER_CHANGE, newFilter };
}
export function topChange(newTop){
    return { type: TOP_CHANGE, newTop };
}
export function finalUrl(final){
    return { type: FINAL_URL, final };
}
export function resetURL(){
    return { type: RESET_URL };
}

export function dinamiqURLCreator(){
    return (dispatch, getState) => {
        
        dispatch(resetURL());
        const secondState = getState();
        let sum = '';
        for(let x in secondState.dinamiqURL.urlParts){
            sum += secondState.dinamiqURL.urlParts[x];
        }  
        dispatch(finalUrl(sum));
    }
}