import { StyleSheet, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { normalize } from "../consts/consts";
import ArrowDown from "../assets/icons/arrow_down";
import ArrowUp from "../assets/icons/arrow_up";

const ToggleStick = memo(props => {
    return (
        <TouchableOpacity
            style={styles.stick}
            onPress={props.onPress}
        >
            <View style={[styles.line, {backgroundColor: props.color}]} />
            {
                props.expanded ?
                    <ArrowUp fill={props.color} />
                    :
                    <ArrowDown fill={props.color} />
            }
            <View style={[styles.line, {backgroundColor: props.color}]} />
        </TouchableOpacity>
    )
})
export default ToggleStick

const styles = StyleSheet.create({
    stick: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: normalize(10)
    },
    line: {
        width: '40%',
        height: normalize(2),
    },
})