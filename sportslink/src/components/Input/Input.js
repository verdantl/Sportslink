import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "./Input.css";

class Input extends React.Component {
  render() {
    const { label, value, onChange, name, type, variant } = this.props;

    return (
      <Grid item >
        <TextField
          name={name}
          label={label}
          id="margin-normal"
          defaultValue={value || ""}
          className="input"
          margin="normal"
          onChange={onChange}
          type={type}
          variant={variant}
        />
      </Grid>
    );
  }
}

export default Input;