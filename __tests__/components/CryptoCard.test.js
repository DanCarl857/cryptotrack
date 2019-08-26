import React from 'react'
import { shallow } from 'enzyme'
import CryptoCard from './../../src/components/CryptoCard/CryptoCard.component'

describe('Button', () => {
    describe('Rendering', () => {
        it('should match snapshot', () => {
            const component = shallow(
            <CryptoCard
                key={1}
                symbol="BTC"
                name="Bitcoin"
                price={1000}
                percent_change_1h={0.27}
                percent_change_24h={-4.06}
                percent_change_7d={0.03}
            />)
            expect(component).toMatchSnapshot()
        })
    })
})