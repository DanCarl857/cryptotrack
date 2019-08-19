import { StyleSheet } from 'react-native'
import themeStyle from '../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeStyle.WHITE,
        ...commonStyle.center
    }
})