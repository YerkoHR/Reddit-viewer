import { connect } from 'react-redux';
import { fetchData } from '../modules/posts';
import { saveUnsave, unsavePost, unSave, showSaved } from '../modules/savePost';
import { subChange, filterChange } from '../modules/dinamiqURL';
import ItemList from '../components/ItemList';

function mapStateToProps = (state) => {
    return {
        posts: state.posts,
        errorFound: state.errorFound,
        loading: state.isLoading,
        saved: state.savePost,
        subs: state.subs,
        filters: state.dinamiqURL,
    }
}

function mapDispatchProps = (dispatch) => {
    return {
        toggleState: (id) => dispatch(saveUnsave(id)),
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter)),
        unSave: (id) => dispatch(unSave(id)),
        show: (bool) => dispatch(showSaved(bool))
    }
}
export default connect(mapStateToProps, mapDispatchProps)(ItemList);