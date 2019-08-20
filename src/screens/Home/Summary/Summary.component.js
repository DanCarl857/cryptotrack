import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import styles from './Summary.component.style'
import themeStyle from '../../../styles/theme.style'

// Custom components
import Card from './../../../components/Card/Card.component'

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
            <View style={styles.container}>
                <Card>
                    <Text>{summaryData.active_cryptocurrencies}</Text>
                </Card>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.summaryData.loading,
        summaryData: state.summaryData.data
    }
}

export default connect(mapStateToProps, { getSummary })(Summary)
