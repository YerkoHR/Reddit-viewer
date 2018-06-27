import React from 'react';

const FilterList = (props) => {
    const { filters, filterChange, fetchData, resetPage } = props;

    return(
        <div>
            <ul className="list-container">
                {filters.normal.map((filter, index) => (
                    <li key={index}>
                        <button  
                            className={filters.urlParts.currentFilter === filter ? "active" : ""} 
                            onClick = { () => {filterChange(filter); 
                            resetPage(); 
                            fetchData();}} 
                        >
                        {filter}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default FilterList;