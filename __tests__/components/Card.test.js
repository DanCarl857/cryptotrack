import React from 'react'
import { View, Text } from 'react-native'
import { shallow } from 'enzyme'
import Card from './../../src/components/Card/Card.component'

describe('Card', () => {
    it('should render correctly', () => {
        const component = shallow(
        <Card>
            <View>
                <Text>Testing the card</Text>
            </View>
        </Card>)
        expect(component).toMatchSnapshot()
    })
})