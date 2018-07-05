import React from 'react';
import { subsTypes, urlTypes } from '../types';

const SubList = (props) => {
    const { url, subs, filterChange, fetchData, resetPage, subChange } = props;
    
    return (

            <ul className="list-container">
                {subs.map((sub, index) => (
                    <li key={index}>
                        <button 
                            className={url.urlParts.currentSub === sub ? "active btn" : "btn"} 
                            onClick = {() =>  {subChange(sub); 
                            filterChange('hot'); 
                            resetPage(); 
                            fetchData(); }}
                        > 
                        {sub} 
                        </button>
                    </li>
                ))}
            </ul>

    )
}

SubList.propTypes = {
    subs: subsTypes.isRequired,
    url: urlTypes.isRequired
}

export default SubList;