import { Box, InputLabel, TextField } from '@mui/material'
import DatePickerField from '../common/DatePickerField'

const SalaryBreakup = ({ setSelectedDate, handleInputChange, selectedDate, income, mode }) => {

    const onIncomeChange = (e) => {
        const value = Number(e.target.value)
        handleInputChange(value)
    }

    const onDateChange = (date)=>{
        setSelectedDate(date)
    }

    return (
        <Box>
            <Box>
                <DatePickerField
                    label={"Date"}
                    handleDateChange={onDateChange}
                    selectedDate={selectedDate}
                    mode={mode}
                />
                <InputLabel>Income</InputLabel>
                <TextField value={income} onChange={(e) => onIncomeChange(e)} id="outlined-basic" variant="outlined" />
            </Box>
        </Box>
    )
}

export default SalaryBreakup
