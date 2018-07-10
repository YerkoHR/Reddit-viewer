import { connect } from 'react-redux';
import { toggleComments } from '../redux/ducks/posts';
import { saveUnsave } from '../redux/ducks/favorites';
import { fetchComments, removeComments } from '../redux/ducks/comments';
import PostList from '../components/postList';


function mapStateToProps (state) {
    return {
        posts: state.posts,
        comments: state.comments
    };
}
export default connect(mapStateToProps, {
    toggleState: saveUnsave,
    toggleComments,
    removeComments,
    fetchComments,
    })(PostList);