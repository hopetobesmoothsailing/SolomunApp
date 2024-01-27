import { Alert, FlatList, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo, useCallback, useRef, useState } from "react";
import { colors, fontFamilies, fontWeights, normalize } from "../../consts/consts";
import Back from "../../assets/icons/back";
import ShareIcon from "../../assets/icons/share";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EventDetailModal from '../events/event_detail'

const eventList = [
    {
        title: 'Полнолуние  в Скорпионе',
        date: '04.06.2023'
    },
    {
        title: 'Меркурий переходит в знак Тельца',
        date: '07.06.2023'
    },
    {
        title: 'Солнце переходит в знак близнецов',
        date: '15.06.2023'
    },
    {
        title: 'Сатурн начинает ретроградное движение в Водолее',
        date: '17.06.2023'
    },
    {
        title: 'Новолуние в Близнецах',
        date: '18.06.2023'
    },
    {
        title: 'Летнее солнцестояние',
        date: '21.06.2023'
    },
    {
        title: 'Меркурий переходит в знак Близнецов',
        date: '24.06.2023'
    },
    {
        title: 'Марс переходит в знак Льва',
        date: '30.06.2023'
    }
]

const MonthlyEvents = memo(props => {
    const [selectedEvent, selectEvent] = useState({});
    const eventDetailModal = useRef();
    const goBack = () => {
        props.navigation.goBack(null);
        return true;
    };
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "React Native | A framework for building native apps using React"
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    const openEventDetailModal = useCallback((item) => {
        selectEvent(item);
        eventDetailModal.current.onOpen()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={goBack}
                >
                    <Back fill={colors.primaryColor} />
                    <Text style={styles.backTxt}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.shareBtn}
                    onPress={onShare}
                >
                    <ShareIcon fill={colors.primaryColor} />
                </TouchableOpacity>
            </View>
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderTitle}>События месяца</Text>
                <View style={styles.monthPanel}>
                    <TouchableOpacity style={styles.arrowBtn}>
                        <MaterialCommunityIcons name={'chevron-left'} color={colors.primaryColor} size={24} />
                    </TouchableOpacity>
                    <Text style={styles.month}>Сентябрь</Text>
                    <TouchableOpacity style={[styles.arrowBtn]}>
                        <MaterialCommunityIcons name={'chevron-right'} color={colors.primaryColor} size={24} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={{flex: 1, width: '100%'}}
                data={eventList}
                contentContainerStyle={{alignItems: 'center', paddingHorizontal: normalize(20), paddingTop: normalize(15), paddingBottom: normalize(30)}}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <EventItem item={item} onPress={() => openEventDetailModal(item)} />
                )}
                showsVerticalScrollIndicator={false}
            />
            <EventDetailModal ref={eventDetailModal} event={selectedEvent} />
        </View>
    )
})
export default MonthlyEvents

const EventItem = memo(props => {
    return (
        <TouchableOpacity style={styles.eventItem} onPress={props.onPress}>
            <View style={styles.eventItemContent}>
                <Text style={styles.eventItemTitle}>{props.item.title}</Text>
                <Text style={styles.eventItemDate}>{props.item.date}</Text>
            </View>
            <MaterialCommunityIcons name={'chevron-right'} color={colors.primaryColor} size={24}/>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.white,
        paddingTop: StatusBar.currentHeight + normalize(15)
    },
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: normalize(15)
    },
    backBtn: {
        flexDirection: "row",
        alignItems: "center"
    },
    backTxt: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        fontSize: normalize(17),
        lineHeight: normalize(22),
        color: colors.primaryColor,
        marginLeft: normalize(5)
    },
    shareBtn: {
        justifyContent: "center",
        alignItems: "center"
    },
    listHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(15),
        marginTop: normalize(20)
    },
    listHeaderTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(20),
        fontWeight: fontWeights.bold,
        lineHeight: normalize(25),
        color: colors.black
    },
    monthPanel: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    month: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(12),
        fontWeight: fontWeights.default,
        lineHeight: normalize(16),
        color: colors.grey,
        marginHorizontal: normalize(15)
    },
    arrowBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    eventItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: normalize(10)
    },
    eventItemContent: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: normalize(10)
    },
    eventItemTitle: {
        fontFamily: fontFamilies.default,
        fontWeight: '600',
        fontSize: normalize(15),
        lineHeight: normalize(20),
        color: colors.black
    },
    eventItemDate: {
        fontFamily: fontFamilies.default,
        fontWeight: '500',
        fontSize: normalize(12),
        lineHeight: normalize(16),
        color: 'rgba(94, 92, 230, 0.5)',
        marginTop: normalize(10)
    }
})