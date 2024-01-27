import {
    // Animated,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList,
    Alert,
    Share,
    ImageBackground,
    ActivityIndicator, Easing, SafeAreaView
} from "react-native";
import * as Animatable from 'react-native-animatable';
import Animated from 'react-native-reanimated'
import {memo, useCallback, useEffect, useRef, useState} from "react";
import {withAnchorPoint} from "react-native-anchor-point";
import {BottomBar} from "../../components/bars";
import TipsIcon from "../../assets/icons/tips";
import ShareIcon from "../../assets/icons/share";
import {colors, fontFamilies, fontSizes, fontWeights, formatTimeTrack, normalize} from "../../consts/consts";
import Restore from "../../assets/icons/restore";
import Repeat from "../../assets/icons/repeat";
import Play from "../../assets/icons/play";
import Audio1 from '../../assets/audios/1.m4a'
import Audio2 from '../../assets/audios/2.wav'
import Audio3 from '../../assets/audios/3.wav'
import TrackPlayer, {RepeatMode, State, usePlaybackState, useProgress} from "react-native-track-player";
import {setupPlayer} from "../../../trackPlayerServices";
import Pause from "../../assets/icons/pause";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import Repeaton from "../../assets/icons/repeaton";
import ListIcon from '../../assets/icons/list'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, {BottomSheetBackdrop, BottomSheetFlatList, BottomSheetView} from "@gorhom/bottom-sheet";

