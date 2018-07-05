import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostList from './postList';
import SubList from './subList';
import { commentsTypes, subsTypes, postsTypes } from '../types';

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
    fetchComments = (subreddit, id, index) => {
        this.props.fetchComments(subreddit, id, index)
    };
    removeComments = (index) => {
        this.props.removeComments(index)
    };
    render(){
        const { favorites, subs, comments, url } = this.props;
        const { 
            filterChange, 
            subChange, 
            resetPage, 
            fetchData, 
            unSave, 
            toggleComments, 
            removeComments, 
            fetchComments } = this;

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
                        filterChange={filterChange}
                        subChange={subChange}
                        subs={subs}
                        url={url}
                        resetPage={resetPage}
                        fetchData={fetchData}
                    />
                </Link>
                {favorites.length <= 0 && <h1> You have no favorite posts :( </h1>}
                    <PostList
                    posts={favorites}
                    toggleState={unSave}
                    toggleComments={toggleComments} 
                    comments={comments}
                    removeComments={removeComments}
                    fetchComments={fetchComments}
                    />

            </div>
        )
    }
}

favorites.propTypes = {
    favorites: postsTypes.isRequired,
    subs: subsTypes.isRequired,
    comments: commentsTypes.isRequired
}

export default favorites;
