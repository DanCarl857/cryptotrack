import { StyleSheet } from 'react-native'
import theme from '../../../styles/theme.style'
import commonStyle from '../../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.WHITE,
        ...commonStyle.center
    }
})