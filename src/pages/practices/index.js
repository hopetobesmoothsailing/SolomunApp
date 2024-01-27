import {
    Easing,
    FlatList,
    ImageBackground,
    LayoutAnimation, Platform,
    StyleSheet,
    Text,
    TouchableOpacity, UIManager,
    View
} from "react-native";
import React, {Component, memo, useCallback, useEffect, useRef, useState} from "react";
import {useSharedValue, useDerivedValue} from "react-native-reanimated";
import {BottomBar} from "../../components/bars";
import {colors, fontFamilies, fontWeights, formatTimeTrack, H, normalize} from "../../consts/consts";
import LinearGradient from "react-native-linear-gradient";
import ArrowRight from '../../assets/icons/arrow_right'
import * as Animatable from 'react-native-animatable';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetBackdrop, BottomSheetView} from "@gorhom/bottom-sheet";
import Tips from "../../assets/icons/tips";
import Share from "../../assets/icons/share";
import Restore from "../../assets/icons/restore";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import TrackPlayer, {RepeatMode, State, usePlaybackState, useProgress} from "react-native-track-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import Pause from "../../assets/icons/pause";
import Play from "../../assets/icons/play";
import Repeat from "../../assets/icons/repeat";
import Repeaton from "../../assets/icons/repeaton";
import {setupPlayer} from "../../../trackPlayerServices";
import Audio1 from "../../assets/audios/1.m4a";
import Audio2 from "../../assets/audios/2.wav";
import Play24 from "../../assets/icons/play24";
import Pause24 from "../../assets/icons/pause24";

