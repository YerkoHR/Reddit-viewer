import React from 'react';

const Comments = (props) => {
    return (
        <div>
            <ul>
                {Object.keys(props.comments).map((key, index) => (
                    <li>{props.comments[key].map((x)=>x.body)}</li>
                    
                ))}
            </ul>
        </div>
    );
}
export default Comments;