import React from 'react';
import { urlTypes } from '../types';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

const Pagination = (props) => {
    const {fetchPagination, url, fetchData } = props;

    return (
        <div className="container-pag">
            <Icon 
                type="caret-left" 
                className={url.pagination.page <= 1 ? "disabled" : ""}

                onClick={() => {fetchPagination( 'prev'); fetchData();}} 
            />
            
            <span>
                page <b>{url.pagination.page}</b> of <b>{url.pagination.totalPages}</b>
            </span>
            <Icon 
                type="caret-right"
                className={url.pagination.page >= url.pagination.totalPages ? "disabled" : ""}
                onClick={() => {fetchPagination('next'); fetchData();}}
            />
        </div>
    );

}

Pagination.propTypes = {
    url: urlTypes.isRequired
}

export default Pagination;