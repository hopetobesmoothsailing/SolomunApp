import {StyleSheet, Text, View} from "react-native";
import {memo} from "react";
import {colors, fontFamilies, fontWeights, normalize} from "../../consts/consts";

const feed = memo(props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generating a{'\n'}personalized feed</Text>
        </View>
    )
})
export default feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: colors.white,
        paddingHorizontal: normalize(10),
        paddingTop: normalize(70),
        paddingBottom: normalize(20)
    },
    title: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(30),
        fontWeight: fontWeights.bold,
        color: colors.black,
    },
})