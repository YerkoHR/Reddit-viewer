import React from 'react';
import { urlTypes } from '../types';

const FilterList = (props) => {
    const { url, filterChange, fetchData, resetPage } = props;

    return(
        <div>
            <ul className="list-container">
                {url.filters.map((filter, index) => (
                    <li key={index}>
                        <button  
                            className={
                                url.urlParts.currentFilter === filter ? 
                                "active btn" : 
                                "btn"
                            } 
                            onClick = { () => {
                            filterChange(filter); 
                            resetPage(); 
                            fetchData();}
                            } 
                        >
                        {filter}
                        </button>
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