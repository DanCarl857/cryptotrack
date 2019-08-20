import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './Start.component.style'

import Button from './../../components/Button/Button.component'

const Start = () => (
    <View style={styles.container}>
        <Text style={styles.header}>CRYPTO TRACK</Text>
        <Image
            source={require('./../../assets/logo.png')}
            style={styles.logoStyle}
        />
        <Text style={styles.description}> CryptoTrack is a simple mobile application built to help you keep track of information about cryptocurrencies amongst other things. </Text>
        <Button
            onPress={() => Actions.home()}
            text="Get started now"
        />
        <Text style={styles.copyrightText}>Copyright &copy; 2019</Text>
    </View>
)

export default Start
