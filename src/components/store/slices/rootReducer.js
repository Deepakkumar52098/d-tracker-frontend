import { combineReducers } from "@reduxjs/toolkit";
import salaryDetailsSlice from './salaryDetailsSlice'
import modalSlice from './modalSlice'
import authSlice from './authSlice'

const rootReducer = combineReducers({
    salaryBreakupDetails: salaryDetailsSlice,
    modalDetails: modalSlice,
    userDetails: authSlice
})

export default rootReducer