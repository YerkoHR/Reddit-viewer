export const IS_LOADING = 'IS_LOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const DISPLAY_SUB = 'DISPLAY_SUB';
export const ITEMS_ERROR = 'ITEMS_ERROR';
export const TOGGLE_SAVE = 'TOGGLE_SAVE';
export const URL_CHANGE = 'URL_CHANGE';

export function errorFound(bool){
    return {
        type: ITEMS_ERROR,
        errorFound: bool
    }
}
export function isLoading(bool){
    return {
        type: IS_LOADING,
        isLoading: bool
    }
}
export function fetchDataSuccess(posts){
    return {
        type: FETCH_SUCCESS,
        posts
    }
}

function displaySubs(subreddit){
    return {
        type: DISPLAY_SUB,
        subreddit
    }
}
export function onClickButton() {
    return {
        type: TOGGLE_SAVE
    }
}

export function toggle(state){
    console.log(state);
    var newState = state;
    newState= !newState;
    return newState;
}
function urlChange(currentSub, currentFilter, currentTop){
    return {
        type: URL_CHANGE,
        payload: {
            currentSub,
            currentFilter,
            currentTop,
        }
    }

}