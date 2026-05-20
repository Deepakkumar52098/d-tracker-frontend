import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleAddSalaryDetails, handleDeleteSalaryDetails, handleEditSalaryDetails, handleGetSalaryDetails } from "./handleSalaryBreakup";
import { deleteSalaryDetails, fetchSalaryBreakupDetails, addSalaryDetails, editSalaryDetails } from "../slices/salaryDetailsSlice";


export function* watcherSaga() {
    yield takeLatest(fetchSalaryBreakupDetails, handleGetSalaryDetails)
    yield takeEvery(addSalaryDetails, handleAddSalaryDetails)
    yield takeEvery(editSalaryDetails, handleEditSalaryDetails)
    yield takeEvery(deleteSalaryDetails, handleDeleteSalaryDetails)
}