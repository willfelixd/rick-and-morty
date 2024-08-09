import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";


const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  
  return (
    <>
      <style jsx>
          {`
            @media (max-width: 768px) {
              .pagination {
                font-size: 12px;
              }
              .next,
              .prev {
                display: none;
              }
            }
            @media (max-width: 768px) {
              .pagination {
                font-size: 14px;
              }
            }
          `}
        </style>
        <ReactPaginate 
            className={`${styles.nameClas} pagination justify-content-center gap-4 my-4`}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel={<styles style={{ fontSize: 18 }}>👉🏻</styles>}
            previousLabel={<styles style={{ fontSize: 18 }}>👈🏻</styles>}
            nextClassName={`${styles.btn} btn btn-info`}
            previousClassName={`${styles.btn} btn btn-info`}
            activeClassName="active"
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            pageCount={info?.pages} 
            onPageChange={pageChange}
            pageClassName={`${styles.nameLoc} page-item`}
            pageLinkClassName={`${styles.nameLoc} page-link`}
        />
    </>
  );
};

export default Pagination;
