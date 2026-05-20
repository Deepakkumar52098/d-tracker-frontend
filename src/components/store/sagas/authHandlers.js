import { call, put } from "redux-saga/effects"
import { setLogin, setLoginError, setSignUp, setSignUpError } from "../slices/authSlice"
import { requestLogin, requestSignUp } from "../../api/authApi"

export function* handleSignUp(action) {
    try {
        const response = yield call(requestSignUp, action.payload)
        const { data } = response
        yield put(setSignUp({
            ...data,
        }))
    } catch (error) {
        yield put(setSignUpError({
            error:
                error.response?.data?.message ||
                error.message ||
                'Something went wrong',
        }))
    }
}

export function* handleLogin(action) {
    try {
        const response = yield call(requestLogin, action.payload)
        const { data } = response
        yield put(setLogin({
            ...data,
        }))
    } catch (error) {
        yield put(setLoginError({
            error:
                error.response?.data?.message ||
                error.message ||
                'Something went wrong',
        }))
    }
}