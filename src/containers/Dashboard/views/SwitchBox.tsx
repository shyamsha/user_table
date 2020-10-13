import React from "react";
import Switch from "@material-ui/core/Switch";

interface Props {
  checked: any;
  handleChange: any;
}

export default function SwitchBox(props: Props) {
  return (
    <div style={{display:"flex",alignItems:"center"}} >
      <div>
        <Switch
          checked={props.checked}
          onChange={props.handleChange}
          name="checked"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </div>
      <div style={{paddingLeft:"8px"}}>Dark Theme</div>
    </div>
  );
}
