import * as types from './../constants/types'
import { createAxiosInstance } from '../utils'

export function getSummary() {
    return async (dispatch) => {
        try {
            const axiosInstance = createAxiosInstance()
            let summaryResponse = await axiosInstance.get(`/v1/global-metrics/quotes/latest`)
            dispatch({
                type: types.SUMMARY_DATA_AVAILABLE,
                payload: summaryResponse.data
            })
        } catch (error) {
            dispatch({
                type: types.SUMMARY_DATA_NOT_AVAILABLE
            })
        }
    }
}