import { StyleSheet } from 'react-native'
import themeStyle from '../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';

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
})