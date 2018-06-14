import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchData } from '../modules/posts';
import { saveUnsave, unsavePost, unSave, showSaved } from '../modules/savePost';
import { subChange, filterChange } from '../modules/dinamiqURL';
class ItemList extends Component {   
    componentDidMount(){
        this.props.fetchData();
    }
    render(){
        if (this.props.errorFound){
            return <p>Sorry! error found loading posts!</p>
        }
        if(this.props.loading){
            return <h1>Loading...</h1>
        }
        if (!this.props.saved.showSaved){
        return (
            <div>
                <button onClick={()=>this.props.show(true)}>Saved Posts</button>
                <ul>
                    {this.props.subs.map((sub, index) => (
                        <li key={index}>
                            <button onClick = {() =>  {this.props.subChange(sub); this.props.fetchData()}}>{sub}</button>
                        </li>
                    ))}
                </ul>
                <ul>
                    {this.props.filters.normal.map((filter, index) => (
                        <li key={index}>
                            <button onClick = { () => {this.props.filterChange(filter); this.props.fetchData();} } >{filter}</button>
                        </li>
                    ))}
                </ul>
                
                <div>
                    <h1>{this.props.filters.urlParts.currentFilter} Posts from {this.props.filters.urlParts.currentSub}</h1>
                    <ul>
                        {this.props.posts.map((item) => (   
                            <li key={item.data.id}>
                                <a href={item.data.url} target="_blank">{item.data.title }</a>
                                <button onClick = { ()=> this.props.toggleState(item.data.id) }>{item.data.saved ?  'unsave': 'save' } </button>
                            </li>
                        ))}
                    </ul>
                </div>
                


            </div>
        );}else{
            return (
                <div>
                    <ul>
                        {this.props.subs.map((sub, index) => (
                            <li key={index}>
                                <button onClick = {() =>  {this.props.subChange(sub); this.props.fetchData()}}>{sub}</button>
                            </li>
                        ))}
                    </ul>
                    <h1>Saved posts</h1>
                    <ul>
                        {this.props.saved.saved.map((item, index) => (   
                            <li key={item.data.id}>
                                <a href={item.data.url} target="_blank">{item.data.title }</a>
                                <button onClick = { () => this.props.unSave(item.data.id) }>{(item.data.saved) ?  'unsave': 'save' } </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        errorFound: state.errorFound,
        loading: state.isLoading,
        saved: state.savePost,
        subs: state.subs,
        filters: state.dinamiqURL,
    }
}

const mapDispatchProps = (dispatch) => {
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
