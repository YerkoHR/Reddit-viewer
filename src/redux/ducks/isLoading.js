const IS_LOADING = 'isLoading/IS_LOADING';

export default function reducer(state = false, action){
    switch(action.type){
        case IS_LOADING:
            return action.isLoading;
        default: 
            return state;
    }
}

export function Loading(bool){
    return { type: IS_LOADING, isLoading: bool };
}