const contents = [
    {
        category: 'Increased energy',
        contents: [
            {
                title: 'My favorite body',
                duration: 540,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                isNew: true,
                isRecommended: false,
                image: '',
                media: {
                    id: 1,
                    url: Audio1,
                    title: 'Affirmation of the day',
                    artist: 'Max Vidishev',
                    artwork: require('../../assets/images/music.png')
                },
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            },
            {
                title: 'Internal Fire',
                duration: 480,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                isNew: false,
                isRecommended: true,
                image: '',
                media: {
                    id: 2,
                    url: Audio2,
                    title: 'Contact with myself',
                    artist: 'Max Vidishev',
                    artwork: require('../../assets/images/music.png')
                },
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            },
            {
                title: 'Mountain',
                duration: 780,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                isNew: false,
                isRecommended: false,
                image: '',
                media: {
                    id: 1,
                    url: Audio1,
                    title: 'Affirmation of the day',
                    artist: 'Max Vidishev',
                    artwork: require('../../assets/images/music.png')
                },
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            },
            {
                title: 'Hormonal balance',
                duration: 3000,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                image: '',
                isNew: false,
                isRecommended: false,
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            },
            {
                title: 'Hormonal balance1',
                duration: 3000,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                image: '',
                isNew: false,
                isRecommended: false,
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            }
        ]
    },
    {
        category: 'Women\'s energy',
        contents: [
            {
                title: 'Hormonal balance',
                duration: 3000,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                image: '',
                isNew: false,
                isRecommended: false,
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            }
        ]
    },
    {
        category: 'Working with shadow',
        contents: [
            {
                title: 'My favorite body',
                duration: 300,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                image: '',
                isNew: false,
                isRecommended: false,
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            },
            {
                title: 'Mountain',
                duration: 480,
                description: 'We kindle the fire of the inner Sun that gives strength, fulfillment, courage to live our lives and manifest in the world',
                image: '',
                isNew: false,
                isRecommended: false,
                author: 'Boris Kutafin',
                voiceBy: 'Kayta Stykalo',
                musicBy: 'Max Vidishev',
                videoBy: 'Max Vidishev',
                editBy: 'Max Vidishev'
            }
        ]
    }
]

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Practices = memo(props => {
    const bottomSheetModalRef = useRef(null);
    const playModalRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState({});
    const [isPlaying, setPlaying] = useState(false);
    const [showBottomBar, setShowBottomBar] = useState(true);
    const [currentPlayerRepeatMode, setCurrentPlayerRepeatMode] = useState(RepeatMode.Off);
    const playerState = usePlaybackState();
    const {position, duration} = useProgress(200);
    const animatedPosition = useSharedValue(0);
    const height = useDerivedValue(() => {
        return H - animatedPosition.value;
    }, [animatedPosition]);

    const goToAffirmations = () => props.navigation.navigate('affirmations');
    const goToEvents = () => props.navigation.navigate('events');
    const goToTarot = () => props.navigation.navigate('tarot');
    const goToPack = (item) => props.navigation.navigate('practice_pack', {pack: item})

    const openPractice = useCallback(async (item) => {
        if (playModalRef.current !== null) playModalRef.current.close();
        if (selectedItem.title !== item.title) {
            await setPlaying(false)
            await initializeAudio(item);
        }
        await setSelectedItem(item);
        if(bottomSheetModalRef.current !== null) {
            bottomSheetModalRef.current.onOpen();
            setShowBottomBar(false)
        }
    }, [selectedItem])
    const initializeAudio = async (item) => {
        const isSetup = await setupPlayer();
        const queue = await TrackPlayer.getQueue();
        if (isSetup) {
            if (queue.length <= 0) await TrackPlayer.add(item.media);
            else {
                await TrackPlayer.remove(0);
                await TrackPlayer.reset();
                await TrackPlayer.add(item.media);
            }
        } else {
            console.log('TrackPlayer is not set up');
        }
    }

    const onPlayAudio = async () => {
        if (!isPlaying) await setPlaying(true);
        await TrackPlayer.play();
    };
    const onPauseAudio = async () => {
        await TrackPlayer.pause();
    }
    const onReplayAudio = async () => {
        await TrackPlayer.pause();
        await TrackPlayer.seekTo(0);
        await TrackPlayer.play();
    }
    const setPlayerRepeatMode = useCallback(async () => {
        const currentMode = await TrackPlayer.getRepeatMode();
        if (currentMode === RepeatMode.Off) {
            await TrackPlayer.setRepeatMode(RepeatMode.Track);
            setCurrentPlayerRepeatMode(RepeatMode.Track);
        }
        else if (currentMode === RepeatMode.Track) {
            await TrackPlayer.setRepeatMode(RepeatMode.Off);
            setCurrentPlayerRepeatMode(RepeatMode.Off);
        }
    }, [currentPlayerRepeatMode])
    const openPlayModal = () => {
        if (playModalRef.current !== null) playModalRef.current.snapToIndex(0);
    }
    const onShowBottomBar = useCallback((value) => setShowBottomBar(value), []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.panel}>
                <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{paddingBottom: normalize(30)}}
                    data={contents}
                    keyExtractor={item => item.category}
                    renderItem={({item}) => (
                        <PracticePack
                            item={item}
                            goToPack={() => goToPack(item)}
                            onPressItem={openPractice}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                item={selectedItem}
                isPlaying={isPlaying}
                position={position}
                duration={duration}
                currentPlayerRepeatMode={currentPlayerRepeatMode}
                playerState={playerState}
                animatedPosition={animatedPosition}
                onPlayAudio={onPlayAudio}
                onPauseAudio={onPauseAudio}
                onReplayAudio={onReplayAudio}
                setPlayerRepeatMode={setPlayerRepeatMode}
                openPlayModal={openPlayModal}
                showBottomBar={onShowBottomBar}
            />
            {
                showBottomBar &&
                <BottomBar
                    currentTab={'practices'}
                    goToAffirmations={goToAffirmations}
                    goToEvents={goToEvents}
                    goToTarot={goToTarot}
                />
            }
        </GestureHandlerRootView>
    )
})
export default Practices

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    panel: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: normalize(10),
        paddingTop: normalize(50)
    },
    packContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexGrow: 0,
        marginBottom: normalize(30),
    },
    packHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    packCategoryTxt: {
        flex: 1,
        fontFamily: fontFamilies.default,
        fontSize: normalize(20),
        fontWeight: fontWeights.bold,
        color: colors.black
    },
    packItem: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: normalize(10),
        marginHorizontal: normalize(7),
    },
    packItemComment: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: normalize(10),
        paddingHorizontal: normalize(10),
        borderBottomLeftRadius: normalize(10),
        borderBottomRightRadius: normalize(10),
    },
    packItemTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(13),
        fontWeight: 600,
        color: colors.black
    },
    packItemDuration: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(10),
        fontWeight: fontWeights.default,
        color: colors.grey,
        marginTop: normalize(5)
    },
    recommendedItem: {
        width: '100%',
        height: normalize(150),
        borderRadius: normalize(10),
        marginTop: normalize(20)
    },
    recommendTag: {
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(7),
        paddingVertical: normalize(2),
        borderRadius: normalize(10),
        position: 'absolute',
        top: normalize(10),
        left: normalize(10)
    },
    newTag: {
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(7),
        paddingVertical: normalize(2),
        borderRadius: normalize(10),
        position: 'absolute',
        top: normalize(10),
        left: normalize(10)
    },
    tagTxt: {
        fontFamily: fontFamilies.default,
        fontWeight: 600,
        fontSize: normalize(10),
        color: colors.white
    },
    bottomSheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: normalize(5),
        paddingVertical: normalize(5),
        backgroundColor: colors.white
    },
    bottomSheetBody: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomSheetBodyInfo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(20),
        marginBottom: normalize(20)
    },
    bottomSheetBodyInfoTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(10),
        fontWeight: fontWeights.default,
        color: colors.grey,
        lineHeight: normalize(14)
    },
    bottomSheetBodyUp: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(15)
    },
    bottomSheetBodyTitle: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.bold,
        color: colors.black,
        lineHeight: normalize(40)
    },
    bottomSheetBodyDesc: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        color: '#3C3C3C',
        lineHeight: normalize(20),
        textAlign: 'center',
        marginTop: normalize(5)
    },
    bottomSheetBodyMiddle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionPanel: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionBtnPanel: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playBtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: normalize(46),
        height: normalize(46),
        borderRadius: normalize(72),
        backgroundColor: colors.primaryColor,
        marginHorizontal: normalize(10)
    },
    pauseBtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: normalize(46),
        height: normalize(46),
        borderRadius: normalize(72),
        backgroundColor: colors.primaryColor,
    },
    sideBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: normalize(34),
        height: normalize(34),
        borderRadius: normalize(48),
        backgroundColor: 'white',
        marginHorizontal: normalize(10)
    },
    timeTxt: {
        position: 'absolute',
        bottom: normalize(-20),
        fontFamily: fontFamilies.default,
        fontSize: normalize(13),
        fontWeight: '600',
        color: '#38383A',
    },
    playModalPanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: normalize(10),
        paddingTop: normalize(15),
        paddingBottom: normalize(10)
    },
    playModalTitle: {
        fontFamily: fontFamilies.default,
        fontWeight: '600',
        fontSize: normalize(14),
        color: colors.black,
        lineHeight: normalize(20)
    },
    playModalTime: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(10),
        fontWeight: fontWeights.default,
        color: colors.grey,
        lineHeight: normalize(14)
    },
    playModalPlayBtn: {
        justifyContent:'center',
        alignItems: 'center',
        width: normalize(24),
        height: normalize(24),
        borderRadius: normalize(24),
        backgroundColor: colors.primaryColor,
    },
    playModalProgress: {
        backgroundColor: colors.primaryColor,
        opacity: 0.1,
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '60%'
    }
})

