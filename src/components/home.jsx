import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubList from './subList';
import FilterList from './filterList';
import PostList from './postList';
import TrendingSubs from './trendingSubs';
import SubDetails from './subDetails';
import Pagination from './pagination';
import { postsTypes, commentsTypes, urlTypes, subsTypes } from '../types';

class Home extends Component {   

    componentDidMount(){
        this.props.fetchData();
        this.props.fetchDetails('trending_subreddits');
    };

    render(){
        const { 
            loading, 
            subs, 
            url, 
            posts, 
            comments, 
            errorFound, 
            subChange, 
            filterChange, 
            fetchData, 
            resetPage, 
            fetchPagination, 
            fetchComments, 
            removeComments, 
            toggleComments,
            toggleState,
            fetchActive } = this.props;

        return (
            <div>
                <div className="header">
                    <Link to="/"
                    onClick={ () => {
                        subChange('all'); 
                        filterChange('hot'); 
                        resetPage(); 
                        fetchData();}}
                        >
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
                    fetchActive={fetchActive}
                    resetPage={resetPage}
                />
                <FilterList
                    url={url}
                    filterChange={filterChange}
                    fetchData={fetchData}
                    resetPage={resetPage}
                />
                <div className="main-content">
                    <div>
                        {!loading ? 
                        <PostList 
                            fetchData={fetchData}
                            posts={posts}
                            toggleState={toggleState}
                            toggleComments={toggleComments}
                            removeComments={removeComments}
                            fetchComments={fetchComments}
                            fetchActive={fetchActive}
                            comments={comments}
                            subChange={subChange}
                            filterChange={filterChange}
                            resetPage={resetPage}
                        /> :
                        <div className="spinner-container">
                            <div className="lds-dual-ring"></div>
                        </div>}
                            { !errorFound ? 
                            <Pagination 
                                url={url}
                                fetchPagination={fetchPagination}
                                fetchData={fetchData}
                            /> : <h1>No more posts in this page ;) </h1>}
                     </div>   
                    {url.urlParts.currentSub === 'all' ?
                        <TrendingSubs
                            subs={subs}
                        />
                        : <SubDetails 
                            subs={subs}
                        />
                    }

                </div>

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