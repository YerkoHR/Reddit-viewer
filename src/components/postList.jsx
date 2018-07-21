import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
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
        <ul className="container-post white">
        {posts.map((item, index) => (  
            <div key={item.data.id}> 
                <li className="post"> 
                    <div className="post__title">
                        <a 
                            className="post__title--style" 
                            href={item.data.url} 
                            target="_blank"
                        >
                        {item.data.title}
                        </a>
                        <div className="post__details">
                            <a 
                                className="post__link"
                                href={"https://reddit.com" + 
                                item.data.permalink}
                                target="_blank"
                            >
                                {item.data.created_utc}
                            </a>
                            <a 
                                className="post__link"
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
                                className="post__link"
                                onClick={() => { fetchActive(item.data.subreddit)
                                    subChange(item.data.subreddit); 
                                    filterChange('hot'); 
                                    resetPage(); 
                                    fetchData();
                                }}
                            >
                                {item.data.subreddit_name_prefixed}
                            </a>
                    
                            <div className="post__comments"> 
                                <span className="post__comments--num"> 
                                    {item.data.num_comments}
                                </span>
                                {!item.data.clicked ? 
                                <Icon type="caret-down"  
                                    className="post__comments--icon-down"
                                    onClick={ () => {
                                    toggleComments(index);
                                    !item.data.clicked ? 
                                    fetchComments(item.data.subreddit, item.data.id, index)
                                    : removeComments(index);
                                    }}
                                /> : 
                                    <Icon type="caret-up" 
                                    className="post__comments--icon-up"
                                    onClick={ () => {
                                    toggleComments(index);
                                    !item.data.clicked ? 
                                    fetchComments(item.data.subreddit, item.data.id, index)
                                    : removeComments(index);
                                    }}
                                />}      
                            </div>
                        </div>
                    </div>
                    <div className="post__details--right">
                        <span>
                            {item.data.score}
                        </span>
                        <div 
                            onClick = { ()=> 
                            toggleState(item.data.id)
                            }
                        >
                            {item.data.saved ?  
                            <Icon type="star" className="star save"/> :
                            <Icon type="star" className="star"/>
                            } 
                        </div>
                    </div>
                </li>
                {comments[index] &&
                <ul
                    className={
                    item.data.clicked ?
                    "comment--show " : 
                    "comment--hide "
                    }
                >
                    {comments[index].slice(0, comments[index].length-1).map((comment) => 
                        <li key={comment.id} className="comment">
                            <div className="comment__info">
                                <a 
                                    className="comment__link"
                                    href={"https://www.reddit.com/user/" + 
                                    comment.author}
                                    target="_blank"
                                >
                                    {comment.author}
                                </a>
                                <div>{comment.score} points</div>
                                <div>{comment.created_utc}</div>
                            </div>
                            <span>{comment.body}</span>


                                
                       
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