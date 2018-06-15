import React from 'react';

const FilterList = (props) => {
    return(
        <ul>
            {props.filters.normal.map((filter, index) => (
                <li key={index}>
                    <button onClick = { () => {props.filterChange(filter); props.resetPage(); props.fetchData();} } >{filter}</button>
                </li>
            ))}
        <h1>{props.filters.urlParts.currentFilter} Posts from {props.filters.urlParts.currentSub}</h1>
        </ul>
        

    )
}
export default FilterList;