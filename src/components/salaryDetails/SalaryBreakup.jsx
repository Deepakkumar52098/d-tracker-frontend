import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import DatePickerField from '../common/DatePickerField'

const SalaryBreakup = ({ setShowAddDetails, setInvokeApi }) => {
    const [income, setIncome] = useState(0)
    const [selectedDate, setSelectedDate] = useState(null)
    const [breakUpDetails, setBreakupDetails] = useState({})

    const handleInputChange = (e) => {
        const value = Number(e.target.value)
        setIncome(value)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const handleClose = ()=>{
        setShowAddDetails(false)
        setInvokeApi(true)
    }

    const handleUpdate = () => {
        fetch('http://localhost:8080/salaryBreakup/addDetails', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                income,
                date: selectedDate,
            })
        })
            .then(res => {
                if (res.status === 201) {
                    return res.json()
                }
                throw new Error('Failed to add details')
            })
            .then(data => {
                setBreakupDetails(data.breakupDetails)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Box>
            <Box>
                <Typography>Salary Breakup</Typography>
            </Box>
            <Box>
                <DatePickerField
                    label={"Date"}
                    handleDateChange={handleDateChange}
                />
                <InputLabel>Income</InputLabel>
                <TextField onChange={(e) => handleInputChange(e)} id="outlined-basic" variant="outlined" />
            </Box>
            {Object.keys(breakUpDetails).length > 0 && (
                <Box>
                    {Object.keys(breakUpDetails).map((keyName) => (
                        <Box key={keyName}>
                            <Typography>{keyName}</Typography>
                            <Typography>{breakUpDetails[keyName]}</Typography>
                        </Box>
                    ))}
                </Box>
            )}
            <Button onClick={handleUpdate}>
                Update
            </Button>
            <Button onClick={handleClose}>
                Close
            </Button>
        </Box>
    )
}

export default SalaryBreakup
