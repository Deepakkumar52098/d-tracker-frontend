import { executePost } from "./apiUtils"

export const requestSignUp = (payload) => {
    return executePost(payload.method, payload.body)
}

export const requestLogin = (payload) => {
    return executePost(payload.method, payload.body)
}