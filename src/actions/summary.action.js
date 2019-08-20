import * as types from './../constants/types'
import { createAxiosInstance } from '../utils'
import { Alert } from 'react-native'

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
            Alert.alert('Error', error.response.data.message)
        }
    }
}