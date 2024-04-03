import Pagination from "@mui/material/Pagination";
import React from "react";

export default function CustomPagination(props) {
  return (
    <Pagination
      size="small"
      showFirstButton
      showLastButton
      count={props.numPage}
      page={props.currentPage}
      onChange={(event, value) => props.onClick(value)}
    />
  );
}
