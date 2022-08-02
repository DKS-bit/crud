import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Container } from "../styles/Pagination.styled";


function Pagination(props) {

    const handlePageClick = (e) => {
      let controlOffset = e.selected * 3;
      props.setOffSet(controlOffset);
  
    }
  
  
    return (
<Container>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={props.count/3}
          previousLabel="< "
          renderOnZeroPageCount={null}
        />
</Container>
    );
  }
  
  export default Pagination;