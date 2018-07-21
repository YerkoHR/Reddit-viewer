import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const TrendingSubs = ({ 
    subs, 
    subChange, 
    filterChange, 
    fetchData, 
    resetPage, 
    fetchActive, 
    addSub,
    toRemove }) => {
    return (
         <div className="container-info fade-in">
            <div className="container__box white">
                <p className="container__box--title">Trending Subreddits</p>
                <ul>
                    {subs.trending.map((trending, index) => (
                        <li key={index}>
                            <div className="trending">
                                <div className="trending__sub">
                                    <a 
                                        onClick = {() =>  
                                        {subChange(trending.sub); 
                                        fetchActive(trending.sub);
                                        filterChange('hot'); 
                                        resetPage(); 
                                        fetchData();}}
                                        className="trending--underlined"
                                        >
                                    r/{trending.sub}
                                    </a>
                                    <span className="trending__subscribers">{trending.subscribers.toLocaleString()} Subscribers</span>
                                </div>
                                {!subs.user.includes(trending.sub) ? 
                                <Button
                                    onClick={ ()=> addSub(trending.sub)}
                                >+</Button> :
                                <Button
                                    onClick={ ()=> toRemove(trending.sub)}                                    
                                >-</Button>
                            }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TrendingSubs;