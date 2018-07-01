import React from 'react';

const PostList = (props) => {

    return (
        <ul className="post-list">
            {props.posts.map((item, index) => (   
                <div key={item.data.id}>
                <li className="post" > 
                    <div className="title-container">
                        <a className="post-title" href={item.data.url} target="_blank">{item.data.title }</a>
                        <div className="post-info">
                            <a 
                                href={"https://reddit.com" + item.data.permalink}>
                                {item.data.created_utc}
                            </a>
                            <a 
                                href={"https://www.reddit.com/user/" + item.data.author}>
                                by<span className="underlined">{'u/'+ item.data.author}</span>
                            </a>
                            <a 
                                href={"https://www.reddit.com/" + item.data.subreddit_name_prefixed}>
                                {item.data.subreddit_name_prefixed}
                            </a>
                    
                            <div> 
                                <span>{item.data.num_comments} </span>
                                <i className="fas fa-caret-down fa-lg drop-btn" onClick={ () => props.toggleComments(index)}></i>
                            </div>
                        </div>
                    </div>
                    <div className="container-right">
                        <span>{item.data.score}</span>
                        <div className="save-btn" onClick = { ()=> props.toggleState(item.data.id) }>{item.data.saved ?  <i className="far fa-star save"></i> : <i className="far fa-star"></i> } </div>
                    </div>
                </li>
                <div
                    key={index}
                    className={item.data.clicked ? "show-comments " : "hide-comments" }>
                    
                    <p >COMMENT 1</p>
                    <p >COMMENT 2</p>
                </div>
                </div>
            ))}
        </ul>
    )
}
export default PostList;
