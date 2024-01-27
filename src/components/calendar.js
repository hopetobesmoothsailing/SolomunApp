import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo, useCallback, useEffect, useState } from "react";
import { colors, fontFamilies, fontWeights, normalize } from "../consts/consts";
import Modal from 'react-native-modal'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const months = ["январь", "февраль", "Маршировать", "апрель",
    "Может", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
    "ноябрь", "Декабрь"];
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekDays = ["ПН","ВТ","СР","ЧТ","ПТ","Сб","ВС"];
const events = [
    {
        "date": "05.04.2023",
        "event": ["newmoon"]
    },
    {
        "date": "23.06.2023",
        "event": ["ekadashi"]
    },
    {
        "date": "03.08.2023",
        "event": ["fullmoon", "eclipse"]
    },
    {
        "date": "26.08.2023",
        "event": ["newmoon"]
    },
    {
        "date": "03.09.2023",
        "event": ["ekadashi"]
    }
    // List of all events for the year
]

const eventColors = {
    newmoon: '#63E6E2',
    fullmoon: colors.black,
    ekadashi: '#FF3B30',
    eclipse: '#FFD60A'
}

const CalendarModal = memo(props => {
    const [activeDate, setActiveDate] = useState(new Date());
    const [matrix, setMatrix] = useState([]);
    const [markedDates, setMarkedDates] = useState([]);
    useEffect(() => {
        generateMatrix();
        getMarkedDates();
    }, [activeDate])
    const generateMatrix = () => {
        let temp = [];
        const year = activeDate.getFullYear();
        const month = activeDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();

        let maxDays = nDays[month];
        if (month === 1) { // February
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                maxDays += 1;
            }
        }

        let counter = 1;
        for (let row = 0; row < 6; row++) {
            temp[row] = [];
            for (let col = 0; col < 7; col++) {
                temp[row][col] = -1;
                if (row === 0 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    temp[row][col] = counter++;
                } else if (row > 0 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    temp[row][col] = counter++;
                }
            }
        }
        setMatrix(temp);
    }
    const getMarkedDates = () => {
        const month = activeDate.getMonth();
        const marked = events.filter(item => moment(item.date, 'DD.MM.YYYY').month() === month);
        setMarkedDates(marked);
    }
    const changeMonth = useCallback((n) => {
        setActiveDate(new Date(activeDate.setMonth(activeDate.getMonth() + n)));
    }, []);
    return (
        <View style={styles.container}>
            <Modal
                animationIn={'fadeIn'}
                animationInTiming={500}
                animationOut={'fadeOut'}
                animationOutTiming={500}
                isVisible={props.visible}
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                backdropColor={'transparent'}
                onBackdropPress={props.closeCalendar}
                onBackButtonPress={props.closeCalendar}
            >
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.monthTxt}>{months[activeDate.getMonth()]}</Text>
                        <View style={styles.paginationPanel}>
                            <TouchableOpacity
                                style={{marginRight: normalize(5)}}
                                onPress={() => changeMonth(-1)}
                            >
                                <MaterialCommunityIcons name={'chevron-left'} color={colors.primaryColor} size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{marginLeft: normalize(5)}}
                                onPress={() => changeMonth(1)}
                            >
                                <MaterialCommunityIcons name={'chevron-right'} color={colors.primaryColor} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginVertical: normalize(15)}}>
                        <View style={styles.calendarHeader}>
                            {
                                weekDays.map((item, index) => (
                                    <View style={styles.dayItem} key={index}>
                                        <Text style={styles.dayTxt}>{item}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <View style={styles.calendarBody}>
                            {
                                matrix.map((row, rowIndex) => {
                                    return row.map((col, colIndex) => (
                                        <DateItem
                                            key={colIndex + 7 * rowIndex}
                                            date={col === -1 ? ' ' : col}
                                            activeDate={col === activeDate.getDate()}
                                            marked={markedDates.find(item => moment(item.date, 'DD.MM.YYYY').date() === col)}
                                        />
                                    ))
                                })
                            }
                        </View>
                    </View>
                    <View style={styles.modalFooter}>
                        <View style={styles.eventPanel}>
                            <Dot color={'#63E6E2'} />
                            <Text style={styles.eventTxt}>Экадаши</Text>
                        </View>
                        <View style={styles.eventPanel}>
                            <Dot color={colors.black} />
                            <Text style={styles.eventTxt}>Затмение</Text>
                        </View>
                        <View style={styles.eventPanel}>
                            <Dot color={'#FF3B30'} />
                            <Text style={styles.eventTxt}>Полнолуние</Text>
                        </View>
                        <View style={styles.eventPanel}>
                            <Dot color={'#FFD60A'} />
                            <Text style={styles.eventTxt}>Новолуние</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
})
export default CalendarModal

const Dot = memo(props => {
    return (
        <View style={{
            width: normalize(6),
            height: normalize(6),
            borderRadius: normalize(6),
            backgroundColor: props.color,
            marginHorizontal: normalize(3)
        }}
        />
    )
})

const DateItem = memo(props => {
    return (
        <View style={[styles.dateItem, {backgroundColor: props.activeDate ? 'rgba(88, 86, 214, 0.12)' : 'white'}]}>
            <Text style={[styles.dateTxt, {color: props.activeDate ? colors.primaryColor : colors.black}]}>
                {props.date}
            </Text>
            {
                props.marked !== undefined &&
                <View style={styles.eventMark}>
                    {
                        props.marked.event.map((item, index) => (
                            <Dot color={eventColors[item]} key={index} />
                        ))
                    }
                </View>
            }
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: normalize(15),
        padding: normalize(15)
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    monthTxt: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.bold,
        fontSize: normalize(17),
        lineHeight: normalize(22)
    },
    paginationPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    eventPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: normalize(10)
    },
    eventTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(12),
        lineHeight: normalize(16),
        fontWeight: fontWeights.default,
        color: colors.grey,
        marginLeft: normalize(5)
    },
    calendarHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: normalize(5)
    },
    dayItem: {
        width: '14.286%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(13),
        lineHeight: normalize(18),
        fontWeight: fontWeights.default,
        color: 'rgba(60, 60, 67, 0.30)',
    },
    dateItem: {
        width: normalize(35),
        height: normalize(35),
        borderRadius: normalize(40),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    dateTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(20),
        lineHeight: normalize(25),
        fontWeight: '500',
    },
    eventMark: {
        position: 'absolute',
        top: normalize(2),
        right: normalize(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    calendarBody: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
})