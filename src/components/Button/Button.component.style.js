import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';
import common from '../../styles/common.style';

export default StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 40,
        backgroundColor: theme.PRIMARY_COLOR,
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginVertical: 20,
        marginHorizontal: 30,
        ...common.center,
        ...common.shadow,
    },
    text: {
        color: theme.WHITE,
        fontSize: theme.FONT_SIZE_NORMAL,
        fontWeight: theme.FONT_WEIGHT_HEAVY,
        fontFamily: 'Avenir'
    }
});