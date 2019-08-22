import { StyleSheet } from 'react-native'
import themeStyle from '../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
        paddingTop: 10
    },
    loadingContainer: {
        flex: 1,
        ...commonStyle.center,
        backgroundColor: themeStyle.WHITE
    },
    loadingText: {
        color: themeStyle.TEXT_COLOR,
        fontStyle: 'italic',
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_LIGHT,
        textAlign: 'center',
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingVertical: 10
    },
    col: {
        flex: 1
    },
    col1: {
        flex: 0.5
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