import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";


const Pagination = ({ info, pageNumber, setPageNumber }) => {
  
  return (
    <ReactPaginate 
    className={`${styles.nameClas} pagination justify-content-center gap-4 my-4`}
    forcePage={pageNumber===1? 0 : pageNumber - 1}
    nextLabel={<styles style={{ fontSize: 18 }}>👉🏻</styles>}
    previousLabel={<styles style={{ fontSize: 18 }}>👈🏻</styles>}
    nextClassName={`${styles.btn} btn btn-info`}
    previousClassName={`${styles.btn} btn btn-info`}
    pageClassName={`${styles.nameLoc} page-item`}
    pageLinkClassName={`${styles.nameLoc} page-link`}
    activeClassName={`${styles.nameLoc} active`}
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages} 
    />
  );
};

export default Pagination;
