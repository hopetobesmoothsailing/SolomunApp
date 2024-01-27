import React, { Component } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { colors, fontFamilies, fontWeights, normalize } from "../../consts/consts";
import { StyleSheet, Text } from "react-native";
import { BlurView } from "@react-native-community/blur";

class EventDetail extends Component {
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
                <BottomSheetScrollView
                    style={{flex: 1}}
                    contentContainerStyle={{alignItems: 'flex-start', paddingHorizontal: normalize(15), paddingVertical: normalize(30)}}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.title}>{this.props.event.title}</Text>
                    <Text style={styles.date}>{this.props.event.date}</Text>
                    <Text style={styles.comment}>
                        Полнолуние в Скорпионе приносит с собой интенсивные энергии преобразования, интроспекции и глубокого эмоционального погружения. Скорпион, управляемый Марсом, ассоциируется с секретами, тайнами и скрытыми истинами, и полнолуние в этом знаке может привести к внезапным откровениям и осознанию глубоко укоренённых чувств.

                        Подобное полнолуние может акцентировать необходимость освободиться от старых убеждений, страхов или привязанностей, чтобы дать путь новым возможностям. Символика смерти и перерождения, связанная со Скорпионом, в этот период становится особенно актуальной. Это время для глубокого самопознания, в которое можно погрузиться, чтобы исцелить старые раны и обрести новое понимание своего истинного "Я".

                        Также Скорпион ассоциируется с сексуальной энергией, табу и мистикой, что может привести к возрастанию интереса к эзотерике, тайнам природы и глубинам подсознания. Полнолуние в Скорпионе - это время, когда мы можем обратиться к своей интуиции и внутреннему мудрецу для получения ответов и прозрений.
                    </Text>
                </BottomSheetScrollView>
            </BottomSheet>
        )
    }
}
export default EventDetail

const styles = StyleSheet.create({
    title: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.bold,
        fontSize: normalize(20),
        lineHeight: normalize(25),
        color: colors.black,
    },
    date: {
        fontFamily: fontFamilies.default,
        fontWeight: '500',
        fontSize: normalize(12),
        lineHeight: normalize(16),
        color: 'rgba(94, 92, 230, 0.5)',
    },
    comment: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        fontSize: normalize(16),
        lineHeight: normalize(21),
        color: colors.blackWithAlpha75,
        letterSpacing: normalize(-0.005),
        marginTop: normalize(20),
    }
})