import { combineReducers } from 'redux';
import URL from './URL';
import posts from './posts';
import favorites from './favorites';
import errorFound from './errorfound';
import isLoading from './isLoading';
import subs from './subs';
import comments from './comments';

export default combineReducers({
    posts,
    URL,
    favorites,
    isLoading,
    errorFound,
    subs, 
    comments
});