import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment'
import React, { useState } from 'react';

const DatePickerInput = () => {
  const [selectedDate, handleDateChange] = useState(moment().format('MM/DD/YYYY'));

  const formatDateChange = (date) => {
    handleDateChange(date.format('MM/DD/YYYY'));
  }

  return (
    <KeyboardDatePicker
      autoOk
      disableToolbar
      variant="inline"
      format="MM/DD/YYYY"
      margin="normal"
      id="date-picker-inline"
      inputValue={selectedDate}
      value={selectedDate}
      onChange={formatDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  )
}

export default DatePickerInput
