import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import styles from './Cryptocurrency.component.style'
import themeStyle from '../../../styles/theme.style'

import Card from './../../../components/Card/Card.component'

import { getCryptocurrencies } from './../../../actions/cryptocurrency.action'

const Cryptocurrency = ({ getCryptocurrencies, isLoading, cryptoData }) => {

    useEffect(() => {
        getCryptocurrencies()
    }, [])

    if(isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={themeStyle.TEXT_COLOR} />
                <Text style={styles.loadingText}>Getting cryptocurrency data...</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Card>
                    <Text>{cryptoData.active_cryptocurrencies}</Text>
                </Card>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.cryptoData.loading,
        cryptoData: state.cryptoData.data
    }
}

export default connect(mapStateToProps, { getCryptocurrencies })(Cryptocurrency)
