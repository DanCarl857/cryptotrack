import { StyleSheet } from 'react-native'
import commonStyle from './../../styles/common.style'
import themeStyle from './../../styles/theme.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.WHITE,
        ...commonStyle.center
    },
    logoStyle: {
        width: 150,
        height: 150
    },
    description: {
        marginHorizontal: 20,
        lineHeight: 20,
        marginVertical: 30,
        textAlign: 'center',
        color: themeStyle.TEXT_COLOR,
        fontSize: themeStyle.FONT_SIZE_NORMAL,
        fontWeight: themeStyle.FONT_WEIGHT_LIGHT
    },
    copyrightText: {
        fontSize: themeStyle.FONT_SIZE_SMALL,
        color: themeStyle.LABEL_COLOR,
        position: 'absolute',
        bottom: 30
    }
})