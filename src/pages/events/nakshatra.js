import { Alert, Image, ScrollView, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { colors, fontFamilies, fontWeights, normalize } from "../../consts/consts";
import Back from "../../assets/icons/back";
import ShareIcon from "../../assets/icons/share";

const Nakshatra = memo(props => {
    const goBack = () => {
        props.navigation.goBack(null);
        return true;
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
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
    }
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
            <ScrollView
                style={{flex: 1, width: '100%'}}
                contentContainerStyle={{alignItems: 'center', justifyContent: 'center', paddingBottom: normalize(30)}}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={styles.imagePanel}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/events/nakshatra.png')}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.commentPanel}>
                    <Text style={styles.title}>Накшатра</Text>
                    <Text style={styles.comment}>
                        Накшатры в джйотише это 27 лунных стоянок в зодиакальном круге. Каждая накшатра занимает 13 градусов и 20 минут эклиптики, и Луна проходит через каждую накшатру примерно за один день. Один из самых важных показателей по определению благоприятного времени для действий в ведической астрологии. Каждая из накшатр несет свою энергию, "настройку" и уроки. Каждая из них имеет свою уникальную символику, связанную с определенной божественной энергией или мифологическим образом. Они также связаны с определенными качествами, профессиями, цветами, драгоценными камнями и т. д. Со временем, наблюдая за тем как разворачивается день под знаком разных накшатр, можно научиться чувствовать происходящее образно, и сонастраивать свое движение по жизни более тонко.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
})

export default Nakshatra

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        paddingTop: StatusBar.currentHeight + normalize(15)
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(15)
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center'
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagePanel: {
        width: '100%',
        marginTop: normalize(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
    },
    commentPanel: {
        flex: 1,
        paddingHorizontal: normalize(15),
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: normalize(20)
    },
    title: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.bold,
        fontSize: normalize(20),
        lineHeight: normalize(25),
        color: colors.black,
    },
    comment: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        fontSize: normalize(16),
        lineHeight: normalize(21),
        color: colors.blackWithAlpha75,
        letterSpacing: normalize(-0.005),
        marginTop: normalize(15)
    }
})