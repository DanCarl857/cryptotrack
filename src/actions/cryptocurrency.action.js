import * as types from './../constants/types'
import { createAxiosInstance } from '../utils'
import { Alert } from 'react-native'

export function getCryptocurrencies() {
    return async (dispatch) => {
        try {
            const axiosInstance = createAxiosInstance()
            let cryptocurrencyResponse = await axiosInstance.get(`/v1/cryptocurrency/listings/latest`)
            dispatch({
                type: types.CRYPTOCURRENCIES_DATA_AVAILABLE,
                payload: cryptocurrencyResponse.data
            })
        } catch (error) {
            Alert.alert('Error', error.response.data.message)
        }
    }
}