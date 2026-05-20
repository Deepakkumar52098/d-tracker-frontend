import { createSlice } from "@reduxjs/toolkit";

const salaryDetailsSlice = createSlice({
    name: 'salaryDetails',
    initialState: {
        salaryDetails: { loading: false, data: [], error: '', message: '' },
        deleteSalaryBreakupDetails: { loading: false, data: [], error: '', message: '' },
        addSalaryBreakupDetails: { loading: false, data: [], error: '', message: '' },
        editSalaryBreakupDetails: { loading: false, data: [], error: '', message: '' },
    },
    reducers: {
        fetchSalaryBreakupDetails(state) {

            state.salaryDetails.loading = true
            state.salaryDetails.data = []
            state.salaryDetails.message = ''
            state.salaryDetails.error = ''
        },

        setSalaryBreakupDetails(state, action) {
            state.salaryDetails.loading = false
            state.salaryDetails.data = action.payload.data
            state.salaryDetails.message = action.payload.message

        },

        setSalaryBreakupError(state, action) {
            state.salaryDetails.loading = false,
                state.salaryDetails.error = action.payload
        },

        addSalaryDetails(state) {
            state.addSalaryBreakupDetails.loading = true
            state.addSalaryBreakupDetails.data = []
            state.addSalaryBreakupDetails.message = ''
            state.addSalaryBreakupDetails.error = ''
        },

        setAddSalaryDetails(state, action) {
            state.addSalaryBreakupDetails.loading = false
            state.addSalaryBreakupDetails.data = action.payload.data
            state.addSalaryBreakupDetails.message = action.payload.message
        },

        setAddSalaryDetailsError(state, action) {
            state.addSalaryBreakupDetails.loading = false
            state.addSalaryBreakupDetails.error = action.payload
        },


        editSalaryDetails(state) {
            state.editSalaryBreakupDetails.loading = true
            state.editSalaryBreakupDetails.data = []
            state.editSalaryBreakupDetails.message = ''
            state.editSalaryBreakupDetails.error = ''
        },

        setEditSalaryDetails(state, action) {
            state.editSalaryBreakupDetails.loading = false
            state.editSalaryBreakupDetails.data = action.payload.data
            state.editSalaryBreakupDetails.message = action.payload.message
        },

        setEditSalaryDetailsError(state, action) {
            state.editSalaryBreakupDetails.loading = false
            state.editSalaryBreakupDetails.error = action.payload
        },

        deleteSalaryDetails(state) {
            state.deleteSalaryBreakupDetails.loading = true
            state.deleteSalaryBreakupDetails.data = []
            state.deleteSalaryBreakupDetails.message = ''
            state.deleteSalaryBreakupDetails.error = ''
        },

        setDeleteSalaryDetails(state, action) {
            state.deleteSalaryBreakupDetails.loading = false
            state.deleteSalaryBreakupDetails.data = action.payload.data
            state.deleteSalaryBreakupDetails.message = action.payload.message
        },

        setDeleteSalaryDetailsError(state, action) {
            state.deleteSalaryBreakupDetails.loading = false
            state.deleteSalaryBreakupDetails.error = action.payload
        },

        resetDeleteSalaryDetails(state) {
            state.deleteSalaryBreakupDetails = { loading: false, data: [], error: '', message: '' }
        },
        resetEditSalaryDetails(state) {
            state.editSalaryBreakupDetails = { loading: false, data: [], error: '', message: '' }
        },
        resetAddSalaryDetails(state) {
            state.addSalaryBreakupDetails = { loading: false, data: [], error: '', message: '' }
        },
    }
})

export const {
    fetchSalaryBreakupDetails,
    setSalaryBreakupDetails,
    setSalaryBreakupError,
    deleteSalaryDetails,
    setDeleteSalaryDetails,
    setDeleteSalaryDetailsError,
    addSalaryDetails,
    setAddSalaryDetails,
    setAddSalaryDetailsError,
    editSalaryDetails,
    setEditSalaryDetails,
    setEditSalaryDetailsError,
    resetDeleteSalaryDetails,
    resetEditSalaryDetails,
    resetAddSalaryDetails
} = salaryDetailsSlice.actions

export default salaryDetailsSlice.reducer