const PracticePack = memo(props => {
    return (
        <View style={styles.packContainer}>
            <View style={styles.packHeader}>
                <Text style={styles.packCategoryTxt}>{props.item.category}</Text>
                {
                    props.item.contents.length > 4 &&
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        onPress={props.goToPack}
                    >
                        <ArrowRight />
                    </TouchableOpacity>
                }
            </View>
            <FlatList
                style={{marginTop: normalize(20), flex: 1, flexGrow: 0}}
                contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}
                data={props.item.contents}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <PracticeItem item={item} onPress={() => props.onPressItem(item)} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            {
                props.item.contents.filter(t => t.isRecommended).map((item, index) => (
                    <RecommendedPracticeItem
                        key={index}
                        item={item}
                        onPress={() => props.onPressItem(item)}
                    />
                ))
            }
        </View>
    )
})

const PracticeItem = memo(props => {
    return (
        <TouchableOpacity style={styles.packItem} onPress={props.onPress}>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                imageStyle={{width: '100%', height: '100%', borderRadius: normalize(10), resizeMode: 'stretch'}}
                source={require('../../assets/images/background1.png')}
            >
                <LinearGradient
                    style={styles.packItemComment}
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                >
                    <Text style={styles.packItemTitle}>{props.item.title}</Text>
                    <Text style={styles.packItemDuration}>{props.item.duration / 60}min</Text>
                </LinearGradient>
                {
                    props.item.isNew &&
                    <View style={styles.newTag}>
                        <Text style={styles.tagTxt}>New</Text>
                    </View>
                }
            </ImageBackground>
        </TouchableOpacity>
    )
})

const RecommendedPracticeItem = memo(props => {
    return (
        <TouchableOpacity style={styles.recommendedItem} onPress={props.onPress}>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: normalize(10)}}
                source={require('../../assets/images/background1.png')}
            >
                <LinearGradient
                    style={styles.packItemComment}
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                >
                    <Text style={styles.packItemTitle}>{props.item.title}</Text>
                    <Text style={styles.packItemDuration}>{props.item.duration / 60}min</Text>
                </LinearGradient>
                <View style={styles.recommendTag}>
                    <Text style={styles.tagTxt}>Recommend</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
})

