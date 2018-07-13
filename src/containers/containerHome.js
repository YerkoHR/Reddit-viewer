import { connect } from 'react-redux';
import { fetchData, toggleComments } from '../redux/ducks/posts';
import { saveUnsave } from '../redux/ducks/favorites';
import { fetchDetails, fetchActive, addSub } from '../redux/ducks/subs';
import { fetchComments, removeComments } from '../redux/ducks/comments';
import { subChange, filterChange, fetchPagination, resetPage, topChange } from '../redux/ducks/URL';
import Home from '../components/home';

function mapStateToProps  (state)  {
    return {
        posts: state.posts,
        errorFound: state.errorFound,
        loading: state.isLoading,
        subs: state.subs,
        url: state.URL,
        comments: state.comments
    };
}

export default connect(mapStateToProps, {
    toggleState: saveUnsave,
    topChange,
    toggleComments,
    fetchData,
    fetchDetails,
    fetchActive,
    fetchPagination,
    fetchComments,
    subChange,
    filterChange,
    removeComments,
    resetPage,
    addSub
    })(Home);