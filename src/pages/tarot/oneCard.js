import { SceneMap, TabView } from "react-native-tab-view";
import { memo, useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, normalize } from "../../consts/consts";
import Animated from "react-native-reanimated";

const OneCard = memo(props => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'card', title: 'Карта дня'},
        {key: 'question', title: 'Быстрый вопрос'}
    ]);
    const renderScene = SceneMap({
        card: Card,
        question: Question
    })
    const handleIndexChange = useCallback((i) => setIndex(i), [index]);
    const tabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={{flexDirection: 'row'}}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex) =>
                            inputIndex === i ? 'white' : '#38383A'
                        ),
                    });

                    return (
                        <TouchableOpacity
                            style={[
                                styles.tabItem,
                                {
                                    backgroundColor: props.focusedTab ? colors.primaryColor : 'white',
                                    borderColor: props.focusedTab ? colors.primaryColor : 'rgba(235, 235, 245, 0.60)'
                                }
                            ]}
                            onPress={() => handleIndexChange(i)}
                        >
                            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        )
    }
    return (
        <TabView
            navigationState={{index, routes}}
            renderTabBar={tabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    )
})
export default OneCard

const Card = () => {
    return (
        <View style={{flex: 1}}></View>
    )
}

const Question = () => {
    return (
        <View style={{flex: 1}}></View>
    )
}

const styles = StyleSheet.create({
    tabItem: {
        paddingHorizontal: normalize(15),
        paddingVertical: normalize(5),
        borderRadius: normalize(15),
        justifyContent: 'center',
        alignItems: 'center'
    }
})