const ActionPanel = memo(props => {
    return (
        <View style={styles.actionPanel}>
            <View style={[styles.actionBtnPanel, {marginTop: props.isMarginTop ? props.isPlaying ? -normalize(6) : 0 : 0}]}>
                <TouchableOpacity
                    style={styles.sideBtn}
                    activeOpacity={0.75}
                    onPress={props.onReplayAudio}
                >
                    <Restore />
                </TouchableOpacity>
                {
                    props.isPlaying ?
                        <AnimatedCircularProgress
                            style={{marginHorizontal: normalize(4)}}
                            rotation={0}
                            size={normalize(57)}
                            width={normalize(6)}
                            prefill={props.position / props.duration * 100}
                            fill={props.position / props.duration * 100}
                            tintColor={'rgba(94, 92, 230, 0.5)'}
                            tintTransparency={true}
                            easing={Easing.ease}
                            lineCap={'round'}
                            fillLineCap={'round'}
                            backgroundColor={colors.white}
                            children={() => {
                                if (props.playerState === State.Playing)
                                    return <TouchableOpacity
                                        style={styles.pauseBtn}
                                        activeOpacity={0.75}
                                        onPress={props.onPauseAudio}
                                    >
                                        <Pause preserveAspectRatio={'none'} fill={'white'} />
                                    </TouchableOpacity>
                                else
                                    return <TouchableOpacity
                                        style={styles.pauseBtn}
                                        activeOpacity={0.75}
                                        onPress={props.onPlayAudio}
                                    >
                                        <Play preserveAspectRatio={'none'} fill={'white'} />
                                    </TouchableOpacity>
                            }}
                        />
                        :
                        <TouchableOpacity
                            style={styles.playBtn}
                            activeOpacity={0.75}
                            onPress={props.onPlayAudio}
                        >
                            <Play preserveAspectRatio={'none'} fill={'white'} />
                        </TouchableOpacity>
                }
                <TouchableOpacity
                    style={styles.sideBtn}
                    activeOpacity={0.75}
                    onPress={props.setPlayerRepeatMode}
                >
                    {
                        props.currentPlayerRepeatMode === RepeatMode.Off ? <Repeat /> : <Repeaton />
                    }
                </TouchableOpacity>
            </View>
            {
                props.isPlaying && <Text style={styles.timeTxt}>{`${formatTimeTrack(props.position)} / ${formatTimeTrack(props.duration)}`}</Text>
            }
        </View>
    )
})

export class BottomSheetModal extends Component {
    constructor(props) {
        super(props);
        this.bottomSheetRef = React.createRef();
    }
    state = {
        currentPoint: 0
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.currentPoint !== nextState.currentPoint ||
            JSON.stringify(this.props.item) !== JSON.stringify(nextProps.item) ||
            this.props.isPlaying !== nextProps.isPlaying ||
            this.props.position !== nextProps.position ||
            this.props.duration !== nextProps.duration ||
            this.props.playerState !== nextProps.playerState ||
            this.props.currentPlayerRepeatMode !== nextProps.currentPlayerRepeatMode ||
            this.props.contentHeight !== nextProps.contentHeight
    }

