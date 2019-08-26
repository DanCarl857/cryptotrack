import React from 'react'
import { shallow } from 'enzyme'
import Button from './../../src/components/Button/Button.component'

describe('Button', () => {
    describe('Rendering', () => {
        it('should match snapshot', () => {
            const component = shallow(<Button text="test label" />)
            expect(component).toMatchSnapshot()
        })
    })
})