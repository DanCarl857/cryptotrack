import axios from 'axios'
import * as constants from './constants/constants'

let axiosInstance = null
export function createAxiosInstance() {
    axiosInstance = axios.create({
        baseURL: constants.BASE_URL,
        timeout: 3000,
        headers: {
            'X-CMC_PRO_API_KEY': `ab4eb791-1747-4a66-80c1-a62ceb3db6be`
        }
    })
    return axiosInstance
}

export function getAxiosInstance() {
    return axiosInstance;
}