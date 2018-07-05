import React from 'react';
import { urlTypes } from '../types';

const Pagination = (props) => {
    const {fetchPagination, url, fetchData } = props;

    return (
        <div className="pag-container">
             <i 
                className={url.pagination.page <= 1 ? "fas fa-caret-left fa-lg fa-disabled" : "fas fa-caret-left fa-lg"}

                onClick={() => {fetchPagination( 'prev'); fetchData();}} 
            >
            </i>
            <span>
                page <b>{url.pagination.page}</b> of <b>{url.pagination.totalPages}</b>
            </span>
            <i className={url.pagination.page >= url.pagination.totalPages ? "fas fa-caret-right fa-lg fa-disabled" : "fas fa-caret-right fa-lg"}
                onClick={() => {fetchPagination('next'); fetchData();}}
            >
                
            </i>
        </div>
    );

}

Pagination.propTypes = {
    url: urlTypes.isRequired
}

export default Pagination;