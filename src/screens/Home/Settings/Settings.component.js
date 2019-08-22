import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './Settings.component.style'

const Settings = () => {

    openLink = url => Linking.openURL(url).catch((err) => console.error('An error occurred', err))

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.name}>CoinMarketCap</Text>
                <TouchableOpacity onPress={() => openLink('https://coinmarketcap.com/api/documentation/')}>
                    <Text style={styles.ID}>https://coinmarketcap.com/api/documentation/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <ScrollView>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>About</Text>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => openLink('https://coinmarketcap.com/')}>
                        <View style={styles.col1}>
                            <Image
                                source={require('./../../../assets/settings/web.png')}
                                style={styles.imgStyle}
                            />
                        </View>
                        <View style={styles.col4}>
                            <Text>Visit our website for more information</Text>
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
                    <TouchableOpacity style={styles.row} onPress={() => openLink('https://coinmarketcap.com/terms/')}>
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
                    <TouchableOpacity style={styles.row} onPress={() => openLink('https://coinmarketcap.com/privacy/')}>
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
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>Developer</Text>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => openLink('https://github.com/DanCarl857')}>
                        <View style={styles.col1}>
                            <Image
                                source={require('./../../../assets/settings/user.png')}
                                style={styles.imgStyle}
                            />
                        </View>
                        <View style={styles.col4}>
                            <Text>About Developer</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default Settings
