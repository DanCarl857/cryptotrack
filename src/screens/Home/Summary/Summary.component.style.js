import { StyleSheet } from 'react-native'
import theme from '../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';
import themeStyle from '../../../styles/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
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
    heading: {
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM,
        color: themeStyle.SECONDARY_COLOR,
        marginBottom: 5,
        marginTop: 15
    },
    value: {
        fontSize: themeStyle.FONT_SIZE_xxLARGE,
        fontWeight: themeStyle.FONT_WEIGHT_xLIGHT
    },
    date: {
        fontSize: themeStyle.FONT_SIZE_xLARGE,
        fontWeight: themeStyle.FONT_WEIGHT_xLIGHT
    },
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomColor: themeStyle.LINE_COLOR,
        borderBottomWidth: 1
    },
    col: {
        flex: 1,
    }
})