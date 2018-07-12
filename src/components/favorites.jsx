import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostList from './postList';
import SubList from './subList';
import { commentsTypes, subsTypes, postsTypes } from '../types';

class favorites extends Component {

    render(){
        const { 
            favorites, 
            subs, 
            comments, 
            url,
            filterChange, 
            subChange, 
            resetPage, 
            fetchData, 
            unSave, 
            toggleComments, 
            removeComments, 
            fetchComments,
            fetchActive } = this.props;

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
                        fetchActive={fetchActive}
                    />
                </Link>
                {favorites.length <= 0 ? <h1> You have no favorite posts :( </h1>
                    :<PostList                        
                    fetchActive={fetchActive}                        
                    posts={favorites}
                    toggleState={unSave}
                    toggleComments={toggleComments} 
                    comments={comments}
                    removeComments={removeComments}
                    fetchComments={fetchComments}
                    />}

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
