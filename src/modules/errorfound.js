const FETCH_ERROR = 'errorFound/FETCH_ERROR';

export default function reducer(state = false, action){
    switch(action.type){
        case FETCH_ERROR:
            return  action.error;
        default:
            return state;
    }
}
            
export function errorFound(bool){
    return { type: FETCH_ERROR, error: bool };
}