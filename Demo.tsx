import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function SelectSmall() {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <RadioGroup aria-labelledby="payment-details">
        <FormControlLabel
          value="credit"
          control={<Radio />}
          label="Credit Card"
        />
        <FormControlLabel
          value="debit"
          control={<Radio />}
          label="Debit Card"
        />
      </RadioGroup>
    </FormControl>
  );
}
