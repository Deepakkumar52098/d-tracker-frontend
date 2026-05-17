import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';


const DatePickerField = ({
  label,
  handleDateChange
}) => {
  const [date, setDate] = useState(dayjs())

  const onDateChange = (val)=>{
    setDate(val)
    handleDateChange(val)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        maxDate={dayjs()}
        value={date}
        openTo="year"
        views={['year', 'month']}
        yearsOrder="desc"
        sx={{ minWidth: 250 }}
        onChange={(val)=> onDateChange(val)}
      />
    </LocalizationProvider>
  );
}

export default DatePickerField