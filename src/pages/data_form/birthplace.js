import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {memo, useCallback, useState} from "react";
import {CITY_API_KEY, CITY_API_URL, colors, fontFamilies, fontWeights, normalize} from "../../consts/consts";
import {PrimaryButton, TextButton} from "../../components/buttons";
import Marker from "../../assets/icons/marker";
import axios from "axios";
import * as Animatable from 'react-native-animatable';
import {connect} from "react-redux";
import {setBirthplace} from "../../store/actions/data";

const Birthplace = memo(props => {
    const [city, setCity] = useState('');
    const [keyword, setKeyword] = useState('');
    const [searchedCities, setSearchedCities] = useState([]);
    const fetchCities = async (name) => {
        const result = await axios.get(CITY_API_URL, {
            params: {
                name: name,
                limit: 7
            },
            headers: {
                'X-Api-Key': CITY_API_KEY,
                "Content-Type": 'application/json'
            }
        });
        return result.data;
    }
    const searchCity = useCallback(async (value) => {
        setKeyword(value);
        if (value === '') {
            setSearchedCities([]);
            return;
        }
        const data = await fetchCities(value);
        setSearchedCities(data.reduce((acc, cur) => [...acc, {city: cur.name, country: cur.country}], []));
    }, [searchedCities]);
    const selectCity = useCallback((item) => {
        setCity(item);
        setKeyword(`${item.city}, ${item.country}`)
        setSearchedCities([]);
    }, []);
    const goToNext = () => {
        props.setBirthplace(city);
        props.navigation.navigate('data_form/feed')
    }
    const onSkip = useCallback(() => {
        props.setBirthplace({});
        props.navigation.navigate('data_form/feed');
    }, [])
    return (
        <View style={styles.container}>
            <View style={{width: '100%'}}>
                <Text style={styles.title}>Where were you born?</Text>
                <View style={styles.cityPanel}>
                    <Text style={styles.inputLabel}>City</Text>
                    <View style={styles.inputPanel}>
                        <TextInput
                            style={styles.input}
                            value={keyword}
                            placeholder={'Moscow'}
                            placeholderTextColor={'rgba(60, 60, 67, 0.30)'}
                            onChangeText={searchCity}
                        />
                        <Marker />
                    </View>
                </View>
                {
                    searchedCities.length > 0 &&
                    <Animatable.View animation={'fadeIn'} duration={200} style={styles.cityListPanel}>
                        <FlatList
                            data={searchedCities}
                            keyExtractor={item => item.city + item.country}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{justifyContent: 'center', alignItems: 'flex-start'}}
                            renderItem={({item}) => (
                                <TouchableOpacity style={styles.cityItem} onPress={() => selectCity(item)}>
                                    <Text style={styles.cityTxt}>{`${item.city}, ${item.country}`}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </Animatable.View>
                }
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
        birthplace: state.dataReducer.birthplace
    }),
    dispatch => ({
        setBirthplace: (birthplace) => dispatch(setBirthplace(birthplace))
    })
)(Birthplace)

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
    cityPanel: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: normalize(20)
    },
    inputLabel: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(14),
        fontWeight: fontWeights.default,
        color: colors.grey
    },
    inputPanel: {
        width: '100%',
        marginTop: normalize(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        borderStyle: 'solid',
        borderRadius: normalize(5),
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
    },
    input: {
        flex: 1,
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: fontWeights.default,
        color: colors.black,
        paddingHorizontal: normalize(10)
    },
    cityListPanel: {
        width: '100%',
        backgroundColor: colors.white,
        marginTop: normalize(5),
        borderRadius: normalize(5),
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(20),
        maxHeight: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 20,
        shadowColor: 'rgba(0,0,0,0.4)'
    },
    cityItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: normalize(10)
    },
    cityTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: '400',
        color: colors.black,
        lineHeight: normalize(17)
    }
})