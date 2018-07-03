import SubList from './subList';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostList from './postList';

class favorites extends Component {
    subChange = (sub) => {
        this.props.subChange(sub)
    };
    filterChange = (sub) => {
        this.props.filterChange(sub)
    };
    resetPage = () => {
        this.props.resetPage()
    };
    fetchData = () => {
        this.props.fetchData()
    };    
    toggleComments = (index) => {
        this.props.toggleComments(index)
    };
    unSave = (id) => {
        this.props.unSave(id)
    };
    fetchComments = (subreddit, id) => {
        this.props.fetchComments(subreddit, id)
    };
    removeComments = (index) => {
        this.props.removeComments(index)
    };
    render(){
        const { favorites } = this.props;
        return (
            <div>
                <div className="header">
                    <Link to="/">
                        Home 
                    </Link>
                    <Link to="/saved">
                        Favorites
                    </Link>
                </div>
                <Link to="/">
                    <SubList
                        filterChange={this.filterChange}
                        subChange={this.subChange}
                        subs={this.props.subs}
                        resetPage={this.resetPage}
                        fetchData={this.fetchData}
                        />
                </Link>
                {favorites.length <= 0 && <h1> You have no favorite posts :( </h1>}
                    <PostList
                    posts={this.props.favorites}
                    toggleState={this.unSave}
                    toggleComments={this.toggleComments} 
                    comments={this.props.comments}
                    removeComments={this.removeComments}
                    fetchComments={this.fetchComments}
                    />

            </div>
        )
    }
}

export default favorites;
