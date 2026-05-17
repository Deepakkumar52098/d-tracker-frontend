import { Button, Grid } from '@mui/material'
import DisplayDetails from './DisplayDetails'
import SalaryBreakup from './SalaryBreakup'
import { useState } from 'react'

const SalaryDetails = () => {
    const [showAddDetails, setShowAddDetails] = useState(false)
    const [invokeApi, setInvokeApi] = useState(true)

    return (
        <Grid item container>
            <Grid item container>
                <Button onClick={() => setShowAddDetails(true)}>
                    Add Salary Details
                </Button>
            </Grid>
            <Grid item container>
                {showAddDetails &&
                    <SalaryBreakup
                        setShowAddDetails={setShowAddDetails}
                        setInvokeApi={setInvokeApi}
                    />}
            </Grid>
            <Grid item container>
                <DisplayDetails
                    invokeApi={invokeApi}
                    setInvokeApi={setInvokeApi}
                    showAddDetails={showAddDetails}
                />
            </Grid>

        </Grid>
    )
}

export default SalaryDetails
