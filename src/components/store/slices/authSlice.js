import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        signUp: { loading: false, message: '', error: '' },
        loginDetails: { loading: false, message: '', error: '', userId: '', token: ''}
    },
    reducers: {
        fetchSignUp(state) {
            state.signUp.loading = true
        },
        setSignUp(state, action) {
            state.signUp.loading = false
            state.signUp.message = action.payload.message
        },
        setSignUpError(state, action) {
            state.signUp.loading = false
            state.signUp.message = action.payload
        },
        fetchLogin(state) {
            state.loginDetails.loading = true
        },
        setLogin(state, action) {
            state.loginDetails.loading = false
            state.loginDetails.userId = action.payload.userId
            state.loginDetails.message = action.payload.message
            state.loginDetails.token = action.payload.token
        },
        setLoginError(state, action) {
            state.loginDetails.loading = false
            state.loginDetails.message = action.payload
        },
                resetLoginDetails(state) {
            state.loginDetails = { loading: false, error: '', message: '' }
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