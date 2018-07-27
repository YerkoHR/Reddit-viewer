import { connect } from 'react-redux';
import { fetchActive, removeSub } from '../redux/ducks/subs';
import { fetchData } from '../redux/ducks/posts';
import { unSave, toggleComments } from '../redux/ducks/favorites';
import { subChange, filterChange, resetPage } from '../redux/ducks/URL';
import { fetchComments, removeComments } from '../redux/ducks/comments';
import favorites from '../components/favorites';

function mapStateToProps (state) {
    return {
        favorites: state.favorites,
        comments: state.comments,
        subs: state.subs,
        url: state.URL
    };
}
export default connect(mapStateToProps, {
    fetchData,
    unSave,
    subChange,
    filterChange,
    toggleComments,
    resetPage,
    removeComments,
    fetchComments,
    fetchActive,
    removeSub
    })(favorites);