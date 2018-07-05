import { connect } from 'react-redux';
import { fetchData, toggleComments } from '../redux/ducks/posts';
import { saveUnsave } from '../redux/ducks/favorites';
import { fetchComments, removeComments } from '../redux/ducks/comments';
import { subChange, filterChange, fetchPagination, resetPage } from '../redux/ducks/URL';
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleState: (id) => dispatch(saveUnsave(id)),
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter)),
        fetchPagination: (direction) => dispatch(fetchPagination(direction)),
        resetPage: () => dispatch(resetPage()),
        toggleComments: (index) => dispatch(toggleComments(index)),
        removeComments: (index) => dispatch(removeComments(index)),
        fetchComments: (sub, id, index) => dispatch(fetchComments(sub, id, index))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);