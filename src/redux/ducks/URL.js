import update from 'immutability-helper';

const SUB_CHANGE = 'URL/SUB_CHANGE';
const FILTER_CHANGE = 'URL/FILTER_CHANGE';
const TOP_CHANGE = 'URL/TOP_CHANGE';
const FINAL_URL = 'URL/FINAL_URL';
const RESET_URL = 'URL/RESET_URL';
const PAGE_CHANGE = 'dianmiqURL/PAGE_CHANGE';
const RESET_PAGE = 'URL/RESET_PAGE';
const SET_AFTER = 'URL/SET_AFTER';
const SET_BEFORE = 'URL/SET_BEFORE';
const PAGE_DIRECTION = 'URL/PAGE_DIRECTION';

const initialState = {
    urlParts: {
        common: 'https://www.reddit.com/r/',
        currentSub: 'all',
        slash: '/',
        currentFilter: 'hot',
        limit: '.json?limit=25&t=',
        currentTop: 'day',
        countPag: '&count=30',
        pagCode: ''
    },
    filters: [ 'hot', 'new', 'rising'],
    top: [
        { text: 'Past hour', code:'hour'},
        { text: 'Past 24 hours', code:'day'}, 
        { text: 'Past week', code:'week'}, 
        { text: 'Past month', code:'month'}, 
        { text: 'Past year', code:'year'}, 
        { text: 'All time', code:'all'} 
    ],
    pagination: {
        page: 1,
        totalPages: 20,
        after: '',
        before: ''
    },
    final: ''
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
        case PAGE_DIRECTION:
            return update(state, {urlParts:
                {pagCode:{ $set: action.pageCode}}});
        case PAGE_CHANGE:
            return update(state, {pagination:
                {page:{ $set: action.newPage}}});
        case SET_AFTER:
            return update(state, {pagination:
                {after:{ $set: action.after}}});
        case SET_BEFORE:
            return update(state, {pagination:
                {before:{ $set: action.before}}});
        case RESET_URL:
            return update(state, { final: { $set: '' }});
        case FINAL_URL:
            return update(state, { final: { $set: action.final }});
        case RESET_PAGE:
            return (update(state, {
                pagination:{page: {$set: 1}},
                urlParts:{pagCode:{$set: ''}}
            }))
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
export function pageChange(newPage){
    return { type: PAGE_CHANGE, newPage };
}
export function finalUrl(final){
    return { type: FINAL_URL, final };
}
export function resetURL(){
    return { type: RESET_URL };
}
export function resetPage(){
    return { type: RESET_PAGE };
}
export function setAfter(after){
    return { type: SET_AFTER, after };
}
export function setBefore(before){
    return { type: SET_BEFORE, before };
}
export function pageCode(pageCode){
    return { type: PAGE_DIRECTION, pageCode };
}

export function fetchPagination(direction){
    return (dispatch, getState) => {

        const state = getState();
        let nextPage = state.URL.pagination.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

        let  urlPage = direction === 'next'? '&after=' + state.URL.pagination.after : '&before=' + state.URL.pagination.before;

        dispatch(pageChange(nextPage));
        dispatch(pageCode(urlPage));
    }
}

export function URLGenerator(){
    return (dispatch, getState) => {
        
        dispatch(resetURL());
        const state = getState();
        let URL = '';
        for(let x in state.URL.urlParts){
            URL += state.URL.urlParts[x];
        }  
        dispatch(finalUrl(URL));
    }
}