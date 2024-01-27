import { Alert, ScrollView, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { colors, fontFamilies, fontWeights, normalize } from "../../consts/consts";
import Back from "../../assets/icons/back";
import ShareIcon from "../../assets/icons/share";

const TransitDetail = memo(props => {
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
                style={{ flex: 1, width: "100%" }}
                contentContainerStyle={styles.contentPanel}
            >
                <Text style={styles.title}>Транзит Луны по вашему 10 дому</Text>
                <View style={styles.lineGroup}>
                    <View style={styles.node}/>
                    <View style={styles.line}/>
                    <View style={styles.node}/>
                </View>
                <View style={styles.timePanel}>
                    <Text style={styles.time}>с 02 Августа  07:08</Text>
                    <Text style={styles.time}>по 04 Августа  09:17</Text>
                </View>
                <Text style={styles.comment}>
                    Луна сейчас движется по 10 дому в вашей натальной карте, который отвечает за работу, карьеру и социальную реализацию.
                    Он также связан с действиями и поступками, которые мы делаем в обществе, и с нашим стремлением к успеху и достижению.
                    Хорошее время для активной работы, решения бизнес задач, переоценки своего социального и карьерного положения, изменения в ваших рабочих коммуникациях и отношениях с сотрудниками.

                    Транзит Луны поднимает вопросы:
                    Насколько действительно важно для меня то, чем я занимаюсь в работе?
                    Чувствую ли я себя удовлетворенным тем общественным статусом и признанием, которые получаю за свои карьерные достижения?
                    Есть ли какие-то эмоции или подсознательные паттерны, ограничивающие меня в профессиональном развитии?

                    Задавая себе эти вопросы и прислушиваясь к себе, можно получить полезные указания, действительно ли ваше положение в социальных и рабочих вопросах соответствует внутренним устремлениям.
                </Text>
            </ScrollView>
        </View>
    );
});
export default TransitDetail;

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
    contentPanel: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(30)
    },
    title: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(20),
        fontWeight: fontWeights.bold,
        lineHeight: normalize(25),
        color: colors.black
    },
    lineGroup: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: normalize(15)
    },
    node: {
        backgroundColor: '#FBACDB',
        width: normalize(8),
        height: normalize(8),
        borderRadius: normalize(8)
    },
    line: {
        flex: 1,
        height: normalize(3.5),
        backgroundColor: '#FBACDB'
    },
    timePanel: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: normalize(10)
    },
    time: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(12),
        fontWeight: fontWeights.default,
        lineHeight: normalize(16),
        color: colors.blackWithAlpha75
    },
    comment: {
        flex: 1,
        marginTop: normalize(20),
        fontFamily: fontFamilies.default,
        fontSize: normalize(16),
        fontWeight: fontWeights.default,
        lineHeight: normalize(21),
        color: colors.blackWithAlpha75,
        letterSpacing: normalize(-0.01)
    }
});