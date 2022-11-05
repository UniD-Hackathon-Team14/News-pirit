import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const NativePickers = ({ style, defaultValue, label, handleChange }) => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        size="small"
        type="date"
        label={label}
        defaultValue={defaultValue}
        sx={{ width: 220, ...style }}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
};
export default NativePickers;
