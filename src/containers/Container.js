import { connect } from 'react-redux';
import { fetchData } from '../redux/ducks/posts';
import { saveUnsave, unSave, showSaved } from '../redux/ducks/savePost';
import { subChange, filterChange } from '../redux/ducks/dinamiqURL';
import ItemList from '../components/ItemList';

function mapStateToProps  (state)  {
    return {
        posts: state.posts,
        errorFound: state.errorFound,
        loading: state.isLoading,
        saved: state.savePost,
        subs: state.subs,
        filters: state.dinamiqURL
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleState: (id) => dispatch(saveUnsave(id)),
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter)),
        unSave: (id) => dispatch(unSave(id)),
        show: (bool) => dispatch(showSaved(bool))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);