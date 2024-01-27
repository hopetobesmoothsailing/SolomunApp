import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import {colors, fontFamilies, fontSizes, fontWeights, formatTimeTrack, normalize, W} from "../../consts/consts";
import Back from "../../assets/icons/back";
import LinearGradient from "react-native-linear-gradient";
import {BottomSheetModal} from "./index";
import TrackPlayer, {RepeatMode, State, usePlaybackState, useProgress} from "react-native-track-player";
import {setupPlayer} from "../../../trackPlayerServices";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import Pause24 from "../../assets/icons/pause24";
import Play24 from "../../assets/icons/play24";
import Restore from "../../assets/icons/restore";
import Share from "../../assets/icons/share";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Pack = memo(props => {
    const [pack, setPack] = useState({});
    const bottomSheetModalRef = useRef(null);
    const playModalRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState({});
    const [isPlaying, setPlaying] = useState(false);
    const [currentPlayerRepeatMode, setCurrentPlayerRepeatMode] = useState(RepeatMode.Off);
    const playerState = usePlaybackState();
    const {position, duration} = useProgress(200);

    useEffect(() => {
        setPack(props.route.params.pack);
    })

    const openPractice = useCallback(async (item) => {
        if (playModalRef.current !== null) playModalRef.current.close();
        if (selectedItem.title !== item.title) {
            await setPlaying(false)
            await initializeAudio(item);
        }
        await setSelectedItem(item);
        if(bottomSheetModalRef.current !== null) bottomSheetModalRef.current.onOpen();
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
    const goBack = () => {
        props.navigation.goBack(null);
        return true;
    }
    const onPlayAudio = async () => {
        if (!isPlaying) await setPlaying(true);
        await TrackPlayer.seekTo(position);
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
    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.header}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.title}>{pack.category}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: -W + normalize(10)}}>
                    <TouchableOpacity style={styles.backBtn} onPress={goBack}>
                        <Back fill={'#5856D6'} />
                        <Text style={styles.backBtnTxt}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={styles.listContainer}
                contentContainerStyle={{paddingBottom: normalize(40)}}
                data={pack.contents}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <PackItem
                        item={item}
                        onPress={() => openPractice(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />
            <BottomSheet
                ref={playModalRef}
                snapPoints={['19%']}
                index={-1}
                enablePanDownToClose={true}
                handleIndicatorStyle={{backgroundColor: colors.lightGrey}}
                handleStyle={{marginBottom: normalize(-25)}}
            >
                <BottomSheetView >
                    <View style={[styles.playModalProgress, {width: `${position / duration * 100}%`}]}></View>
                    <View style={styles.playModalPanel}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {
                                playerState === State.Playing ?
                                    <TouchableOpacity style={styles.playModalPlayBtn} onPress={onPauseAudio}>
                                        <Pause24 fill={'white'} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.playModalPlayBtn} onPress={onPlayAudio}>
                                        <Play24 fill={'white'} />
                                    </TouchableOpacity>
                            }
                            <View style={{width: '60%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: normalize(10)}}>
                                <Text style={styles.playModalTitle} numberOfLines={1} ellipsizeMode={'tail'}>{selectedItem.title}</Text>
                                <Text style={styles.playModalTime}>{`${formatTimeTrack(position)} / ${formatTimeTrack(duration)}`}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity
                                style={[styles.sideBtn, {width: normalize(26), height: normalize(26), backgroundColor: colors.xLightGrey}]}
                                onPress={onReplayAudio}
                            >
                                <Restore />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.sideBtn, {width: normalize(26), height: normalize(26), backgroundColor: colors.xLightGrey, marginLeft: normalize(5)}]}>
                                <Share fill={colors.primaryColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheetView>
            </BottomSheet>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                item={selectedItem}
                isPlaying={isPlaying}
                position={position}
                duration={duration}
                currentPlayerRepeatMode={currentPlayerRepeatMode}
                playerState={playerState}
                onPlayAudio={onPlayAudio}
                onPauseAudio={onPauseAudio}
                onReplayAudio={onReplayAudio}
                setPlayerRepeatMode={setPlayerRepeatMode}
                openPlayModal={openPlayModal}
            />
        </GestureHandlerRootView>
    )
})
export default Pack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: normalize(40),
        paddingBottom: normalize(10),
        paddingHorizontal: normalize(10)
    },
    title: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: 600,
        color: colors.black,
        zIndex: 1
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backBtnTxt: {
        marginLeft: normalize(5),
        fontFamily: fontFamilies.default,
        fontWeight: fontWeights.default,
        fontSize: fontSizes.default,
        color: colors.primaryColor
    },
    panel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(20)
    },
    listContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: normalize(20),
        paddingVertical: normalize(20)
    },
    packItem: {
        flex: 1,
        height: normalize(150),
        borderRadius: normalize(10),
        marginVertical: normalize(10)
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
    tagTxt: {
        fontFamily: fontFamilies.default,
        fontWeight: 600,
        fontSize: normalize(10),
        color: colors.white
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
})

const PackItem = memo(props => {
    return (
        <TouchableOpacity style={styles.packItem} onPress={props.onPress}>
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