import { combineReducers } from "@reduxjs/toolkit";
import salaryDetailsSlice from './salaryDetailsSlice'
import modalSlice from './modalSlice'

const rootReducer = combineReducers({
    salaryBreakupDetails: salaryDetailsSlice,
    modalDetails: modalSlice
})

export default rootReducer