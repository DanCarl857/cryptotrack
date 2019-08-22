import { StyleSheet } from 'react-native'
import themeStyle from './../../styles/theme.style'

export default StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingVertical: 10
    },
    col: {
        flex: 1,
    },
    price: {
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_HEAVY
    },
    symbol: {
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_HEAVY
    },
    positiveChange: {
        color: themeStyle.SECONDARY_COLOR,
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM
    },
    negativeChange: {
        color: themeStyle.RED,
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM
    }
})