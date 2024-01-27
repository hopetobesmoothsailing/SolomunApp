import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { colors, fontFamilies, fontWeights, normalize, W } from "../consts/consts";
import Calendar from "../assets/icons/calendar";

export const MoonPhase = memo(props => {
    return (
        <LinearGradient
            style={styles.panel}
            colors={props.color}
            useAngle={true}
            angle={45}
        >
            <View style={styles.leftSide}>
                {props.image}
                <View style={styles.txtPanel}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.openCalendar}>
                <Calendar fill={'#90579E'} />
            </TouchableOpacity>
        </LinearGradient>
    )
})

const styles = StyleSheet.create({
    panel: {
        width: 0.91*W,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: normalize(20),
        paddingHorizontal: normalize(14),
        borderRadius: normalize(14),
        marginHorizontal: normalize(15)
    },
    leftSide: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    txtPanel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: normalize(10)
    },
    name: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(11),
        fontWeight: fontWeights.default,
        color: colors.grey,
        lineHeight: normalize(16)
    },
    date: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(26),
        fontWeight: fontWeights.bold,
        lineHeight: normalize(32)
    }
})