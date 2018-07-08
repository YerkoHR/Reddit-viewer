import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubList from './subList';
import FilterList from './filterList';
import PostList from './postList';
import Pagination from './pagination';
import { postsTypes, commentsTypes, urlTypes, subsTypes } from '../types';

class Home extends Component {   

    subChange = (sub) => {
        this.props.subChange(sub)
    };
    filterChange = (sub) => {
        this.props.filterChange(sub)
    };
    fetchData = () => {
        this.props.fetchData()
    };
    toggleState = (id) => {
        this.props.toggleState(id)
    };
    toggleComments = (index) => {
        this.props.toggleComments(index)
    };
    fetchPagination = (direction) => {
        this.props.fetchPagination(direction)
    };
    resetPage = () => {
        this.props.resetPage()
    };
    fetchComments = (subreddit, id, index) => {
        this.props.fetchComments(subreddit, id, index)
    };
    removeComments = (index) => {
        this.props.removeComments(index)
    };
    componentDidMount(){
        this.props.fetchData();
        this.props.fetchTrending();
    };

    render(){
        const { loading, subs, url, posts, comments, errorFound } = this.props;
        const { 
            subChange, 
            filterChange, 
            fetchData, 
            resetPage, 
            fetchPagination, 
            fetchComments, 
            removeComments, 
            toggleComments,
            toggleState } = this;

        if(loading){
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
                    <SubList
                        subChange={subChange}
                        filterChange={filterChange}
                        subs={subs}
                        url={url}
                        fetchData={fetchData}
                        resetPage={resetPage}
                    />
                    <FilterList 
                        url={url}
                        filterChange={filterChange}
                        fetchData={fetchData}
                        resetPage={resetPage}
                    />
                    <div className="spinner-container"><div className="lds-dual-ring"></div></div>
                </div>
            )
        }
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
                <SubList
                    subChange={subChange}
                    filterChange={filterChange}
                    subs={subs}
                    url={url}
                    fetchData={fetchData}
                    resetPage={resetPage}
                />
                <FilterList
                    url={url}
                    filterChange={filterChange}
                    fetchData={fetchData}
                    resetPage={resetPage}
                />
                <PostList 
                    posts={posts}
                    toggleState={toggleState}
                    toggleComments={toggleComments}
                    removeComments={removeComments}
                    fetchComments={fetchComments}
                    comments={comments}
                /> 
                { !errorFound ? 
                <Pagination 
                    url={url}
                    fetchPagination={fetchPagination}
                    fetchData={fetchData}
                /> : <h1>No more posts in this page ;) </h1>}
            </div>
        )
    }
}

Home.propTypes = {
    subs: subsTypes.isRequired,
    url: urlTypes.isRequired,
    posts: postsTypes.isRequired,
    comments: commentsTypes.isRequired
}

export default Home;