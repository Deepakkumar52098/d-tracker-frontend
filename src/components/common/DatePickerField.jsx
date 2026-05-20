import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerField = ({
  label,
  handleDateChange,
  selectedDate,
  mode,
  yearFilter
}) => {

  const onDateChange = (val) => {
    handleDateChange(val)
  }

  const isCurrentYear = String(yearFilter) === dayjs().format('YYYY')

  console.log('isCurrentYear', isCurrentYear)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        maxDate={isCurrentYear ? dayjs() : dayjs(`${yearFilter}-12-31`)}
        minDate={dayjs(`${yearFilter}-01-01`)}
        value={dayjs(selectedDate)}
        openTo="month"
        views={['month']}
        sx={{ minWidth: 250 }}
        disabled={mode === 'Edit'}
        onChange={(val) => onDateChange(val)}
      />
    </LocalizationProvider>
  );
}

export default DatePickerField