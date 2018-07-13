import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const SubDetails = ({ subs }) => {
    return (
        <div className="container-info fade-in">
            <div className="container__box white">
                <div className="container__details">
                    <p className="container__details--title">Community details</p>
                    <div className="container__details--sub">
                        <img 
                            className="container__details--img" 
                            style={{background: 
                                `url(${subs.active.icon_img}) 
                                center center /100% no-repeat 
                                ${subs.active.key_color}`}}
                            alt=""
                        />
                        <span >{subs.active.display_name_prefixed}</span>
                    </div>
                    <div className="container__details--numbers">
                        <div className="numbers__column">
                            <span >{subs.active.subscribers}</span>
                            <span>Subscriptors</span>
                        </div>
                        <div className="numbers__column">
                            <span >{subs.active.active_user_count}</span>
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