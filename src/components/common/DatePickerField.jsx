import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerField = ({
  label,
  handleDateChange,
  selectedDate,
  mode
}) => {

  const onDateChange = (val) => {
    handleDateChange(val)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        maxDate={dayjs()}
        value={dayjs(selectedDate)}
        openTo="year"
        views={['year', 'month']}
        yearsOrder="desc"
        sx={{ minWidth: 250 }}
        disabled={mode === 'Edit'}
        onChange={(val) => onDateChange(val)}
      />
    </LocalizationProvider>
  );
}

export default DatePickerField