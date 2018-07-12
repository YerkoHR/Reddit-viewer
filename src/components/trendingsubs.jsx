import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const TrendingSubs = (props) => {
    return (
         <div className="container__info">
            <div className="container__info--border">
                <p className="container__info--title">Trending Subreddits</p>
                <ul>
                    {props.subs.trending.map((trending, index) => (
                        <li key={index}>
                            <div className="container__trending">
                                <div className="container__trending--sub">
                                    <a className="underlined">r/{trending.sub}</a>
                                    <span className="subscribers">{trending.subscribers.toLocaleString()} Subscribers</span>
                                </div>
                                <Button className="container__trending--btn">+</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TrendingSubs;