const Affirmation = memo(props => {
    const [contents, setContents] = useState([
        {
            title: 'I forgive myself for not being perfect',
            category: 'Affirmation of the day',
            background: require('../../assets/images/background1.png'),
            audio: {
                id: 1,
                url: Audio1,
                title: 'Affirmation of the day',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'My relationship with my body is perfect harmony!',
            category: 'Contact with myself',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 2,
                url: Audio2,
                title: 'Contact with myself',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'Relaxation',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 3,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'Reloading',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 4,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'I know myself',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 5,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'Today is the best day',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 6,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'Sun',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 7,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'I am accepting myself',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenuItem',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem1',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem2',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem3',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem4',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem5',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem6',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem7',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem8',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
        {
            title: 'Relations!',
            category: 'MenutItem9',
            background: require('../../assets/images/background2.png'),
            audio: {
                id: 8,
                url: Audio3,
                title: 'Relations',
                artist: 'Max Vidishev',
                artwork: require('../../assets/images/music.png')
            }
        },
    ]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [currentPlayerRepeatMode, setCurrentPlayerRepeatMode] = useState(RepeatMode.Off);
    const [isPlaying, setPlaying] = useState(false);
    const [timer, setTimer] = useState(0);
    const [tipAniVal] = useState(new Animated.Value(1));
    const playerState = usePlaybackState();
    const {position, buffered, duration} = useProgress(200);

    const titleRef = useRef(null);
    const bottomSheetRef = useRef(null);

    useEffect(() => {
        setCurrentCategory(contents[0]);
        initializeAudio().then();
        props.navigation.addListener('focus', init);
        return () => {
            clearTimeout(timer)
        }
    }, []);

    const init = async () => {
        tipAniVal.setValue(1);
        setTimer(setTimeout(() => {
            Animated.spring(tipAniVal,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }, 3000));
    }

    const getTransform = () => {
        const transform = {
            transform: [{scaleX: tipAniVal}]
        };
        return withAnchorPoint(transform, {x: 0, y: 0.5}, {width: normalize(60), height: normalize(20)});
    }

    const initializeAudio = async () => {
        const isSetup = await setupPlayer();
        const queue = await TrackPlayer.getQueue();
        if (isSetup) {
            if (queue.length <= 0) {
                await TrackPlayer.add(contents.reduce((acc, cur) => [...acc, cur.audio], []));
            } else {
                await TrackPlayer.reset();
                await TrackPlayer.add(contents.reduce((acc, cur) => [...acc, cur.audio], []));
            }
        } else {
            console.log('Track Player is not set up');
        }
    }

    const goToEvents = () => props.navigation.navigate('events');
    const goToPractices = () => props.navigation.navigate('practices');
    const goToTarot = () => props.navigation.navigate('tarot');
    const goToTips = () => props.navigation.navigate('tips');
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
    };
    const changeCategory = useCallback(async (item) => {
        bottomSheetRef.current.close();
        const index = contents.findIndex(t => t.category === item.category);
        await TrackPlayer.pause();
        await TrackPlayer.skip(index);
        await setPlaying(false);
        setCurrentCategory(item);
        titleRef.current.animate({0: {scale: 0.8}, 1: {scale: 1}});
    }, [currentCategory]);
    const onPlayAudio = async () => {
        // const index = contents.findIndex(t => t.category === currentCategory.category);
        // await TrackPlayer.skip(index);
        // await TrackPlayer.seekTo(position);
        await TrackPlayer.play();
        await setPlaying(true);
    }
    const onPauseAudio = async () => {
        await TrackPlayer.pause();
    }
    const onReplayAudio = async () => {
        await TrackPlayer.pause();
        const index = contents.findIndex(t => t.category === currentCategory.category);
        await TrackPlayer.skip(index);
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
    })

    const renderBackdrop = props => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
        />
    )

    if (Object.keys(currentCategory).length === 0) {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={normalize(40)} color={colors.primaryColor} animating={Object.keys(currentCategory).length === 0} />
                </View>
                <BottomBar
                    currentTab={'affirmations'}
                    goToEvents={goToEvents}
                    goToPractices={goToPractices}
                    goToTarot={goToTarot}
                />
            </View>
        )
    }
    return (
        <GestureHandlerRootView style={styles.container}>
            <ImageBackground style={styles.panel} source={currentCategory.background}>
                <View style={styles.panelHeader}>
                    <TouchableOpacity
                        style={styles.tipBtn}
                        onPress={goToTips}
                    >
                        <TipsIcon fill={colors.blackWithAlpha75} />
                        <Animated.View style={[getTransform(), {marginLeft: normalize(10), justifyContent: 'center', alignItems: 'flex-start'}]}>
                            <Text style={styles.tipTxt}>Practice tips</Text>
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tipBtn}
                        onPress={onShare}
                    >
                        <ShareIcon />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Animatable.Text ref={titleRef} animation={{0: {scale: 0.8}, 1: {scale: 1}}} useNativeDriver={true} style={styles.title}>
                        {currentCategory.title}
                    </Animatable.Text>
                    <View style={styles.actionPanel}>
                        <View style={[styles.actionBtnPanel, {marginBottom: isPlaying ? 0 : normalize(6)}]}>
                            <TouchableOpacity
                                style={styles.sideBtn}
                                activeOpacity={0.75}
                                onPress={onReplayAudio}
                            >
                                <Restore />
                            </TouchableOpacity>
                            {
                                isPlaying ?
                                    <AnimatedCircularProgress
                                        style={{marginHorizontal: normalize(4)}}
                                        rotation={0}
                                        size={normalize(57)}
                                        width={normalize(6)}
                                        prefill={position / duration * 100}
                                        fill={position / duration * 100}
                                        tintColor={'rgba(94, 92, 230, 0.5)'}
                                        tintTransparency={true}
                                        easing={Easing.ease}
                                        lineCap={'round'}
                                        fillLineCap={'round'}
                                        backgroundColor={colors.white}
                                        children={() => {
                                            if (playerState === State.Playing)
                                                return <TouchableOpacity
                                                    style={styles.pauseBtn}
                                                    activeOpacity={0.75}
                                                    onPress={onPauseAudio}
                                                >
                                                    <Pause preserveAspectRatio={'none'} fill={'white'} />
                                                </TouchableOpacity>
                                            else
                                                return <TouchableOpacity
                                                    style={styles.pauseBtn}
                                                    activeOpacity={0.75}
                                                    onPress={onPlayAudio}
                                                >
                                                    <Play preserveAspectRatio={'none'} fill={'white'} />
                                                </TouchableOpacity>
                                        }}
                                    />
                                    :
                                    <TouchableOpacity
                                        style={styles.playBtn}
                                        activeOpacity={0.75}
                                        onPress={onPlayAudio}
                                    >
                                        <Play preserveAspectRatio={'none'} fill={'white'} />
                                    </TouchableOpacity>
                            }
                            <TouchableOpacity
                                style={styles.sideBtn}
                                activeOpacity={0.75}
                                onPress={setPlayerRepeatMode}
                            >
                                {
                                    currentPlayerRepeatMode === RepeatMode.Off ? <Repeat /> : <Repeaton />
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            isPlaying && <Text style={styles.timeTxt}>{`${formatTimeTrack(position)} / ${formatTimeTrack(duration)}`}</Text>
                        }
                    </View>
                </View>
                <FlatList
                    style={styles.categoryPanel}
                    contentContainerStyle={{paddingHorizontal: normalize(10), alignItems: 'center'}}
                    data={contents}
                    keyExtractor={item => item.category}
                    renderItem={({item}) => (
                        <AffirmationCategoryItem
                            category={item.category}
                            isCurrent={currentCategory.category === item.category}
                            onPress={() => changeCategory(item)}
                        />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                        <TouchableOpacity
                            style={[styles.categoryItem, {backgroundColor: 'white'}]}
                            onPress={() => bottomSheetRef.current.snapToIndex(0)}
                        >
                            <ListIcon />
                        </TouchableOpacity>
                    }
                />
            </ImageBackground>
            <BottomBar
                currentTab={'affirmations'}
                goToEvents={goToEvents}
                goToPractices={goToPractices}
                goToTarot={goToTarot}
            />
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={['50%', '93%']}
                handleIndicatorStyle={{backgroundColor: colors.lightGrey}}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                backgroundStyle={{backgroundColor: colors.whiteWithAlpha95}}
                onChange={(index) => console.log(index)}
            >
                <View style={styles.bottomSheetContainer}>
                    <Text style={styles.bottomSheetTitle}>Affirmations list</Text>
                    <BottomSheetFlatList
                        data={contents}
                        keyExtractor={item => item.category}
                        renderItem={({item}) => (
                            <BottomSheetCategoryItem item={item} onPress={() => changeCategory(item)} />
                        )}
                        contentContainerStyle={{paddingBottom: normalize(15)}}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </BottomSheet>
        </GestureHandlerRootView>
    )
})

