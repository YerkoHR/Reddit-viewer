import { connect } from 'react-redux';
import { fetchData } from '../redux/ducks/posts';
import { unSave } from '../redux/ducks/savePost';
import { subChange, filterChange } from '../redux/ducks/dinamiqURL';
import savedPosts from '../components/savedPosts';

function mapStateToProps  (state)  {
    return {
        saved: state.savePost,
        subs: state.subs,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter)),
        unSave: (id) => dispatch(unSave(id)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(savedPosts);