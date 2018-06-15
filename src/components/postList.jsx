import React from 'react';

const PostList = (props) => {
    return (
        <ul>
            {props.posts.map((item) => (   
                <li key={item.data.id}>
                    <a href={item.data.url} target="_blank">{item.data.title }</a>
                    <button onClick = { ()=> props.toggleState(item.data.id) }>{item.data.saved ?  'unsave': 'save' } </button>
                </li>
            ))}
        </ul>
    )
}
export default PostList;