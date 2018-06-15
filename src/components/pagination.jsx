import React from 'react';

const Pagination = (props) => {
    const {fetchPagination, pag, fetchData } = props;

    return (
        <div>
            <button
                onClick={() => {fetchPagination( 'prev'); fetchData();}} 
                disabled={pag.pagination.page <= 1}
            >
                &larr;
            </button>
            <span>
                page <b>{pag.pagination.page}</b> of <b>{pag.pagination.totalPages}</b>
            </span>
            <button
                onClick={() => {fetchPagination('next'); fetchData();}}
                disabled={pag.pagination.page >= pag.pagination.totalPages}
            >
                &rarr;
            </button>
        </div>
    );

}

export default Pagination;