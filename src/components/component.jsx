import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../modules/posts';
import { saveUnsave } from '../modules/savePost';

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
                <h1>Posts</h1>
                <ul>
                    {this.props.posts.map((item, index) => (   
                        <li key={index}>
                            <a href={item.data.url} target="_blank">{item.data.title }</a>
                            <button onClick = { ()=>this.props.toggleState(item.data.id) }>{item.data.saved ?  'unsave': 'save' } </button>
                        </li>
                    ))}
                </ul>
                {this.props.saved.length>0 &&
                <div>
                    <h1>Saved posts</h1>
                    <ul>
                        {this.props.saved.map((item, index) => (   
                            <li key={index}>
                                <a href={item.data.url} target="_blank">{item.data.title }</a>
                                <button onClick = { ()=>this.props.toggleState(item.data.id) }>{item.data.saved ?  'unsave': 'save' } </button>
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        errorFound: state.error,
        loading: state.isLoading,
        saved: state.savePost
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        toggleState: (id) => dispatch(saveUnsave(id)),
        fetchData: (url) => dispatch(fetchData(url))
    }
}
export default connect(mapStateToProps, mapDispatchProps) (ItemList);
