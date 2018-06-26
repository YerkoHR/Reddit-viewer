import React from 'react';

const PostList = (props) => {
    return (
        <ul className="post-list">
            {props.posts.map((item) => (   
                <li className="post" key={item.data.id}> 
                    <span>{item.data.score}</span>
                    <div className="title-container">
                        <a className="post-title" href={item.data.url} target="_blank">{item.data.title }</a>
                    </div>
                    <button className="save-btn" onClick = { ()=> props.toggleState(item.data.id) }>{item.data.saved ?  'unsave': 'save' } </button>
                </li>
            ))}
        </ul>
    )
}
export default PostList;