import { executeDelete, executeGet, executePost } from "./apiUtils"

export const requestGetSalaryDetails = (payload) => {
    const url = payload.method + payload.yearFilter
    return executeGet(url)
}

export const requestAddSalaryDetails = (payload) => {
    return executePost(payload.method, payload.body)
}

export const requestEditSalaryDetails = (payload) => {
    return executePost(payload.method, payload.body )
}

export const requestDeleteSalaryDetails = (payload) => {
    return executeDelete(payload.method, payload.body )
}