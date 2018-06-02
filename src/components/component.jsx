import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData }  from '../api/fetchData';
import { onClickButton } from '../actions';

class ItemList extends Component {   
    componentDidMount(){
        this.props.fetchData(`https://www.reddit.com/r/animemes/hot.json?limit=5`);
    }
    render(){
        if (this.props.errorFound){
            return <p>Sorry! error found loading posts</p>
        }
        if(this.props.loading){
            return <h1>Loading...</h1>
        }
        return (
            <div>
            <ul>
                {this.props.posts.map((item, index) => (
                    
                    <li key={index}>
                        <a href={item.url} target="_blank">{item.title}</a>
                        <button onClick={this.props.onClickButton}>{this.props.saved ?  'unsave': 'save' } </button>
                        
                        
                    </li>
                ))}
            </ul>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
        return {
            posts: state.posts,
            errorFound: state.errorFound,
            loading: state.isLoading,
            saved: state.toggleSave
        }
}

const mapDispatchProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url)),
        onClickButton: () => dispatch(onClickButton())
    }
}
export default connect(mapStateToProps, mapDispatchProps) (ItemList);
