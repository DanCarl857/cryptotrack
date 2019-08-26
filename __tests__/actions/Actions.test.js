import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// Actions
import * as summaryActions from './../../src/actions/summary.action'
import * as cryptoCurrencyActions from './../../src/actions/cryptocurrency.action'

const createStore = configureMockStore([thunk])
const store = createStore()

describe('Clear actions', () => {
    beforeEach(() => {
        store.clearActions()
    })
})

describe('Get Summary', () => {
    test('Dispatches the correct action and payload', () => {
        store.dispatch(summaryActions.getSummary())
        expect(store.getActions()).toMatchSnapshot()
    })
})

describe('Get Cryptocurrencies', () => {
    test('Dispatches the correct action and payload', () => {
        store.dispatch(cryptoCurrencyActions.getCryptocurrencies())
        expect(store.getActions()).toMatchSnapshot()
    })
})