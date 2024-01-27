import React, { Component } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { colors, fontFamilies, fontWeights, normalize } from "../../consts/consts";
import { Alert, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ShareIcon from "../../assets/icons/share";
import { BlurView } from "@react-native-community/blur";

class ZodiakExplain extends Component {
    constructor(props) {
        super(props);
        this.bottomSheet = React.createRef();
    }
    renderBackdrop = props => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
        >
            <BlurView
                style={{flex: 1}}
                blurRadius={1}
                downsampleFactor={10}
                blurType={'xlight'}
            />
        </BottomSheetBackdrop>
    )
    onOpen = () => this.bottomSheet.current.expand();
    onShare = async () => {
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
    render() {
        return (
            <BottomSheet
                ref={this.bottomSheet}
                snapPoints={['93%']}
                index={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={{backgroundColor: 'rgba(61, 61, 61, 0.5)'}}
                backdropComponent={this.renderBackdrop}
            >
                <View style={{height: '100%', paddingHorizontal: normalize(10)}}>
                    <TouchableOpacity
                        style={styles.shareBtn}
                        onPress={this.onShare.bind(this)}
                    >
                        <ShareIcon fill={colors.primaryColor} />
                    </TouchableOpacity>
                    <BottomSheetScrollView
                        style={{flex: 1}}
                        contentContainerStyle={{alignItems: 'center', paddingBottom: normalize(30)}}
                        showsVerticalScrollIndicator={false}
                    >
                        <View
                            style={styles.imagePanel}
                        >
                            <Image
                                style={styles.image}
                                source={require('../../assets/images/events/zodiak.png')}
                                resizeMode={'contain'}
                            />
                        </View>
                        <View style={styles.commentPanel}>
                            <Text style={styles.title}>Луна в Козероге</Text>
                            <Text style={styles.comment}>
                                Дает сдержанные реакции, спокойный ум, обдуманные и дисциплинированные поступки. Хорошее время для планирования, реализации долгосрочных задач. Стимулирует стремление к стабильности и успеху, трудолюбию. Важно действовать и ориентироваться на результат.
                                Держите себя в руках, но избегайте излишней эмоциональной отстраненности и закрытости. Устанавливайте границы, будьте практичны. Это даст опору и ориентиром для дальнейшего движения.
                            </Text>
                        </View>
                    </BottomSheetScrollView>
                </View>
            </BottomSheet>
        )
    }
}
export default ZodiakExplain

const styles = StyleSheet.create({
    imagePanel: {
        width: '100%',
        marginTop: normalize(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
    },
    shareBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
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