import {
    FlatList,
    ImageBackground, SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, { memo, useCallback, useRef, useState } from "react";
import {BottomBar} from "../../components/bars";
import { colors, fontFamilies, fontWeights, MoonPhases, normalize, W } from "../../consts/consts";
import { MoonPhase } from "../../components/phase";
import LinearGradient from "react-native-linear-gradient";
import Personal from "../../assets/images/events/personal";
import Astro from "../../assets/images/events/astro";
import Capricorn from "../../assets/images/zodiak/Capricorn";
import SmallCapricorn from "../../assets/images/zodiak/SmallCapricorn";
import DailySuggestion from "../../components/daily_suggestion";
import Audio1 from "../../assets/audios/1.m4a";
import Audio2 from "../../assets/audios/2.wav";
import Audio3 from "../../assets/audios/3.wav";
import Tips from "../../assets/icons/tips";
import ZodiakExplainModal from '../events/zodiak_explain'
import zodiak_explain from "../events/zodiak_explain";
import CalendarModal from "../../components/calendar";

const practices = [
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

const categories = ['Эмоции', 'Контакт с собой', 'Отношения', 'Отношения1', 'Отношения2', 'Отношения3'];

const transits = [
    {
        title: 'Солнца в знак Девы',
        time: '16 сентября-17 октября'
    },
    {
        title: 'Ретроградная Венера',
        time: '23 июля - 4 сентября'
    }
]

const Events = memo(props => {
    const [category, setCategory] = useState(categories[0]);
    const [calendarVisible, showCalendar] = useState(false);
    const zodiakExplainModal = useRef();
    const goToAffirmations = () => props.navigation.navigate('affirmations');
    const goToPractices = () => props.navigation.navigate('practices');
    const goToTarot = () => props.navigation.navigate('tarot');
    const changeCategory = useCallback((value) => setCategory(value), []);
    const goToTransitDetail = () => props.navigation.navigate('events/transit_detail');
    const goToTransitInfo = () => props.navigation.navigate('events/transit_info');
    const goToMonthlyEvents = () => props.navigation.navigate('events/monthly_events');
    const openZodiakExplainModal = () => {
        zodiakExplainModal.current.onOpen();
    }
    const toggleCalendar = useCallback((value) => {
        showCalendar(value)
    }, [calendarVisible]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.panel}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: StatusBar.currentHeight,
                    flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                bounces={false}
            >
                <FlatList
                    style={{flex: 1, width: '100%'}}
                    data={[1,2,3]}
                    renderItem={({item}) => (
                        <MoonPhase
                            image={MoonPhases[7].image}
                            color={MoonPhases[7].bgColor}
                            name={MoonPhases[7].name}
                            date={'7 июня'}
                            openCalendar={() => toggleCalendar(true)}
                        />
                    )}
                    keyExtractor={item => item.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                />
                <EventItem
                    navigation={props.navigation}
                    goToTransitDetail={goToTransitDetail}
                    goToMonthlyEvents={goToMonthlyEvents}
                    openZodiakExplainModal={openZodiakExplainModal}
                />
                <View style={styles.practicePanel}>
                    <Text style={styles.practicePanelTitle}>Практики настроя</Text>
                    <FlatList
                        style={styles.categoryPanel}
                        data={categories}
                        contentContainerStyle={{alignItems: 'center'}}
                        keyExtractor={item => item}
                        renderItem={({item}) => (
                            <CategoryItem
                                category={item}
                                isCurrent={item === category}
                                onPress={() => changeCategory(item)}
                            />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <FlatList
                        style={styles.practiceItemPanel}
                        data={practices}
                        keyExtractor={item => item.title}
                        renderItem={({item}) => (
                            <PracticeItem
                                item={item}
                            />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={styles.transitPanel}>
                        <Text style={styles.practicePanelTitle}>Транзиты</Text>
                        <TouchableOpacity
                            style={{justifyContent: 'center', alignItems: 'center'}}
                            onPress={goToTransitInfo}
                        >
                            <Tips fill={colors.primaryColor} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{flex: 1}}
                        data={transits}
                        contentContainerStyle={{paddingHorizontal: normalize(10), paddingVertical: normalize(5)}}
                        keyExtractor={item => item.title}
                        renderItem={({item}) => (
                            <TransitItem item={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
                <CalendarModal
                    visible={calendarVisible}
                    closeCalendar={() => toggleCalendar(false)}
                />
            </ScrollView>
            <BottomBar
                currentTab={'events'}
                goToAffirmations={goToAffirmations}
                goToPractices={goToPractices}
                goToTarot={goToTarot}
            />
            <ZodiakExplainModal ref={zodiakExplainModal} />
        </SafeAreaView>
    )
})
export default Events

const CategoryItem = memo(props => {
    return (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                {
                    backgroundColor: props.isCurrent ? colors.primaryColor : 'white',
                    borderWidth: props.isCurrent ? 0 : normalize(2),
                    borderColor: props.isCurrent ? colors.primaryColor : 'rgba(235, 235, 245, 0.60)'
                }]}
            onPress={props.onPress}
        >
            <Text style={[styles.categoryTxt, {color: props.isCurrent ? 'white' : colors.blackWithAlpha75}]}>{props.category}</Text>
        </TouchableOpacity>
    )
})

const PracticeItem = memo(props => {
    return (
        <TouchableOpacity style={styles.practiceItem}>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                imageStyle={{width: '100%', height: '100%', borderRadius: normalize(10), resizeMode: 'stretch'}}
                source={require('../../assets/images/background1.png')}
            >
                <LinearGradient
                    style={styles.practiceItemComment}
                    colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                >
                    <Text style={styles.practiceItemTitle}>{props.item.title}</Text>
                    <Text style={styles.practiceItemDuration}>{props.item.duration / 60} мин</Text>
                </LinearGradient>
                {
                    props.item.isNew &&
                    <View style={styles.newTag}>
                        <Text style={styles.tagTxt}>New</Text>
                    </View>
                }
                {
                    props.item.isRecommended &&
                    <View style={styles.recommendTag}>
                        <Text style={styles.tagTxt}>Recommended</Text>
                    </View>
                }
            </ImageBackground>
        </TouchableOpacity>
    )
})

const TransitItem = memo(props => {
    return (
        <View style={styles.transitItem}>
            <Text style={styles.transitItemTitle}>{props.item.title}</Text>
            <Text style={styles.transitItemTime}>{props.item.time}</Text>
        </View>
    )
})

const EventItem = memo(props => {
    return (
        <View style={{flex: 1, width: W}}>
            <View style={styles.eventsPanel}>
                <TouchableOpacity
                    style={styles.personalTransits}
                    onPress={props.goToTransitDetail}
                >
                    <LinearGradient
                        style={styles.internalPersonal}
                        colors={['#FDC9C9', '#FEE4E4']}
                        useAngle={true}
                        angle={45}
                    >
                        <Personal style={{marginTop: normalize(10)}} />
                        <Text style={styles.personalTransitsTxt}>Личные транзиты</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.astroEvents}
                    onPress={props.goToMonthlyEvents}
                >
                    <LinearGradient
                        style={styles.internalAstro}
                        colors={['#D0DCFF', '#E3E8FF']}
                        useAngle={true}
                        angle={45}
                    >
                        <Astro style={{marginTop: normalize(10)}} />
                        <Text style={styles.astroEventsTxt}>Астрособытия</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{width: '100%', paddingHorizontal: normalize(15), marginBottom: normalize(20)}}
                onPress={props.openZodiakExplainModal}
            >
                <LinearGradient
                    style={styles.zodiakPanel}
                    colors={['#FFECA8', '#FDF2C9', 'rgba(253, 242, 201, 0.40)']}
                    useAngle={true}
                    angle={33}
                >
                    <Text style={styles.zodiakTxt}>Луна в Козероге</Text>
                    <SmallCapricorn />
                </LinearGradient>
            </TouchableOpacity>
            <DailySuggestion navigation={props.navigation} />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    panel: {
        flex: 1,
        width: '100%',
        paddingTop: StatusBar.currentHeight
    },
    eventsPanel: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(15),
        marginTop: normalize(10)
    },
    personalTransits: {
        height: normalize(131),
        width: '48.5%',
        borderRadius: normalize(17),
        borderWidth: normalize(2),
        borderColor: '#5856D6',
        padding: normalize(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    internalPersonal: {
        width: '100%',
        height: '100%',
        borderRadius: normalize(15),
        padding: normalize(10),
        alignItems: 'center'
    },
    personalTransitsTxt: {
        position: 'absolute',
        bottom: normalize(10),
        left: normalize(10),
        color: '#B77070',
        fontFamily: fontFamilies.default,
        fontWeight: '600',
        fontSize: normalize(13),
        lineHeight: normalize(18)
    },
    astroEvents: {
        height: normalize(131),
        width: '48.5%',
        borderRadius: normalize(17),
        borderWidth: normalize(2),
        borderColor: '#AF52DE',
        padding: normalize(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    internalAstro: {
        width: '100%',
        height: '100%',
        borderRadius: normalize(15),
        padding: normalize(10),
        alignItems: 'center'
    },
    astroEventsTxt: {
        position: 'absolute',
        bottom: normalize(10),
        left: normalize(10),
        color: '#7091B7',
        fontFamily: fontFamilies.default,
        fontWeight: '600',
        fontSize: normalize(13),
        lineHeight: normalize(18)
    },
    zodiakPanel: {
        width: '100%',
        marginVertical: normalize(20),
        borderRadius: normalize(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: normalize(10)
    },
    zodiakTxt: {
        color: '#B79B70',
        fontFamily: fontFamilies.default,
        fontWeight: '600',
        fontSize: normalize(13),
        lineHeight: normalize(18),
    },
    practicePanel: {
        flex: 1,
        width: '100%',
        paddingVertical: normalize(20),
        paddingLeft: normalize(15),
        marginTop: normalize(-17),
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        borderTopLeftRadius: normalize(17),
        borderTopRightRadius: normalize(17)
    },
    practicePanelTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(20),
        fontWeight: fontWeights.bold,
        color: colors.black,
        lineHeight: normalize(25)
    },
    categoryPanel: {
        flexGrow: 0,
        marginVertical: normalize(15),
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
    practiceItemPanel: {
        flexGrow: 0,
        marginBottom: normalize(20)
    },
    practiceItem: {
        width: normalize(150),
        height: normalize(150),
        borderRadius: normalize(10),
        marginHorizontal: normalize(7),
        borderColor: 'rgba(235, 235, 245, 0.60)',
        borderWidth: normalize(2)
    },
    practiceItemComment: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: normalize(10),
        paddingHorizontal: normalize(10),
        borderBottomLeftRadius: normalize(10),
        borderBottomRightRadius: normalize(10),
    },
    practiceItemTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: fontWeights.bold,
        color: colors.black
    },
    practiceItemDuration: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(12),
        fontWeight: fontWeights.default,
        color: colors.grey,
        marginTop: normalize(5)
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
    tagTxt: {
        fontFamily: fontFamilies.default,
        fontWeight: 600,
        fontSize: normalize(10),
        color: colors.white
    },
    transitPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: normalize(15),
        marginTop: normalize(10)
    },
    transitItem: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: normalize(10)
    },
    transitItemTitle: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(15),
        fontWeight: '600',
        lineHeight: normalize(20),
        color: colors.black
    },
    transitItemTime: {
        fontFamily: fontFamilies.default,
        fontSize: normalize(12),
        fontWeight: '500',
        lineHeight: normalize(16),
        color: colors.primaryColor,
        marginTop: normalize(5)
    }
})