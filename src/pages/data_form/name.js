import {StyleSheet, Text, TextInput, View} from "react-native";
import {memo, useCallback, useState} from "react";
import {colors, fontFamilies, fontWeights, normalize} from "../../consts/consts";
import {PrimaryButton, TextButton} from "../../components/buttons";
import {connect} from "react-redux";
import {setName} from "../../store/actions/data";

const Name = memo(props => {
    const [name, setName] = useState('');
    const changeName = useCallback((value) => setName(value), []);
    const goToNext = useCallback(() => {
        props.setName(name);
        props.navigation.navigate('data_form/birthday');
    }, []);
    const onSkip = useCallback(() => {
        props.setName('');
        props.navigation.navigate('data_form/birthday');
    }, [])
    return (
        <View style={styles.container}>
            <View style={{width: '100%'}}>
                <Text style={styles.title}>What's your name?</Text>
                <View style={styles.inputPanel}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <TextInput style={styles.input} onChangeText={changeName} />
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
        name: state.dataReducer.name
    }),
    dispatch => ({
        setName: (name) => dispatch(setName(name))
    })
)(Name)

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
    inputPanel: {
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
    input: {
        width: '100%',
        marginTop: normalize(5),
        borderWidth: 0.5,
        borderColor: 'rgba(60, 60, 67, 0.29)',
        borderStyle: 'solid',
        borderRadius: normalize(5),
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(10),
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: fontWeights.default,
        color: colors.black
    },
})