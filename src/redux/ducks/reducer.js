import { combineReducers } from 'redux';
import dinamiqURL from './dinamiqURL';
import posts from './posts';
import savePost from './savePost';
import errorFound from './errorfound';
import isLoading from './isLoading';
import subs from './subs';

export default combineReducers({
    posts,
    dinamiqURL,
    savePost,
    isLoading,
    errorFound,
    subs
});