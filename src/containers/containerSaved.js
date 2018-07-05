import { connect } from 'react-redux';
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter)),
        unSave: (id) => dispatch(unSave(id)),
        toggleComments: (index) => dispatch(toggleComments(index)),
        resetPage: () => dispatch(resetPage()),
        removeComments: (index) => dispatch(removeComments(index)),
        fetchComments: (sub, id, index) => dispatch(fetchComments(sub, id, index))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(favorites);