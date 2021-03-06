import React from 'react';
import { urlTypes } from '../types';
import 'antd/dist/antd.css';
import { Button, Menu, Dropdown, Icon } from 'antd';



const FilterList = (props) => {
    const { url, filterChange, fetchData, resetPage, topChange } = props;
    const menuTop = (
        <Menu>
            {url.top.map((item, index) => (
                <Menu.Item onClick={()=> {topChange(item.code);                 
                    filterChange('top');
                    resetPage(); 
                    fetchData();}} 
                    key={index}
                >
                    {item.text}
                </Menu.Item>
            ))} 
        </Menu>);
        const menuControversial = (
            <Menu>
                {url.top.map((item, index) => (
                    <Menu.Item onClick={()=> {topChange(item.code);                 
                        filterChange('controversial');
                        resetPage(); 
                        fetchData();}} 
                        key={index}
                    >
                        {item.text}
                    </Menu.Item>
                ))} 
            </Menu>);
    return(
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
            <Dropdown 
                className={
                    url.urlParts.currentFilter === 'controversial' ? 
                    "active " : 
                    ""
                } overlay={menuControversial}>
                <Button>
                Controversial <Icon type="down" />
                </Button>
            </Dropdown>
            <Dropdown 
                className={
                    url.urlParts.currentFilter === 'top' ? 
                        "active " : 
                        ""
                } overlay={menuTop}>
                <Button>
                Top <Icon type="down" />
                </Button>
            </Dropdown>
        </ul>
    )
}

FilterList.propTypes = {
    url: urlTypes.isRequired,
}

export default FilterList;