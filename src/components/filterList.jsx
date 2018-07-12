import React from 'react';
import { urlTypes } from '../types';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const FilterList = (props) => {
    const { url, filterChange, fetchData, resetPage } = props;

    return(
        <div>
            <ul className="list">
                {url.filters.map((filter, index) => (
                    <li key={index}>
                        <Button  
                            className={
                                url.urlParts.currentFilter === filter ? 
                                "active " : 
                                ""
                            } 
                            onClick = { () => {
                            filterChange(filter); 
                            resetPage(); 
                            fetchData();}
                            } 
                        >
                        {filter}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

FilterList.propTypes = {
    url: urlTypes.isRequired,
}

export default FilterList;