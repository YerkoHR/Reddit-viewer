import { connect } from 'react-redux';
import { fetchData } from '../redux/ducks/posts';
import { saveUnsave } from '../redux/ducks/savePost';
import { subChange, filterChange } from '../redux/ducks/dinamiqURL';
import Home from '../components/home';

function mapStateToProps  (state)  {
    return {
        posts: state.posts,
        errorFound: state.errorFound,
        loading: state.isLoading,
        subs: state.subs,
        filters: state.dinamiqURL
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleState: (id) => dispatch(saveUnsave(id)),
        fetchData: () => dispatch(fetchData()),
        subChange: (sub) => dispatch(subChange(sub)),
        filterChange: (filter) => dispatch(filterChange(filter))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);