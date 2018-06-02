import { isLoading, fetchDataSuccess, errorFound } from "../actions";
import axios from 'axios';

export function fetchData(url){
    return (dispatch) => {
        
        dispatch(isLoading(true));
        axios.get(url)
        .then((response) => {
            
            const items = response.data.data.children.map((item) => {
                return item.data;
            });
            dispatch(isLoading(false));
            dispatch(fetchDataSuccess(items))
        })
        .catch(() => dispatch(errorFound(true)));
}
      
}
