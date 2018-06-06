const CURRENT_SUB_CHANGE = 'CURRENT_SUB_CHANGE';
const CURRENT_FILTER_CHANGE = 'CURRENT_FILTER_CHANGE';
const CURRENT_TOP_CHANGE = 'CURRENT_TOP_CHANGE';
const FINAL_URL = 'FINAL_URL';

const initialState = {
    common: 'http://www.reddit.com/r/',
    currentSub: '',
    currentFilter: '',
    limit: '.json?limit=25&t=',
    currentTop: 'day'
    //countPag: '&count=25',
    //pagCode: 'left or right'
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case CURRENT_FILTER_CHANGE:
            return action.newFilter;
        case CURRENT_SUB_CHANGE:
            return action.newSub;
        case CURRENT_TOP_CHANGE:
            return action.newTop;
        case FINAL_URL:
            return dinamiqURLCreator(state);
        default:
            return state;
    }
}

export function subChange(newSub){
    return {
        type: CURRENT_SUB_CHANGE, newSub };
}
export function filterChange(newFilter){
    return {
        type: CURRENT_FILTER_CHANGE, newFilter };
}
export function topChange(newTop){
    return { type: CURRENT_TOP_CHANGE, newTop };
}
export function finalUrl(url){
    return { type: FINAL_URL };
}

export function dinamiqURLCreator(state){
    const url = state.common + state.currentSub + state.currentFilter + state.limit + state.currentTop;
    return url;
}