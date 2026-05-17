import { Box, InputLabel, TextField } from '@mui/material'
import DatePickerField from '../common/DatePickerField'

const SalaryBreakup = ({ handleDateChange, handleInputChange }) => {

    const onIncomeChange = (e) => {
        const value = Number(e.target.value)
        handleInputChange(value)
    }

    const onDateChange = (date) => {
        handleDateChange(date)
    }

    return (
        <Box>
            <Box>
                <DatePickerField
                    label={"Date"}
                    handleDateChange={onDateChange}
                />
                <InputLabel>Income</InputLabel>
                <TextField onChange={(e) => onIncomeChange(e)} id="outlined-basic" variant="outlined" />
            </Box>
        </Box>
    )
}

export default SalaryBreakup
