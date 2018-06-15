import React, { Component } from 'react';
import SubList from './subList';
import { Link } from 'react-router-dom';
class ItemList extends Component {   
    subChange = (sub) => {
        this.props.subChange(sub)
    };
    fetchData = () => {
        this.props.fetchData()
    };
    componentDidMount(){
        this.props.fetchData();
    };
    render(){
        const { errorFound, loading, saved } = this.props;

        if (errorFound){
            return <p>Sorry! error found loading posts!</p>
        }
        if(loading){
            return <h1>Loading...</h1>
        }
        if (!saved.showSaved){
            return (
                <div>
                    <Link to="/about">
                        <button > Go to about </button>
                    </Link>
                    <button onClick={()=>this.props.show(true)}>Saved Posts</button>
                    <SubList
                        subChange={this.subChange}
                        subs={this.props.subs}
                        fetchData={this.fetchData}
                    />
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
            )
        }
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
                    {saved.saved.map((item, index) => (   
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
export default ItemList;
