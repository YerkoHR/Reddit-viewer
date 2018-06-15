import React from 'react';

const SubList = (props) => {
    return (
        <div>
            <ul>
                {props.subs.map((sub, index) => (
                    <li key={index}>
                        <button onClick = {() =>  {props.subChange(sub); props.filterChange('hot'); props.resetPage(); props.fetchData(); }}>{sub}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubList;