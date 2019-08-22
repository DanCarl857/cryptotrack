import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styles from './Summary.component.style'
import themeStyle from '../../../styles/theme.style'

// Custom components
import Card from './../../../components/Card/Card.component'
import Button from './../../../components/Button/Button.component'

// Actions
import { getSummary } from './../../../actions/summary.action'

const Summary = ({ getSummary, isLoading, summaryData }) => {

    useEffect(() => {
        getSummary()
    }, [])

    if(isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={themeStyle.TEXT_COLOR} />
                <Text style={styles.loadingText}>Getting summary...</Text>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Active Cryptocurrencies</Text>
                            <Text style={styles.value}>{summaryData.active_cryptocurrencies}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Active Exchanges</Text>
                            <Text style={styles.value}>{summaryData.active_exchanges}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Active Market Pairs</Text>
                            <Text style={styles.value}>{summaryData.active_market_pairs}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Bitcoin Dominance</Text>
                            <Text style={styles.value}>{summaryData.btc_dominance}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Ethereum Dominance</Text>
                            <Text style={styles.value}>{summaryData.eth_dominance}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={styles.heading}>Last Update</Text>
                            <Text style={styles.date}>{new Date(summaryData.last_updated).toDateString()}</Text>
                        </View>
                    </View>
                </Card>
                <Button
                    onPress={() => getSummary()}
                    text="Refresh Summary"
                />
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.summaryData.loading,
        summaryData: state.summaryData.data.data
    }
}

export default connect(mapStateToProps, { getSummary })(Summary)
