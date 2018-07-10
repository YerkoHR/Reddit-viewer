import React from 'react';

const SubDetails = ({ subs }) => {
    return (
        <div className="container-details">
            <p>Community details</p>
            <div>
                <span>{subs.active.subscribers && subs.active.subscribers.toLocaleString()}Subscriptors</span>
                <span>{subs.active.active_user_count && subs.active.active_user_count.toLocaleString()}Online</span>
            </div>
            <p>{subs.active.public_description}</p>
            <button>Add</button>
        </div>
    );
}

export default SubDetails;