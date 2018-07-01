import React, { Component } from 'react';
import SubList from './subList';
import FilterList from './filterList';
import PostList from './postList';
import Pagination from './pagination';
import { Link } from 'react-router-dom';

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
    componentDidMount(){
        this.props.fetchData();
    };

    render(){
        const { loading } = this.props;

        if(loading){
            return (
                <div>
                    <div className="header">
                        <Link to="/">
                        Home
                        </Link>
                        <Link to="/saved">
                        Saved posts
                        </Link>
                    </div>
                    <SubList
                        subChange={this.subChange}
                        filterChange={this.filterChange}
                        subs={this.props.subs}
                        active={this.props.filters.urlParts.currentSub}
                        fetchData={this.fetchData}
                        resetPage={this.resetPage}
                    />
                    <FilterList 
                        filters={this.props.filters}
                        filterChange={this.filterChange}
                        fetchData={this.fetchData}
                        resetPage={this.resetPage}
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
                    Saved posts 
                    </Link>
                </div>
                <SubList
                    subChange={this.subChange}
                    filterChange={this.filterChange}
                    subs={this.props.subs}
                    active={this.props.filters.urlParts.currentSub}
                    fetchData={this.fetchData}
                    resetPage={this.resetPage}
                />
                <FilterList
                    filters={this.props.filters}
                    filterChange={this.filterChange}
                    fetchData={this.fetchData}
                    resetPage={this.resetPage}
                />
                <PostList 
                    posts={this.props.posts}
                    toggleState={this.toggleState}
                    toggleComments={this.toggleComments}
                />
                <Pagination 
                    pag={this.props.filters}
                    fetchPagination={this.fetchPagination}
                    fetchData={this.fetchData}
                />
            </div>
        )
    }
}
export default Home;
