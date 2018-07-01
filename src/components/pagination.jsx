import React from 'react';

const Pagination = (props) => {
    const {fetchPagination, pag, fetchData } = props;

    return (
        <div className="pag-container">
             <i 
                className={pag.pagination.page <= 1 ? "fas fa-caret-left fa-lg fa-disabled" : "fas fa-caret-left fa-lg"}

                onClick={() => {fetchPagination( 'prev'); fetchData();}} 
            >
            </i>
            <span>
                page <b>{pag.pagination.page}</b> of <b>{pag.pagination.totalPages}</b>
            </span>
            <i className={pag.pagination.page >= pag.pagination.totalPages ? "fas fa-caret-right fa-lg fa-disabled" : "fas fa-caret-right fa-lg"}
                onClick={() => {fetchPagination('next'); fetchData();}}
            >
                
            </i>
        </div>
    );

}

export default Pagination;