const ITEMS_ERROR = 'ITEMS_ERROR';

export default function reducer(state = false, action){
    switch(action.type){
        case ITEMS_ERROR:
            return  action.error;
        default:
            return state;
    }
}
            
export function errorFound(bool){
    return { type: ITEMS_ERROR,error: bool };
}