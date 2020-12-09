import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "./Input.css";

class Input extends React.Component {
  render() {
    const { label, value, onChange, name, type, variant, errorText, error, params} = this.props;

    return (
      <Grid item >
        <TextField
          params={params}
          name={name}
          helperText={errorText}
          label={label}
          id={name}
          defaultValue={value || ""}
          className="input"
          margin="normal"
          onKeyPress={this.props.onKeyPress}
          onChange={onChange}
          type={type}
          variant={variant}
          error={error}
        />
      </Grid>
    );
  }
}

export default Input;