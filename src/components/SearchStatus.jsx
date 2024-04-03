import { Button, Radio } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import React from "react";

function SearchStatus(props) {
  return (
    <div className="flex gap-2">
      <Radio
        id="all"
        value=""
        name="status"
        inputProps={{ "aria-label": "" }}
        icon={<AssignmentIcon />}
        checkedIcon={<AssignmentIcon />}
        onChange={props.onChange}
        checked={props.value === ""}
      />
      <Radio
        id="completed"
        value="true"
        name="status"
        inputProps={{ "aria-label": "true" }}
        icon={<AssignmentTurnedInIcon />}
        checkedIcon={<AssignmentTurnedInIcon />}
        onChange={props.onChange}
        checked={props.value === "true"}
      />
      <Radio
        id="pending"
        value="false"
        name="status"
        inputProps={{ "aria-label": "false" }}
        icon={<AssignmentLateIcon />}
        checkedIcon={<AssignmentLateIcon />}
        onChange={props.onChange}
        checked={props.value === "false"}
      />
    </div>

    // <div className="flex gap-2">
    //   <Button
    //     variant={props.value === "" ? "contained" : "outlined"}
    //     size="small"
    //     color="inherit"
    //     data-value=""
    //     className={props.value === "" ? "bg-slate-400" : ""}
    //     onClick={props.onChange}
    //   >
    //     <AssignmentIcon />
    //   </Button>

    //   <Button
    //     variant={props.value === "true" ? "contained" : "outlined"}
    //     color="inherit"
    //     value="true"
    //     className={props.value === "true" ? "bg-slate-400" : ""}
    //     onClick={props.onChange}
    //   >
    //     <AssignmentTurnedInIcon />
    //   </Button>

    //   <Button
    //     variant={props.value === "false" ? "contained" : "outlined"}
    //     color="inherit"
    //     value="false"
    //     className={props.value === "false" ? "bg-slate-400" : ""}
    //     onClick={props.onChange}
    //   >
    //     <AssignmentLateIcon />
    //   </Button>
    // </div>
  );
}

export default SearchStatus;
