import {
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function SearchText(props) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 410 }}
    >
      <InputBase
        value={props.value}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "To Do..." }}
        onChange={props.onChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        sx={{ p: "10px" }}
        aria-label="directions"
        onClick={props.onCancel}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
}
