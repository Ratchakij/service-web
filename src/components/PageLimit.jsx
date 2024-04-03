import { NativeSelect } from "@mui/material";
import React from "react";

export default function PageLimit(props) {
  return (
    <div className="flex gap-2 items-center">
      <h1 className="text-gray-500">Display</h1>
      <NativeSelect
        value={props.value}
        inputProps={{ "aria-label": "Display" }}
        className="pl-1 w-12 bg-white"
        onChange={props.onChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </NativeSelect>
    </div>
  );
}
