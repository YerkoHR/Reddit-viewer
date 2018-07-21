import React from 'react';
import { subsTypes, urlTypes } from '../types';
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';

const SubList = (props) => {
    const { 
        url, 
        subs, 
        filterChange, 
        fetchData, 
        resetPage, 
        subChange, 
        fetchActive,
        removeSub } = props;
    
    return (
            <ul className="list">
                <li>
                    <Button
                        className={url.urlParts.currentSub === 'all' ? "active " : ""} 
                        onClick = {() =>  {subChange('all'); 
                        filterChange('hot'); 
                        resetPage(); 
                        fetchData();
                        }}
                        > All
                    </Button>
                </li>
                {subs.user.map((sub, index) => (
                    <li key={index}>
                        <Button
                        className={url.urlParts.currentSub === sub ? "active " : ""} 
                        onClick = {() =>  {subChange(sub); 
                        filterChange('hot'); 
                        resetPage(); 
                        fetchData();
                        sub !== 'all' && fetchActive(sub);}}
                    >
                        {sub} 
                        
                    </Button>
                    <Icon 
                        type="close" 
                        onClick={ () => removeSub(index)}
                    />
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
