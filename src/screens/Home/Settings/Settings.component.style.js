import { StyleSheet } from 'react-native'
import themeStyle from './../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.WHITE,
    },
    topContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 20,
        marginBottom: 20
    },
    bottomContainer: {
        flex: 3,
        marginHorizontal: 20
    },
    name: {
        fontSize: themeStyle.FONT_SIZE_xLARGE,
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM
    },
    ID: {
        color: themeStyle.SECONDARY_COLOR,
        marginTop: 10,
        fontSize: themeStyle.FONT_SIZE_NORMAL
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 5,
        borderBottomColor: themeStyle.LINE_COLOR,
        borderBottomWidth: 1
    },
    col1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    col4: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    heading: {
        fontWeight: themeStyle.FONT_WEIGHT_MEDIUM,
        fontSize: themeStyle.FONT_SIZE_NORMAL,

    },
    imgStyle: {
        height: 20,
        width: 20
    },
    headingContainer: {
        marginBottom: 10,
        marginTop: 10
    },
    red: {
        color: 'red'
    }
})