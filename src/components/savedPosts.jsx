import SubList from './subList';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class savedPosts extends Component {
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

    render(){
        const { saved, unSave } = this.props;
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
                <Link to="/">
                    <SubList
                        filterChange={this.filterChange}
                        subChange={this.subChange}
                        subs={this.props.subs}
                        resetPage={this.resetPage}
                        fetchData={this.fetchData}
                        />
                </Link>
                {saved.saved.length <= 0 && <h1> No posts saved currently :( </h1>}
                //
                <ul className="post-list">
                    {saved.saved.map((item, index) => (   
                        <li className="post" key={item.data.id}>
                            <span>{item.data.score}</span>
                            <div className="title-container">
                                <a className="post-title" href={item.data.url} target="_blank">{item.data.title }</a>
                            </div>
                            <button className="save-btn" onClick = { () => unSave(item.data.id) }>{(item.data.saved) ?  'unsave': 'save' } </button>
                        </li>
                        //
                    ))}
                </ul>
            </div>
        )
    }
}

export default savedPosts;