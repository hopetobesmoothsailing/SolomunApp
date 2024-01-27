import {memo} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, fontFamilies, fontSizes, fontWeights, normalize} from "../consts/consts";
import Events from "../assets/icons/events";
import Practices from "../assets/icons/practices";
import Affirmations from "../assets/icons/affirmations";
import Tarot from "../assets/icons/tarot";

export const BottomBar = memo(props => {
    return (
        <View style={BottomBarStyle.container}>
            <TouchableOpacity
                style={BottomBarStyle.item}
                activeOpacity={0.75}
                onPress={props.goToEvents}
            >
                <Events fill={props.currentTab === 'events' ? colors.primaryColor : null} />
                <Text style={[BottomBarStyle.caption, {color: props.currentTab === 'events' ? colors.primaryColor : colors.blackWithAlpha75}]}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BottomBarStyle.item}
                activeOpacity={0.75}
                onPress={props.goToPractices}
            >
                <Practices fill={props.currentTab === 'practices' ? colors.primaryColor : null} />
                <Text style={[BottomBarStyle.caption, {color: props.currentTab === 'practices' ? colors.primaryColor : colors.blackWithAlpha75}]}>Practices</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BottomBarStyle.item}
                activeOpacity={0.75}
                onPress={props.goToAffirmations}
            >
                <Affirmations fill={props.currentTab === 'affirmations' ? colors.primaryColor : null} />
                <Text style={[BottomBarStyle.caption, {color: props.currentTab === 'affirmations' ? colors.primaryColor : colors.blackWithAlpha75}]}>Affirmations</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={BottomBarStyle.item}
                activeOpacity={0.75}
                onPress={props.goToTarot}
            >
                <Tarot fill={props.currentTab === 'tarot' ? colors.primaryColor : null} />
                <Text style={[BottomBarStyle.caption, {color: props.currentTab === 'tarot' ? colors.primaryColor : colors.blackWithAlpha75}]}>Tarot</Text>
            </TouchableOpacity>
        </View>
    )
})

const BottomBarStyle = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.whiteWithAlpha75,
        paddingTop: normalize(7),
        paddingBottom: normalize(15),
        paddingHorizontal: normalize(10)
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    caption: {
        fontFamily: fontFamilies.default,
        fontSize: fontSizes.small,
        fontStyle: 'normal',
        fontWeight: fontWeights.default,
        marginTop: normalize(5)
    }
})