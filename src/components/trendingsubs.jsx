import React from 'react';

const TrendingSubs = (props) => {
    return (
         <div className="container-trending">
            <p>Trending Subreddits</p>
            <ul >
                {props.subs.trending.map((trending) => (
                    <li>
                        <div class="trending-sub">
                            <p>{trending.sub}</p>
                            <span>{trending.subscribers} Subscribers</span>
                            <button>Add</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrendingSubs;