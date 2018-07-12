import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const SubDetails = ({ subs }) => {
    return (
        <div className="container__info">
            <div className="container__info--border">
                <div className="container__details">
                    <p className="container__details--title">Community details</p>
                    <span className="container__details--sub">{subs.active.display_name_prefixed}</span>
                    <div className="container__details--numbers">
                        <div className="numbers__column">
                            <span >{subs.active.subscribers && subs.active.subscribers.toLocaleString()}</span>
                            <span>Subscriptors</span>
                        </div>
                        <div className="numbers__column">
                            <span >{subs.active.active_user_count && subs.active.active_user_count.toLocaleString()}</span>
                            <span>Online</span>
                        </div>
                    </div>
                    <p className="container__details--desc">{subs.active.public_description}</p>
                    </div>
                <Button>Add</Button>
            </div>
        </div>
    );
}

export default SubDetails;