import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const SalaryBreakup = () => {
    const [income, setIncome] = useState(0)
    const [breakUpDetails, setBreakupDetails] = useState({})

    const handleInputChange = (e) => {
        const value = Number(e.target.value)
        setIncome(value)
    }

    const handleUpdate = () => {
        fetch('http://localhost:8080/salaryBreakup/addDetails', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                income
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
                <InputLabel>Income</InputLabel>
                <TextField onChange={(e) => handleInputChange(e)} id="outlined-basic" variant="outlined" />
                <Button onClick={handleUpdate}>
                    Update
                </Button>
            </Box>
            {Object.keys(breakUpDetails).length > 0 && (
                <Box>
                    {Object.keys(breakUpDetails).map((keyName)=>(
                        <Box key={keyName}>
                        <Typography>{keyName}</Typography>
                        <Typography>{breakUpDetails[keyName]}</Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}

export default SalaryBreakup
