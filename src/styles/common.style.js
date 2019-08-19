import { StyleSheet } from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
    shadow: {
        shadowColor: theme.SHADOW_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    iconSize: {
        width: 20,
        height: 20
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});