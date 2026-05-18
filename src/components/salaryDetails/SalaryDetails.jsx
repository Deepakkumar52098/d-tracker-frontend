import { Button, Grid } from '@mui/material'
import DisplayDetails from './DisplayDetails'
import SalaryBreakup from './SalaryBreakup'
import { useEffect, useState } from 'react'
import FormsModal from '../common/FormsModal'
import SalaryDetailsActions from './SalaryDetailsActions'
import CustomAlert from '../common/CustomAlert'

const SalaryDetails = () => {
    const [invokeApi, setInvokeApi] = useState(true)
    const [openPopUp, setOpenPopUp] = useState(false)
    const [income, setIncome] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [salaryDetails, setSalaryDetails] = useState([])
    const [yearFilter, setYearFilter] = useState('2026')
    const [modalTitle, setModalTitle] = useState('')
    const [mode, setMode] = useState('')


    useEffect(() => {
        if (invokeApi) {
            fetch('http://localhost:8080/salaryBreakup/getDetails/' + yearFilter)
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                    throw new Error('Failed to fetch details')
                })
                .then(data => {
                    setSalaryDetails(data.breakupDetails)
                    setInvokeApi(false)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [invokeApi, setInvokeApi, yearFilter])

    const handleInputChange = (value) => {
        setIncome(value)
    }

    // const handleDateChange = (date) => {
    //     setSelectedDate(date)
    // }

    const handleUpdate = () => {
        if (mode === 'Edit') {
            fetch('http://localhost:8080/salaryBreakup/editDetails', {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    income,
                    date: selectedDate,
                })
            })
                .then(async (res) => {
                    const data = await res.json()
                    if (res.status === 201) {
                        setIsError(false)
                        setShowAlert(true)
                        setAlertMessage(data.message)
                        setOpenPopUp(false)
                        setInvokeApi(true)
                        return
                    }
                    setIsError(true)
                    throw new Error(data.message)
                })
                .catch(err => {
                    setAlertMessage(err.message)
                    setShowAlert(true)
                    setOpenPopUp(false)
                })

        } else {
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
                .then(async (res) => {
                    const data = await res.json()
                    if (res.status === 201) {
                        setIsError(false)
                        setShowAlert(true)
                        setAlertMessage(data.message)
                        setOpenPopUp(false)
                        setInvokeApi(true)
                        return
                    }
                    setIsError(true)
                    throw new Error(data.message)
                })
                .catch(err => {
                    setAlertMessage(err.message)
                    setShowAlert(true)
                    setOpenPopUp(false)

                })
        }
    }

    const onClickOfAdd = () => {
        setOpenPopUp(true)
        setShowAlert(false)
        setAlertMessage(null)
        setModalTitle('Add Income Details')
        setMode('Add')
    }

    return (
        <Grid item
            container
            spacing={2}
            sx={{
                p: 2,
                alignItems: "center",
            }}>
            <Grid item container size={12}>
                <Button
                    sx={{
                        background: 'Green',
                        color: 'white'
                    }}
                    onClick={onClickOfAdd}>
                    Add Income
                </Button>
            </Grid>
            <Grid item container size={6}>
                {salaryDetails.length > 0 && <DisplayDetails
                    invokeApi={invokeApi}
                    setInvokeApi={setInvokeApi}
                    openPopUp={openPopUp}
                    yearFilter={yearFilter}
                    setYearFilter={setYearFilter}
                    salaryDetails={salaryDetails}
                    setIsError={setIsError}
                    setAlertMessage={setAlertMessage}
                    setShowAlert={setShowAlert}
                    setOpenPopUp={setOpenPopUp}
                    setModalTitle={setModalTitle}
                    setIncome={setIncome}
                    setSelectedDate={setSelectedDate}
                    setMode={setMode}
                />}
            </Grid>
            {
                openPopUp &&
                <FormsModal
                    openPopUp
                    setOpenPopUp={setOpenPopUp}
                    title={modalTitle}
                    dialogActions={
                        <SalaryDetailsActions
                            handleUpdate={handleUpdate}
                            mode={mode}
                        />
                    }
                >
                    <SalaryBreakup
                        setSelectedDate={setSelectedDate}
                        handleInputChange={handleInputChange}
                        selectedDate={selectedDate}
                        income={income}
                        mode={mode}
                    />
                </FormsModal>
            }

            {showAlert && <CustomAlert title="Salary Breakup" message={alertMessage} isError={isError} />}

        </Grid>
    )
}

export default SalaryDetails
