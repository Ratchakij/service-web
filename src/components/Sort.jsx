import { NativeSelect } from "@mui/material";
import React from "react";

export default function Sort(props) {
  return (
    <div className="flex gap-2 items-center">
      <h1 className="text-gray-500">Sort by</h1>
      <NativeSelect
        value={props.value}
        inputProps={{ "aria-label": "Sort by" }}
        className="pl-1 w-28 bg-white"
        onChange={props.onChange}
      >
        <option value="">None</option>
        <option value="title">Title: A-Z</option>
        <option value="-title">Title: Z-A</option>
      </NativeSelect>
    </div>
  );
}
