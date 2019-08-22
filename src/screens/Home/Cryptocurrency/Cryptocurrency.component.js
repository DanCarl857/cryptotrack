import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Cryptocurrency.component.style'
import themeStyle from '../../../styles/theme.style'

import Card from './../../../components/Card/Card.component'

import { getCryptocurrencies } from './../../../actions/cryptocurrency.action'

const Cryptocurrency = ({ getCryptocurrencies, isLoading, cryptoData }) => {

    useEffect(() => {
        getCryptocurrencies()
    }, [])

    renderCoins = () => {
        return cryptoData.data.map((crypto) =>
            <Card key={crypto.id}>
                <View style={styles.row}>
                    <View style={styles.col1}>
                        <Text style={styles.symbol}>{crypto.symbol} |</Text>
                    </View>
                    <View style={styles.col1}>
                        <Text style={styles.name}>{crypto.name}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.price}>Price: $ {crypto.quote.USD.price.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text>1h:
                            <Text style={crypto.quote.USD.percent_change_1h < 0 ? styles.negativeChange : styles.positiveChange}> {crypto.quote.USD.percent_change_1h.toFixed(2)}</Text>
                        </Text>
                    </View>
                    <View style={styles.col}>
                        <Text>24h:
                            <Text style={crypto.quote.USD.percent_change_24h < 0 ? styles.negativeChange : styles.positiveChange}> {crypto.quote.USD.percent_change_24h.toFixed(2)}</Text>
                        </Text>
                    </View>
                    <View style={styles.col}>
                        <Text>7d:
                            <Text style={crypto.quote.USD.percent_change_7d < 0 ? styles.negativeChange : styles.positiveChange}> {crypto.quote.USD.percent_change_7d.toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>
            </Card>
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
    console.log(state.cryptoData.data)
    return {
        isLoading: state.cryptoData.loading,
        cryptoData: state.cryptoData.data
    }
}

export default connect(mapStateToProps, { getCryptocurrencies })(Cryptocurrency)
