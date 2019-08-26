import React from 'react'
import { shallow } from 'enzyme'
import Button from './../../src/components/Button/Button.component'

describe('Button', () => {
    it('should render correctly', () => {
        const component = shallow(<Button text="test label" />)
        expect(component).toMatchSnapshot()
    })
})