import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const TrendingSubs = (props) => {
    return (
         <div className="container-info fade-in">
            <div className="container__box">
                <p className="container__box--title">Trending Subreddits</p>
                <ul>
                    {props.subs.trending.map((trending, index) => (
                        <li key={index}>
                            <div className="trending">
                                <div className="trending__sub">
                                    <a className="trending--underlined">r/{trending.sub}</a>
                                    <span className="trending__subscribers">{trending.subscribers.toLocaleString()} Subscribers</span>
                                </div>
                                <Button>+</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TrendingSubs;