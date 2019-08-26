import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './CryptoCard.component.style'

import Card from './../Card/Card.component'

const CryptoCard = ({
    name,
    symbol,
    price,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
}) => {

    return (
        <Card>
            <View style={styles.row}>
                    <View style={styles.col}>
                        <Text>
                            <Text style={styles.symbol}>{symbol}</Text> | <Text style={styles.name}>{name}</Text>
                        </Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.price}>Price: $ {price.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text>1h:
                            <Text style={percent_change_1h < 0 ? styles.negativeChange : styles.positiveChange}> {percent_change_1h.toFixed(2)}</Text>
                        </Text>
                    </View>
                    <View style={styles.col}>
                        <Text>24h:
                            <Text style={percent_change_24h < 0 ? styles.negativeChange : styles.positiveChange}> {percent_change_24h.toFixed(2)}</Text>
                        </Text>
                    </View>
                    <View style={styles.col}>
                        <Text>7d:
                            <Text style={percent_change_7d < 0 ? styles.negativeChange : styles.positiveChange}> {percent_change_7d.toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>
        </Card>
    )
}

CryptoCard.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    percent_change_1h: PropTypes.number.isRequired,
    percent_change_24h: PropTypes.number.isRequired,
    percent_change_7d: PropTypes.number.isRequired
}

export default CryptoCard