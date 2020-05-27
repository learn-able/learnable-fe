import { KeyboardDatePicker } from '@material-ui/pickers';
import React from 'react';

const DatePickerInput = ({ playlistDate, setPlaylistDate }) => {
  const formatDateChange = (date) => {
    setPlaylistDate(date.format('MM/DD/YYYY'));
  };

  return (
    <KeyboardDatePicker
      autoOk
      disableToolbar
      variant="inline"
      format="MM/DD/YYYY"
      margin="normal"
      id="date-picker-inline"
      value={playlistDate}
      onChange={formatDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
  );
};

export default DatePickerInput;