export default Affirmation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    panel: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    panelHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: normalize(50),
        paddingHorizontal: normalize(10)
    },
    tipBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: normalize(5)
    },
    tipTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(13),
        fontWeight: fontWeights.default,
        color: colors.blackWithAlpha75,
    },
    categoryPanel: {
        flexGrow: 0,
        marginBottom: normalize(20),
    },
    categoryItem: {
        height: normalize(30),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(15),
        borderRadius: normalize(30),
        backgroundColor: colors.primaryColor,
        marginHorizontal: normalize(5),
    },
    categoryTxt: {
        fontFamily: fontFamilies.default,
        fontSize: fontSizes.default,
        fontWeight: fontWeights.default,
        color: 'white'
    },
    title: {
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.xxLarge,
        color: colors.black,
        textAlign: 'center',
        marginHorizontal: normalize(10),
        marginTop: normalize(50)
    },
    actionPanel: {
        position: 'absolute',
        bottom: normalize(55),
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
    bottomSheetContainer: {
        height: '100%',
        marginBottom: normalize(530),
        // backgroundBlendMode: 'hard-light',
        paddingHorizontal: normalize(15)
    },
    bottomSheetTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: 600,
        color: colors.grey,
        marginVertical: normalize(10),
    },
    bottomSheetItem: {
        width: '100%',
        marginVertical: normalize(5)
    },
    bottomSheetItemTxt: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(18),
        fontWeight: 700,
        color: colors.black,
    },
})

const AffirmationCategoryItem = memo(props => {
    return (
        <TouchableOpacity
            style={[styles.categoryItem, {backgroundColor: props.isCurrent ? colors.primaryColor : 'white'}]}
            onPress={props.onPress}
        >
            <Text style={[styles.categoryTxt, {color: props.isCurrent ? 'white' : colors.blackWithAlpha75}]}>{props.category}</Text>
        </TouchableOpacity>
    )
})

const BottomSheetCategoryItem = memo(props => {
    return (
        <TouchableOpacity style={styles.bottomSheetItem} onPress={props.onPress}>
            <Text style={styles.bottomSheetItemTxt}>{props.item.category}</Text>
        </TouchableOpacity>
    )
})