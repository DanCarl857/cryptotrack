import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './Settings.component.style'

const Settings = () => (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.name}>CoinMarketCap</Text>
            <Text style={styles.ID}>https://coinmarketcap.com/api/documentation/</Text>
        </View>
        <View style={styles.bottomContainer}>
            <ScrollView>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>About</Text>
                </View>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.col1}>
                        <Image
                            source={require('./../../../assets/settings/web.png')}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.col4}>
                        <Text>Visit our website</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.col1}>
                        <Image
                            source={require('./../../../assets/settings/rate.png')}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.col4}>
                        <Text>Rate the app</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.col1}>
                        <Image
                            source={require('./../../../assets/settings/terms.png')}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.col4}>
                        <Text>Terms and Conditions</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <View style={styles.col1}>
                        <Image
                            source={require('./../../../assets/settings/privacy.png')}
                            style={styles.imgStyle}
                        />
                    </View>
                    <View style={styles.col4}>
                        <Text>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)

export default Settings
