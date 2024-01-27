import {StyleSheet, Text, View} from "react-native";
import {memo, useCallback, useState} from "react";
import {colors, fontFamilies, fontWeights, normalize} from "../../consts/consts";
import {Switch} from "react-native-ios-kit";
import {DatePicker, TimePicker} from "../../components/pickers";
import {PrimaryButton, TextButton} from "../../components/buttons";
import {connect} from "react-redux";
import {setBirthday} from "../../store/actions/data";

const Birthday = memo(props => {
    const [knowExactly, setKnowExactly] = useState(false)
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const changeOption = useCallback((value) => {
        setKnowExactly(value);
        if (value) props.setBirthday({...props.birthday, time: ''});
    }, []);
    const changeDate = useCallback((value) => {
        setDate(value);
        props.setBirthday({...props.birthday, date: value});
    }, []);
    const changeTime = useCallback((value) => {
        setTime(value);
        props.setBirthday({...props.birthday, time: value});
    }, []);
    const goToNext = () => props.navigation.navigate('data_form/birthplace');
    const onSkip = useCallback(() => {
        props.setBirthday({date: '', time: ''});
        props.navigation.navigate('data_form/birthplace');
    }, [])

    return (
        <View style={styles.container}>
            <View style={{width: '100%'}}>
                <Text style={styles.title}>{`When's your\nbirthday?`}</Text>
                <View style={styles.datePanel}>
                    <Text style={styles.label}>Date</Text>
                    <DatePicker
                        placeholder={'August 21, 1995'}
                        date={date}
                        onChange={changeDate}
                    />
                </View>
                {
                    !knowExactly &&
                    <View style={styles.timePanel}>
                        <Text style={styles.label}>Time</Text>
                        <TimePicker
                            time={time}
                            placeholder={'06:00'}
                            onChange={changeTime}
                        />
                    </View>
                }
                <View style={styles.switchPanel}>
                    <Text style={styles.label}>Don't know the exact time</Text>
                    <Switch value={knowExactly} onValueChange={changeOption} />
                </View>
            </View>
            <View style={{width: '100%'}}>
                <PrimaryButton
                    label={'Next'}
                    onPress={goToNext}
                />
                <TextButton
                    label={'Skip'}
                    onPress={onSkip}
                />
            </View>
        </View>
    )
})
export default connect(
    state => ({
        birthday: state.dataReducer.birthday
    }),
    dispatch => ({
        setBirthday: (birthday) => dispatch(setBirthday(birthday))
    })
)(Birthday)

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
    datePanel: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: normalize(20)
    },
    dateInput: {
        flex: 1,
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: '400',
        color: colors.grey
    },
    label: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(14),
        fontWeight: fontWeights.default,
        color: colors.grey
    },
    switchPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: normalize(20)
    },
    timePanel: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: normalize(20)
    }
})