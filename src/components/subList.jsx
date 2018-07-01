import React from 'react';

const SubList = (props) => {
    const { active, subs, filterChange, fetchData, resetPage, subChange } = props;
    
    return (

            <ul className="list-container">
                {subs.map((sub, index) => (
                    <li key={index}>
                        <button 
                            className={active === sub ? "active btn" : "btn"} 
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

export default SubList;