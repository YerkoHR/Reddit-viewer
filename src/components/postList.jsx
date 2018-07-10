import React from 'react';
import { postsTypes, commentsTypes } from '../types';

const PostList = (props) => {
    const { 
        posts, 
        comments, 
        toggleComments, 
        fetchComments, 
        removeComments, 
        toggleState,
        fetchActive,
        fetchData,
        subChange,
        filterChange,
        resetPage } = props;

    return (
        <ul className="post-list">
        {posts.map((item, index) => (  
            <div key={item.data.id}> 
                <li className="post"> 
                    <div className="title-container">
                        <a 
                            className="post-title" 
                            href={item.data.url} 
                            target="_blank"
                        >
                        {item.data.title}
                        </a>
                        <div className="post-info">
                            <a 
                                href={"https://reddit.com" + 
                                item.data.permalink}
                                target="_blank"
                            >
                                {item.data.created_utc}
                            </a>
                            <a 
                                href={"https://www.reddit.com/user/" + 
                                item.data.author}
                                target="_blank"
                            >
                                by
                                <span className="underlined">
                                    {'u/'+ item.data.author}
                                </span>
                            </a>
                            <a 
                                onClick={() => { fetchActive(item.data.subreddit)
                                    subChange(item.data.subreddit); 
                                    filterChange('hot'); 
                                    resetPage(); 
                                    fetchData();
                                }}
                            >
                                {item.data.subreddit_name_prefixed}
                            </a>
                    
                            <div> 
                                <span>
                                    {item.data.num_comments}
                                </span>
                                <i 
                                    className="fas fa-caret-down fa-lg drop-btn" 
                                    onClick={ () => {
                                    toggleComments(index);
                                    !item.data.clicked ? 
                                    fetchComments(item.data.subreddit, item.data.id, index)
                                    : removeComments(index);
                                    }}
                                >
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="container-right">
                        <span>
                            {item.data.score}
                        </span>
                        <div 
                            className="save-btn" 
                            onClick = { ()=> 
                            toggleState(item.data.id)
                            }
                        >
                            {item.data.saved ?  
                            <i className="far fa-star save"></i> : 
                            <i className="far fa-star"></i> 
                            } 
                        </div>
                    </div>
                </li>
                {comments[index] &&
                <ul
                    className={
                    item.data.clicked ?
                    "show-comments comments-container" : 
                    "hide-comments comments-container"
                    }
                >
                    {comments[index].slice(0, comments[index].length-1).map((comment) => 
                        <li key={comment.id} className="comment">
                            <div className="comment-info">
                                <a 
                                    href={"https://www.reddit.com/user/" + 
                                    item.data.author}
                                    target="_blank"
                                >
                                    {comment.author}
                                </a>
                                <span>{comment.score} points</span>
                                
                            </div>
                            <p>{comment.body}</p>
                            <div className="comment-info">
                                <a 
                                    href={"https://reddit.com" + 
                                    item.data.permalink}
                                    target="_blank"
                                >
                                    Permalink
                                </a>
                                <span>{comment.created_utc}</span>
                            </div>    
                        </li>
                    )}
                </ul>
                }
            </div> 
        ))}
        </ul>
    )
}

PostList.propTypes = {
    posts: postsTypes.isRequired,
    comments: commentsTypes.isRequired
}

export default PostList;