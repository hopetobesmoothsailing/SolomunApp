import { StatusBar, StyleSheet, Text, View } from "react-native";
import { memo, useState } from "react";
import { BottomBar } from "../../components/bars";
import { colors, fontFamilies, fontWeights, normalize, W } from "../../consts/consts";
import { MaterialTabBar, Tabs } from "react-native-collapsible-tab-view";
import OneCard from "./oneCard";

const Tarot = memo(props => {
    const [currentTab, setCurrentTab] = useState('1 карта')
    const goToAffirmations = () => props.navigation.navigate("affirmations");
    const goToEvents = () => props.navigation.navigate("events");
    const goToPractices = () => props.navigation.navigate("practices");
    const tabBar = (props) => {
        return (
            <MaterialTabBar
                {...props}
                width={0.95 * W}
                indicatorStyle={{ height: 0 }}
                style={{
                    backgroundColor: "rgba(235, 235, 245, 0.30)",
                    marginTop: normalize(15),
                    borderRadius: normalize(15)
                }}
                tabStyle={{
                    marginVertical: normalize(3),
                }}
                labelStyle={{
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    borderRadius: normalize(15),
                    fontFamily: fontFamilies.default,
                    fontSize: normalize(11),
                    color: colors.black
                }}
            />
        )
    };
    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Taro</Text>
                <Text style={styles.blueTxt}>База знаний</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Tabs.Container
                    renderHeader={Header}
                    renderTabBar={tabBar}
                    containerStyle={{
                        paddingHorizontal: normalize(10),
                        alignItems: 'center',
                    }}
                >
                    <Tabs.Tab name={"1 карта"}>
                        <Tabs.ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <OneCard />
                        </Tabs.ScrollView>
                    </Tabs.Tab>
                    <Tabs.Tab name={"Расклады"}>
                        <Tabs.ScrollView
                            showsVerticalScrollIndicator={false}
                        ></Tabs.ScrollView>
                    </Tabs.Tab>
                    <Tabs.Tab name={"Аркан на месяц"}>
                        <Tabs.ScrollView
                            showsVerticalScrollIndicator={false}
                        ></Tabs.ScrollView>
                    </Tabs.Tab>
                </Tabs.Container>
            </View>
            <BottomBar
                currentTab={"tarot"}
                goToAffirmations={goToAffirmations}
                goToEvents={goToEvents}
                goToPractices={goToPractices}
            />
        </View>
    );
});
export default Tarot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white
    },
    panel: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight + normalize(20)
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: normalize(20)
    },
    headerTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(22),
        fontWeight: fontWeights.bold,
        color: colors.black
    },
    blueTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(13),
        fontWeight: fontWeights.default,
        color: colors.primaryColor
    },
});