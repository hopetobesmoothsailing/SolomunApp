import {Pressable, StyleSheet, Text, View} from "react-native";
import Calendar from "../assets/icons/calendar";
import {memo, useCallback, useState} from "react";
import {colors, fontFamilies, normalize} from "../consts/consts";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';
import {SelectList} from "react-native-dropdown-select-list";

export const DatePicker = memo(props => {
    const [showPicker, setShowPicker] = useState(false);
    const onShowPicker = useCallback(() => setShowPicker(true), []);
    const onChange = useCallback((e, value) => {
        setShowPicker(false)
        props.onChange(value);
    }, []);
    return (
        <View style={styles.datePickerContainer}>
            <Pressable
                style={{flex: 1}}
                onPress={onShowPicker}
            >
                {
                    props.date === '' ?
                        <Text style={styles.placeholder}>{props.placeholder}</Text>
                        :
                        <Text style={styles.inputValue}>{moment(props.date).format('MMMM DD, yyyy')}</Text>
                }
            </Pressable>
            <Calendar fill={'#3C3C43'} />
            {
                showPicker &&
                <DateTimePicker
                    mode={'date'}
                    value={props.date === '' ? new Date() : props.date}
                    display={'spinner'}
                    onChange={onChange}
                />
            }
        </View>
    )
})

export const TimePicker = memo(props => {
    const [selected, setSelected] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const timezones = [
        'GMT+4',
        'GMT+5'
    ]
    const onSelect = useCallback((value) => setSelected(value), []);
    const onShowPicker = useCallback(() => setShowPicker(true), []);
    const onChange = useCallback((e, value) => {
        setShowPicker(false)
        props.onChange(value);
    }, []);
    return (
        <View style={styles.timePickerPanel}>
            <SelectList
                data={timezones}
                setSelected={onSelect}
                save={'value'}
                defaultOption={{key: 0, value: 'GMT+4'}}
                boxStyles={{
                    borderWidth: 0.5,
                    borderColor: 'rgba(60, 60, 67, 0.29)',
                    borderRadius: normalize(5),
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: normalize(10),
                    paddingVertical: normalize(10)
                }}
                inputStyles={{
                    fontFamily: fontFamilies.default,
                    fontSize: normalize(15),
                    fontWeight: '400',
                    color: colors.black,
                    marginRight: normalize(10),
                    marginLeft: normalize(5)
                }}
                dropdownStyles={{
                    borderWidth: 0.5,
                    borderColor: 'rgba(60, 60, 67, 0.29)',
                    borderRadius: normalize(5),
                }}
                dropdownItemStyles={{
                    paddingLeft: normalize(15),
                    paddingRight: normalize(30)
                }}
                dropdownTextStyles={{
                    fontFamily: fontFamilies.default,
                    fontSize: normalize(15),
                    fontWeight: '400',
                    color: colors.black,
                }}
            />
            <View style={styles.timePanel}>
                <Pressable
                    style={{flex: 1}}
                    onPress={onShowPicker}
                >
                    {
                        props.time === '' ?
                            <Text style={styles.placeholder}>{props.placeholder}</Text>
                            :
                            <Text style={styles.inputValue}>{moment(props.time).format('hh:mm')}</Text>
                    }
                </Pressable>
                <Text style={styles.placeholder}>{moment(props.time).format('A')}</Text>
                {
                    showPicker &&
                    <DateTimePicker
                        mode={'time'}
                        value={props.time === '' ? new Date(Date.now()) : props.time}
                        display={'spinner'}
                        onChange={onChange}
                    />
                }
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    datePickerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: normalize(5),
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
        borderWidth: 0.5,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        borderRadius: normalize(5)
    },
    placeholder: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: '400',
        color: 'rgba(60, 60, 67, 0.30)'
    },
    inputValue: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: '400',
        color: colors.black
    },
    timePickerPanel: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: normalize(5),
    },
    timePanel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
        marginLeft: normalize(8),
        borderWidth: 0.5,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        borderRadius: normalize(5)
    }
})