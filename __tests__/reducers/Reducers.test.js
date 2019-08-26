import summaryReducer from './../../src/reducers/summary.reducer'
import cryptocurrencyReducer from './../../src/reducers/cryptocurrency.reducer'

import * as types from './../../src/constants/types'

describe('SUMMARY', () => {
    describe('INITIAL STATE', () => {
        test('is correct', () => {
            const action = { type: types.SUMMARY_DATA_NOT_AVAILABLE, payload: [] }
            let intialState = { data: [], loading: false }

            expect(summaryReducer(undefined, action)).toEqual(intialState)
        })
    })

    describe('DATA_AVAILABLE', () => {
        test('returns the correct state', () => {
            const action = { type: types.SUMMARY_DATA_AVAILABLE, payload: 1 }
            const expectedState = { data: 1, loading: false }

            expect(summaryReducer(undefined, action)).toEqual(expectedState)
        })
    })

})

describe('CRYPTOCURRENCY', () => {
    describe('INITIAL STATE', () => {
        test('is correct', () => {
            const action = { type: types.CRYPTOCURRENCIES_DATA_NOT_AVAILABLE, payload: [] }
            let initialState = { data: [], loading: false }

            expect(cryptocurrencyReducer(undefined, action)).toEqual(initialState)
        })
    })

    describe('DATA_AVAILABLE', () => {
        test('returns the correct state', () => {
            const action = { type: types.CRYPTOCURRENCIES_DATA_AVAILABLE, payload: 1 }
            const expectedState = { data: 1, loading: false }

            expect(cryptocurrencyReducer(undefined, action)).toEqual(expectedState)
        })
    })
})