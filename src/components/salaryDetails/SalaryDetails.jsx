/* eslint-disable react-hooks/set-state-in-effect */
import { Grid } from '@mui/material'
import DisplayDetails from './DisplayDetails'
import SalaryBreakup from './SalaryBreakup'
import { useEffect, useState } from 'react'
import FormsModal from '../common/FormsModal'
import SalaryDetailsActions from './SalaryDetailsActions'
import CustomAlert from '../common/CustomAlert'
import { useDispatch, useSelector } from 'react-redux'
import { addSalaryDetails, editSalaryDetails, fetchSalaryBreakupDetails, resetAddSalaryDetails, resetDeleteSalaryDetails, resetEditSalaryDetails } from '../store/slices/salaryDetailsSlice'
import { API_CONSTANTS } from '../api/API_CONSTANTS'
import { setModalDetails } from '../store/slices/modalSlice'

const SalaryDetails = () => {

    const date = new Date()
    const [income, setIncome] = useState(0)
    const [selectedDate, setSelectedDate] = useState(date)
    const [yearFilter, setYearFilter] = useState(date.getFullYear())
    const [invokeApi, setInvokeApi] = useState(false)
    const [alertConfig, setAlertConfig] = useState({ open: false, message: '', isError: false })

    const dispatch = useDispatch()

    const {
        salaryDetails,
        deleteSalaryBreakupDetails,
        editSalaryBreakupDetails,
        addSalaryBreakupDetails
    } = useSelector((state) => state.salaryBreakupDetails)
    const { modalDetails } = useSelector((state) => state.modalDetails)
    const { openPopup, modalTitle, mode } = modalDetails

    useEffect(() => {
        dispatch(fetchSalaryBreakupDetails({
            method: API_CONSTANTS.GET_SALARY_DETAILS,
            yearFilter
        }))
        setInvokeApi(false)
    }, [yearFilter, dispatch, invokeApi])

    const showApiCompletionAlert = (apiState, resetAction) => {
            console.log('apiState', apiState)
        if (!apiState.loading && (apiState.message || apiState.error)) {
            setAlertConfig({
                open: true, message: apiState.message || apiState?.error?.error, isError: Boolean(apiState.message)

            })
            dispatch(resetAction())
        }
    }

    useEffect(() => {
        showApiCompletionAlert(deleteSalaryBreakupDetails, resetDeleteSalaryDetails)
        showApiCompletionAlert(editSalaryBreakupDetails, resetEditSalaryDetails)
        showApiCompletionAlert(addSalaryBreakupDetails, resetAddSalaryDetails)
    }, [deleteSalaryBreakupDetails, editSalaryBreakupDetails, addSalaryBreakupDetails])


    const handleInputChange = (value) => {
        setIncome(value)
    }

    const handleModalClose = () => {
        setIncome(0)
        setSelectedDate(date)
        dispatch(setModalDetails({ title: '', openPopUp: false, mode: '' }))
    }

    const handleUpdate = () => {
        if (mode === 'Edit') {
            dispatch(editSalaryDetails({
                method: API_CONSTANTS.EDIT_SALARY_DETAILS,
                body: {
                    income,
                    date: selectedDate
                }
            }))
        } else {
            dispatch(addSalaryDetails({
                method: API_CONSTANTS.ADD_SALARY_DETAILS,
                body: {
                    income,
                    date: selectedDate
                }
            }))
        }
        setInvokeApi(true)
        handleModalClose()
    }

    return (
        <Grid item
            container
            sx={{
                p: 2,
            }}>
            <Grid item container size={12}>
                {salaryDetails?.data.length > 0 && <DisplayDetails
                    yearFilter={yearFilter}
                    setYearFilter={setYearFilter}
                    salaryDetails={salaryDetails?.data}
                    setIncome={setIncome}
                    setSelectedDate={setSelectedDate}
                    dispatch={dispatch}
                    setInvokeApi={setInvokeApi}
                />}
            </Grid>
            {
                openPopup &&
                <FormsModal
                    openPopUp={openPopup}
                    title={modalTitle}
                    handleModalClose={handleModalClose}
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
                        yearFilter={yearFilter}
                    />
                </FormsModal>
            }

            {alertConfig.open && <CustomAlert
                title="Salary Breakup"
                alertConfig={alertConfig}
                handleClose={() => setAlertConfig((prev) => ({ ...prev, open: false, isError: false, message: '' }))}
            />}
        </Grid>
    )
}

export default SalaryDetails
