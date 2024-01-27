import {Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {memo, useCallback, useState} from "react";
import {colors, fontFamilies, fontSizes, fontWeights, normalize} from "../../consts/consts";
import Back from "../../assets/icons/back";

const Tips = memo(props => {
    const [ratingActions, setRatingActions] = useState([
        {
            image: require('../../assets/images/heart.png'),
            type: 'heart'
        },
        {
            image: require('../../assets/images/thumb-up.png'),
            type: 'recommend'
        },
        {
            image: require('../../assets/images/thumb-down.png'),
            type: 'against'
        }
    ]);
    const [initialPosition] = useState(new Animated.Value(normalize(250)));
    const goBack = () => {
        props.navigation.goBack(null);
        return true;
    }
    const onRateArticle = useCallback((pressed) => {
        setRatingActions(ratingActions.filter(item => item.type === pressed.type));
        setTimeout(() => animateActionPanel(), 200);

    })
    const animateActionPanel = useCallback(() => {
        Animated.spring(
            initialPosition,
            {
                toValue: normalize(350),
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    })
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
            </View>
            <ScrollView
                style={styles.panel}
                contentContainerStyle={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingHorizontal: normalize(15),
                    paddingVertical: normalize(25)
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>
                    Here you can understand how to work with the practice effectively
                </Text>
                <Image
                    source={require('../../assets/images/tip1.png')}
                    style={styles.image}
                />
                <Text style={styles.comment}>
                    An effective breathing practice that incorporates the practices of qigong and meditation. Allows you to quickly restore emotional balance, harmonize your state and relax your body, release stress and tension.
                </Text>
                <Image
                    source={require('../../assets/images/tip2.png')}
                    style={styles.image}
                />
            </ScrollView>
            <Animated.View style={[styles.actionPanel, {transform: [{translateY: initialPosition}]}]}>
                {
                    ratingActions.map((item, index) => (
                        <TouchableOpacity
                            style={styles.actionBtn}
                            key={index}
                            onPress={() => onRateArticle(item)}
                        >
                            <Image style={styles.actionImg} source={item.image} />
                        </TouchableOpacity>
                    ))
                }
            </Animated.View>
        </View>
    )
})

export default Tips

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: normalize(45),
        paddingHorizontal: normalize(10)
    },
    backBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    backTxt: {
        marginLeft: normalize(5),
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        fontSize: fontSizes.large,
        color: colors.primaryColor
    },
    panel: {
        width: '100%',
        flex: 1,
    },
    title: {
        fontSize: normalize(20),
        color: colors.black,
        fontWeight: fontWeights.bold
    },
    image: {
        width: normalize(310),
        height: normalize(240),
        marginTop: normalize(20),
        resizeMode: 'contain'
    },
    comment: {
        fontSize: normalize(14),
        fontWeight: fontWeights.default,
        color: '#3C3C4399',
        marginTop: normalize(15)
    },
    actionPanel: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
        borderRadius: normalize(30),
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(5)
    },
    actionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: normalize(8)
    },
    actionImg: {
        width: normalize(24),
        height: normalize(30),
        resizeMode: 'contain'
    }
})