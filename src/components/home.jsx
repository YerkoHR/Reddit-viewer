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
            topChange,
            fetchComments, 
            removeComments, 
            toggleComments,
            toggleState,
            addSub,
            fetchActive,
            toRemove,
            removeSub } = this.props;

        return (
            <div>
                <div className="header white">
                    <div>
                        <img className="header__logo"src={require('../images/reddit.svg')} alt=""/>
                        <span>My reddit viewer</span>
                    </div>
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
                    removeSub={removeSub}
                />
                <FilterList
                    url={url}
                    filterChange={filterChange}
                    fetchData={fetchData}
                    resetPage={resetPage}
                    topChange={topChange}
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
                        <div className="spinner">
                            <div className="spinner__animation"></div>
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
                            subChange={subChange}
                            filterChange={filterChange}
                            resetPage={resetPage}
                            fetchActive={fetchActive}
                            fetchData={fetchData}
                            addSub={addSub}
                            toRemove={toRemove}
                        />
                        : <SubDetails 
                            subs={subs}
                            fetchActive={fetchActive}
                            subChange={subChange}
                            filterChange={filterChange}
                            fetchData={fetchData}
                            addSub={addSub}
                            resetPage={resetPage}
                            toRemove={toRemove}
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