    onOpen = () => {
        this.bottomSheetRef.current.snapToIndex(2);
    }
    renderBackdrop = props => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
        />
    )
    onChangeBottomSheetIndex = (index) => {
        LayoutAnimation.configureNext({
            duration: 500,
            create: {type: 'linear', property: 'opacity'},
            update: {type: 'spring', springDamping: 0.4},
            delete: {type: 'linear', property: 'opacity'},
        });
        this.setState({...this.state, currentPoint: index})
        if (this.props.isPlaying && index === -1) this.props.openPlayModal();
        if (index <= 0) this.props.showBottomBar(true);
        else this.props.showBottomBar(false);
    }
    checkPlayState = () => {
        if (this.props.isPlaying) {
            this.bottomSheetRef.current.snapToIndex(0);
            this.props.showBottomBar(true);
        }
    }

    render() {
        return (
            <BottomSheet
                ref={this.bottomSheetRef}
                snapPoints={[normalize(110), '50%', '93%']}
                index={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={{backgroundColor: colors.lightGrey}}
                handleStyle={{marginBottom: this.state.currentPoint === 0 ? normalize(-25) : 0}}
                backdropComponent={this.state.currentPoint > 0 ? this.renderBackdrop : null}
                animatedPosition={this.props.animatedPosition}
                onChange={this.onChangeBottomSheetIndex.bind(this)}
                onClose={this.checkPlayState.bind(this)}
            >
                {
                    this.state.currentPoint === 0 ?
                        <BottomSheetView >
                            <View style={[styles.playModalProgress, {width: `${this.props.position / this.props.duration * 100}%`}]}></View>
                            <View style={styles.playModalPanel}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {
                                        this.props.playerState === State.Playing ?
                                            <TouchableOpacity style={styles.playModalPlayBtn} onPress={this.props.onPauseAudio}>
                                                <Pause24 fill={'white'} />
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.playModalPlayBtn} onPress={this.props.onPlayAudio}>
                                                <Play24 fill={'white'} />
                                            </TouchableOpacity>
                                    }
                                    <View style={{width: '60%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: normalize(10)}}>
                                        <Text style={styles.playModalTitle} numberOfLines={1} ellipsizeMode={'tail'}>{this.props.item.title}</Text>
                                        <Text style={styles.playModalTime}>{`${formatTimeTrack(this.props.position)} / ${formatTimeTrack(this.props.duration)}`}</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity
                                        style={[styles.sideBtn, {width: normalize(26), height: normalize(26), backgroundColor: colors.xLightGrey}]}
                                        onPress={this.props.onReplayAudio}
                                    >
                                        <Restore />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.sideBtn, {width: normalize(26), height: normalize(26), backgroundColor: colors.xLightGrey, marginLeft: normalize(5)}]}>
                                        <Share fill={colors.primaryColor} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </BottomSheetView>
                        :
                        <BottomSheetView style={{height: '100%'}}>
                            <View style={styles.bottomSheetHeader}>
                                <TouchableOpacity>
                                    <Tips fill={'#D9D9D9'} />
                                </TouchableOpacity>
                                {
                                    this.props.item.isRecommended &&
                                    <View style={{
                                        backgroundColor: colors.primaryColor,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingHorizontal: normalize(7),
                                        paddingVertical: normalize(2),
                                        borderRadius: normalize(10),
                                    }}>
                                        <Text style={styles.tagTxt}>Recommend</Text>
                                    </View>
                                }
                                {
                                    this.props.item.isNew &&
                                    <View style={{
                                        backgroundColor: colors.red,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        paddingHorizontal: normalize(15),
                                        paddingVertical: normalize(2),
                                        borderRadius: normalize(10),
                                    }}>
                                        <Text style={styles.tagTxt}>New</Text>
                                    </View>
                                }
                                <TouchableOpacity>
                                    <Share fill={colors.black} />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.bottomSheetBody, {height: this.state.currentPoint === 2 ? '100%' : '50%'}]}>
                                <View style={[styles.bottomSheetBodyUp, {marginTop: this.state.currentPoint === 1 ? 0 : normalize(60)}]}>
                                    <Text style={[styles.bottomSheetBodyTitle, {fontSize: this.state.currentPoint === 1 ? normalize(28) : normalize(32)}]}>{this.props.item.title}</Text>
                                    <Text style={[styles.bottomSheetBodyDesc, {fontSize: this.state.currentPoint === 1 ? normalize(11) : normalize(13)}]} numberOfLines={2} ellipsizeMode={'tail'}>{this.props.item.description}</Text>
                                </View>
                                <View style={[styles.bottomSheetBodyMiddle]}>
                                    <ActionPanel
                                        isMarginTop={false}
                                        isPlaying={this.props.isPlaying}
                                        onPlayAudio={this.props.onPlayAudio}
                                        onPauseAudio={this.props.onPauseAudio}
                                        onReplayAudio={this.props.onReplayAudio}
                                        position={this.props.position}
                                        duration={this.props.duration}
                                        playerState={this.props.playerState}
                                        currentPlayerRepeatMode={this.props.currentPlayerRepeatMode}
                                        setPlayerRepeatMode={this.props.setPlayerRepeatMode}
                                    />
                                </View>
                                <View style={[styles.bottomSheetBodyInfo]}>
                                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={styles.bottomSheetBodyInfoTxt}>{`Author: ${this.props.item.author}`}</Text>
                                        <Text style={styles.bottomSheetBodyInfoTxt}>{`Voice: ${this.props.item.voiceBy}`}</Text>
                                        <Text style={styles.bottomSheetBodyInfoTxt}>{`Music: ${this.props.item.musicBy}`}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={styles.bottomSheetBodyInfoTxt}>{`Video: ${this.props.item.videoBy}`}</Text>
                                        <Text style={[styles.bottomSheetBodyInfoTxt, {marginLeft: normalize(10)}]}>{`Edit: ${this.props.item.editBy}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </BottomSheetView>
                }
            </BottomSheet>
        )
    }
}