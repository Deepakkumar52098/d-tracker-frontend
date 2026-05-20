import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        signUp: { loading: false, message: null, error: null, isSuccess: false },
        loginDetails: {
            loading: false, message: null, error: null, user: null,
            token: localStorage.getItem('token') || null
        }
    },
    reducers: {
        fetchSignUp(state) {
            state.signUp.loading = true
        },
        setSignUp(state, action) {
            state.signUp.loading = false
            state.signUp.message = action.payload.message
            state.signUp.isSuccess = true
        },
        setSignUpError(state, action) {
            state.signUp.loading = false
            state.signUp.error = action.payload
        },
        fetchLogin(state) {
            state.loginDetails.loading = true
            state.loginDetails.error = null
            state.loginDetails.message = null
        },
        setLogin(state, action) {
            state.loginDetails.loading = false
            state.loginDetails.user = action.payload.user
            state.loginDetails.message = action.payload.message
            state.loginDetails.token = action.payload.token
            localStorage.setItem('token', action.payload.token)
        },
        setLoginError(state, action) {
            state.loginDetails.loading = false
            state.loginDetails.error = action.payload
        },
        resetLoginDetails(state) {
            state.loginDetails = { loading: false, error: null, message: null }
            localStorage.removeItem('token')

        },
    }
})

export const {
    fetchSignUp,
    setSignUp,
    setSignUpError,
    fetchLogin,
    setLogin,
    setLoginError,
    resetLoginDetails
} = authSlice.actions

export default authSlice.reducer