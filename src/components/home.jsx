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
        const { errorFound, loading } = this.props;

        if (errorFound){
            return <p>Sorry! error found loading posts!</p>
        }
        if(loading){
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <Link to="/saved">
                    <button > Saved Posts </button>
                </Link>
                <SubList
                    subChange={this.subChange}
                    filterChange={this.filterChange}
                    subs={this.props.subs}
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
