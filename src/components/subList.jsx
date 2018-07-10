import React from 'react';
import { subsTypes, urlTypes } from '../types';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const SubList = (props) => {
    const { 
        url, 
        subs, 
        filterChange, 
        fetchData, 
        resetPage, 
        subChange, 
        fetchActive } = props;
    
    return (

            <ul className="list-container">
                {subs.user.map((sub, index) => (
                    <li key={index}>

                                <Button
                                className={url.urlParts.currentSub === sub ? "active " : ""} 
                                onClick = {() =>  {subChange(sub); 
                                filterChange('hot'); 
                                resetPage(); 
                                fetchData();
                                sub !== 'all' && fetchActive(sub);}}
                                >{sub}</Button>

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
