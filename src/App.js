

/*

To pass props from a parent component to this component
and use it in mapStateToProps change the code below like this:

  const mapStateToProps = (state, props) => {
    return {
      products: state.products,
      user: state.user
      // props use inside here.
    }  
  };
For the same follow the format below adding this 
import { bindActionCreators } from 'redux';

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
  
}
*/
