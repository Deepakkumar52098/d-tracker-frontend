import { takeEvery, takeLatest } from "redux-saga/effects";
import { handleAddSalaryDetails, handleDeleteSalaryDetails, handleEditSalaryDetails, handleGetSalaryDetails } from "./handleSalaryBreakup";
import { deleteSalaryDetails, fetchSalaryBreakupDetails, addSalaryDetails, editSalaryDetails } from "../slices/salaryDetailsSlice";
import { handleLogin, handleSignUp } from "./authHandlers";
import { fetchLogin, fetchSignUp } from "../slices/authSlice";


export function* watcherSaga() {
    yield takeLatest(fetchSalaryBreakupDetails, handleGetSalaryDetails)
    yield takeEvery(addSalaryDetails, handleAddSalaryDetails)
    yield takeEvery(editSalaryDetails, handleEditSalaryDetails)
    yield takeEvery(deleteSalaryDetails, handleDeleteSalaryDetails)
    yield takeEvery(fetchSignUp, handleSignUp)
    yield takeEvery(fetchLogin, handleLogin)
}