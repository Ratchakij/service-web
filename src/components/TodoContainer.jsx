import React, { useEffect, useState } from "react";
import PageLimit from "./PageLimit";
import CustomPagination from "./CustomPagination";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
import Sort from "./Sort";
import TodoList from "./TodoList";

export default function TodoContainer(props) {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [sort, setSort] = useState("");
  const [pageLimit, setPageLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("1 effect");
    // const queryString = `?title=${searchText}&completed=${searchStatus}&sort=${sort}`;
    const queryString = [];
    if (searchText) {
      queryString.push("title=" + searchText);
    }
    if (searchStatus) {
      queryString.push("completed=" + searchStatus);
    }
    if (sort) {
      queryString.push("sort=" + sort);
    }

    queryString.push("page=" + currentPage);
    queryString.push("limit=" + pageLimit);

    const timerId = setTimeout(() => {
      props.fetchTodos(queryString.length ? "?" + queryString.join("&") : "");
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchText, searchStatus, sort, pageLimit, currentPage, props.trigger]);

  useEffect(() => {
    console.log("2 effect");
    setSearchText("");
    setSearchStatus("");
    setSort("");
    setPageLimit(5);
    setCurrentPage(1);
  }, [props.trigger]);

  const numPage = Math.ceil(props.total / pageLimit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageLimitChange = (limit) => {
    setPageLimit(limit);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="my-4 flex gap-3">
        <SearchText
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onCancel={() => setSearchText("")}
        />
        <SearchStatus
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
        />
      </div>
      <div className="my-2 flex justify-between">
        <PageLimit
          value={pageLimit}
          onChange={(e) => {
            handlePageLimitChange(e.target.value);
          }}
        />
        <Sort value={sort} onChange={(e) => setSort(e.target.value)} />
      </div>
      <div>
        <TodoList
          todos={props.todos}
          fetchTodos={props.fetchTodos}
          updateTodo={props.updateTodo}
          deleteTodo={props.deleteTodo}
        />
      </div>
      <div className="my-2 flex justify-between items-center">
        <small className="text-muted">
          Showing {Math.min((currentPage - 1) * pageLimit + 1, props.total)} to{" "}
          {Math.min(currentPage * pageLimit, props.total)} of {props.total}{" "}
          entries
        </small>
        <CustomPagination
          numPage={numPage}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      </div>
    </>
  );
}
