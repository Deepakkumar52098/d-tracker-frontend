import { call, put } from "redux-saga/effects"
import {
    requestAddSalaryDetails,
    requestDeleteSalaryDetails,
    requestEditSalaryDetails,
    requestGetSalaryDetails
} from "../../api/salaryBreakupDetailsApi"
import {
    setDeleteSalaryDetails,
    setDeleteSalaryDetailsError,
    setSalaryBreakupDetails,
    setSalaryBreakupError,
    setAddSalaryDetails,
    setAddSalaryDetailsError,
    setEditSalaryDetails,
    setEditSalaryDetailsError
} from "../slices/salaryDetailsSlice"

export function* handleGetSalaryDetails(action) {
    try {
        const response = yield call(requestGetSalaryDetails, action.payload)
        const { data } = response
        yield put(setSalaryBreakupDetails({
            ...data,
        }))
    } catch (error) {
            console.log('error', error)
        yield put(setSalaryBreakupError({
            error: error.message,
        }))
    }
}

export function* handleAddSalaryDetails(action) {
    try {
        const response = yield call(requestAddSalaryDetails, action.payload)
        const { data } = response
        yield put(setAddSalaryDetails({
            ...data,
        }))
    } catch (error) {
        yield put(setAddSalaryDetailsError({
            error:
                error.response?.data?.message ||
                error.message ||
                'Something went wrong',
        }))
    }
}

export function* handleEditSalaryDetails(action) {
    try {
        const response = yield call(requestEditSalaryDetails, action.payload)
        const { data } = response
        yield put(setEditSalaryDetails({
            ...data,
        }))
    } catch (error) {
        yield put(setEditSalaryDetailsError({
            error: error.message,
        }))
    }
}

export function* handleDeleteSalaryDetails(action) {
    try {
        const response = yield call(requestDeleteSalaryDetails, action.payload)
        const { data } = response
        yield put(setDeleteSalaryDetails({
            ...data,
        }))
    } catch (error) {
        yield put(setDeleteSalaryDetailsError({
            error: error.message,
        }))
    }
}
