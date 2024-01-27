import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {memo} from "react";
import {colors, fontFamilies, fontWeights, normalize} from "../consts/consts";

export const PrimaryButton = memo(props => {
    return (
        <TouchableOpacity
            style={styles.primaryBtn}
            onPress={props.onPress}
        >
            <Text style={styles.primaryBtnTxt}>{props.label}</Text>
        </TouchableOpacity>
    )
})

export const TextButton = memo(props => {
    return (
        <TouchableOpacity
            style={styles.textBtn}
            onPress={props.onPress}
        >
            <Text style={styles.textBtnTxt}>{props.label}</Text>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    primaryBtn: {
        width: '100%',
        paddingVertical: normalize(10),
        backgroundColor: colors.primaryColor,
        borderRadius: normalize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryBtnTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: fontWeights.default,
        lineHeight: normalize(22),
        color: colors.white
    },
    textBtn: {
        width: '100%',
        paddingVertical: normalize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtnTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: fontWeights.default,
        lineHeight: normalize(22),
        color: colors.grey
    }
})