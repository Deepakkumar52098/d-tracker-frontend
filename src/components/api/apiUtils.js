import axios from "axios"

export const executeGet = (url)=>{
        const config = {
        method: 'get',
        url,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios(config)
}

export const executePost = (url, body)=>{
        const config = {
        method: 'post',
        url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }
    return axios(config)
}

export const executeDelete = (url, body)=>{
        const config = {
        method: 'delete',
        url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
    }
    return axios(config)
}