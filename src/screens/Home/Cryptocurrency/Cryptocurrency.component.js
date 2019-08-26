import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Cryptocurrency.component.style'
import themeStyle from '../../../styles/theme.style'

import CryptoCard from './../../../components/CryptoCard/CryptoCard.component'

import { getCryptocurrencies } from './../../../actions/cryptocurrency.action'

const Cryptocurrency = ({ getCryptocurrencies, isLoading, cryptoData }) => {

    useEffect(() => {
        getCryptocurrencies()
    }, [])

    renderCoins = () => {
        return cryptoData.data.map((crypto) =>
            <CryptoCard
                key={crypto.id}
                symbol={crypto.symbol}
                name={crypto.name}
                price={crypto.quote.USD.price}
                percent_change_1h={crypto.quote.USD.percent_change_1h}
                percent_change_24h={crypto.quote.USD.percent_change_24h}
                percent_change_7d={crypto.quote.USD.percent_change_7d}
            />
        )
    }

    if(isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={themeStyle.TEXT_COLOR} />
                <Text style={styles.loadingText}>Getting cryptocurrency data...</Text>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                {renderCoins()}
            </ScrollView>
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
