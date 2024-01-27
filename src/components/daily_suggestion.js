import {
	Image,
	LayoutAnimation, Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import { memo, useCallback, useState } from "react";
import { colors, fontFamilies, fontWeights, normalize } from "../consts/consts";
import LinearGradient from "react-native-linear-gradient";
import Tips from "../assets/icons/tips";
import Jupiter from "../assets/images/planets/Jupiter.png";
import ToggleStick from "./toggle_stick";

const DailySuggestion = memo(props => {
	const [key, setKey] = useState('nakshatra');
	const [isNakshatraExpanded, setNakshatraExpand] = useState(false);
	const [isMoonExpanded, setMoonExpanded] = useState(false);
	const toggleNakshatraExpand = useCallback(() => {
		setNakshatraExpand(!isNakshatraExpanded);
		LayoutAnimation.configureNext({
			duration: 300,
			create: { type: "linear", property: "opacity" },
			update: { type: "spring", springDamping: 0.4 },
			delete: { type: "linear", property: "opacity" }
		});
	}, [isNakshatraExpanded]);
	const toggleMoonExpand = useCallback(() => {
		setMoonExpanded(!isMoonExpanded)
		LayoutAnimation.configureNext({
			duration: 300,
			create: { type: "linear", property: "opacity" },
			update: { type: "spring", springDamping: 0.4 },
			delete: { type: "linear", property: "opacity" }
		});
	}, [isMoonExpanded])
	const goToNakshatra = () => props.navigation.navigate("events/nakshatra");

	const Nakshatra = () => (
		<LinearGradient
			style={styles.panel}
			colors={["#FFF", "#ECB6FA"]}
			useAngle={true}
			angle={250}
		>
			<View style={[styles.upPanel, { opacity: !isNakshatraExpanded ? 0.6 : 1 }]}>
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
					<Image source={require('../assets/images/nakshatra.png')} style={{width: normalize(20), height: normalize(22), resizeMode: 'contain'}} />
					<Text style={styles.title}>Накшатра Джйештха</Text>
					<TouchableOpacity
						style={{ marginLeft: normalize(5), justifyContent: "center", alignItems: "center" }}>
						<Tips fill={"#90579E"} />
					</TouchableOpacity>
				</View>
				<View style={{ width: "100%", alignItems: "flex-end" }}>
					<Text style={styles.time}> до 2 августа 10:28</Text>
				</View>
				<View style={{ width: "100%", marginTop: normalize(10) }}>
					<Text style={styles.comment} numberOfLines={isNakshatraExpanded ? undefined : 2}>
						Ассоциируется с Индрой, богом войны и погоды и имеет боевой и целеустремленный характер. Учит
						искусству
						управления и контроля над окружающим миром и своими внутренними процессами. Помогает обрести
						уверенность в
						себе и может стать мощным катализаторов в личных и профессиональных вопросах. Избегайте контроля
						над другими
						через доминирование, уныния и гордыни. Возможна поддержка со стороны людей, наделенных
						авторитетом и
						властью.
					</Text>
				</View>
			</View>
			<ToggleStick color={"#90579E"} onPress={toggleNakshatraExpand} expanded={isNakshatraExpanded} />
			<View style={styles.downPanel}>
				<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
					<Image source={require('../assets/images/nakshatra.png')} style={{width: normalize(20), height: normalize(22), resizeMode: 'contain'}} />
					<Text style={styles.title}>Накшатра Анурадха</Text>
					<TouchableOpacity
						style={{ marginLeft: normalize(5), justifyContent: "center", alignItems: "center" }}
						onPress={goToNakshatra}
					>
						<Tips fill={"#90579E"} />
					</TouchableOpacity>
				</View>
				<View style={{ width: "100%", alignItems: "flex-end" }}>
					<Text style={styles.time}> до 3 августа 07:25</Text>
				</View>
				<View style={{ width: "100%", marginTop: normalize(10) }}>
					<Text style={styles.comment}>
						Управляется Митрой, богом дружбы и сотрудничества. Учит выстраивать отношения на основании
						понимания,
						взаимопомощи и миролюбивости. Наделяет отличной чувствительностью, при этом сохраняя разумность
						и логический
						подход к решаемым задачам. Отличное время для командной работы, переговоров и встреч.
						Исследовательская и
						посредническая деятельность, путешествия. Могут проявляться раздражение и вспышки агрессии,
						будьте терпимее.
						Пробуждает интерес к оккультным наукам.
					</Text>
				</View>
			</View>
		</LinearGradient>
	);

	const Moon = () => (
		<LinearGradient
			style={styles.panel}
			colors={["#FFF", "#FC8B8B"]}
			useAngle={true}
			angle={239}
		>
			<View style={[styles.upPanel, { opacity: !isMoonExpanded ? 0.6 : 1 }]}>
				<View style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				}}>
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
						<View style={styles.order}>
							<Text style={styles.orderTxt}>1</Text>
						</View>
						<Text style={[styles.title, { color: "#B77070" }]}>Шукла Пратипад</Text>
					</View>
					<Text style={styles.time}> до 2 августа 10:28</Text>
				</View>
				<View style={{ width: "100%", marginTop: normalize(10) }}>
					<Text style={[styles.comment, { color: "#B77070" }]}
						  numberOfLines={isMoonExpanded ? undefined : 2}>
						Хороший день для любой созидательной деятельности. Подходит для планирования, поездок, начала
						небольших
						путешествий, реализации задуманного (если не требует больших энергозатрат). Устраивайте активные
						праздники,
						развлечения, игры. Отличная возможность приступить к воплощению своих задумок. Отличная
						возможность
						воплотить свои мечты в реальность.
					</Text>
				</View>
			</View>
			<ToggleStick color={"#B77070"} onPress={toggleMoonExpand} expanded={isMoonExpanded} />
			<View style={styles.downPanel}>
				<View style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				}}>
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
						<View style={styles.order}>
							<Text style={styles.orderTxt}>2</Text>
						</View>
						<Text style={[styles.title, { color: "#B77070" }]}>Шукла Двитья</Text>
					</View>
					<Text style={styles.time}> до 3 августа 07:25</Text>
				</View>
				<View style={{ width: "100%", marginTop: normalize(10) }}>
					<Text style={[styles.comment, { color: "#B77070" }]}>
						День приносит благосостояние, успех, обладание чем-либо. Подходит для общения, покупок, поездок,
						важных
						действий и начинаний. Сегодня легко найти общий язык с окружающими. Отложите конфликты и
						соревнования.
						Планируйте и принимайте решения в паре или команде.
					</Text>
				</View>
			</View>
		</LinearGradient>
	);

	const Planet = () => (
		<LinearGradient
			style={styles.panel}
			colors={["#FFF", "#B6C5FA"]}
			useAngle={true}
			angle={196}
		>
			<View style={styles.upPanel}>
				<View style={{
					width: "100%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				}}>
					<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
						<Image source={Jupiter} style={styles.planet} />
						<Text style={[styles.title, { color: "#7091B7" }]}>Шукла Пратипад</Text>
					</View>
					<Text style={styles.time}>Четверг</Text>
				</View>
				<View style={{ width: "100%", marginTop: normalize(10) }}>
					<Text style={[styles.comment, { color: "#7091B7" }]}>
						Хороший день для любой созидательной деятельности. Подходит для планирования, поездок, начала
						небольших
						путешествий, реализации задуманного (если не требует больших энергозатрат). Устраивайте активные
						праздники,
						развлечения, игры. Отличная возможность приступить к воплощению своих задумок. Отличная
						возможность
						воплотить свои мечты в реальность.
					</Text>
				</View>
			</View>
		</LinearGradient>
	);
	const changeScene = useCallback((value) => setKey(value), []);

	return (
		<View style={styles.container}>
			<View style={styles.tabBarPanel}>
				<Pressable
					style={[styles.tabBarItem, {backgroundColor: key === 'nakshatra' ? 'white' : 'transparent'}]}
					onPress={() => changeScene('nakshatra')}
				>
					<Text style={[styles.tabBarLabel, {fontWeight: key === 'nakshatra' ? fontWeights.bold : fontWeights.default}]}>Накшатра</Text>
				</Pressable>
				<Pressable
					style={[styles.tabBarItem, {backgroundColor: key === 'moon' ? 'white' : 'transparent'}]}
					onPress={() => changeScene('moon')}
				>
					<Text style={[styles.tabBarLabel, {fontWeight: key === 'moon' ? fontWeights.bold : fontWeights.default}]}>Лунный день</Text>
				</Pressable>
				<Pressable
					style={[styles.tabBarItem, {backgroundColor: key === 'planet' ? 'white' : 'transparent'}]}
					onPress={() => changeScene('planet')}
				>
					<Text style={[styles.tabBarLabel, {fontWeight: key === 'planet' ? fontWeights.bold : fontWeights.default}]}>Планета дня</Text>
				</Pressable>
			</View>
			{
				key === 'nakshatra' ?
					<Nakshatra/>
					: key === 'moon' ?
						<Moon/>
					: <Planet/>
			}
		</View>
	);
});
export default DailySuggestion;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabBarPanel: {
		width: '85%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(235, 235, 245, 0.30)',
		borderRadius: normalize(15),
		padding: normalize(3),
		marginBottom: normalize(5)
	},
	tabBarItem: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '33%',
		borderRadius: normalize(15),
		paddingVertical: normalize(10),
	},
	tabBarLabel: {
		fontFamily: fontFamilies.default,
		fontSize: normalize(13),
		fontWeight: fontWeights.default,
		lineHeight: normalize(18),
		color: colors.black
	},
	panel: {
		width: "100%",
		borderTopRightRadius: normalize(17),
		borderTopLeftRadius: normalize(17),
		paddingTop: normalize(20),
		paddingBottom: normalize(40),
		paddingHorizontal: normalize(20),
		justifyContent: "center",
		alignItems: "center",
	},
	upPanel: {
		width: "100%",
		justifyContent: "center",
		alignItems: "flex-start"
	},
	downPanel: {
		width: "100%",
		justifyContent: "center",
		alignItems: "flex-start",
		marginTop: normalize(20)
	},
	title: {
		fontFamily: fontFamilies.default,
		fontSize: normalize(17),
		fontWeight: fontWeights.bold,
		color: "#90579E",
		lineHeight: normalize(22),
		marginLeft: normalize(10)
	},
	time: {
		fontFamily: fontFamilies.default,
		fontSize: normalize(12),
		fontWeight: fontWeights.default,
		color: colors.grey,
		lineHeight: normalize(16)
	},
	comment: {
		fontFamily: fontFamilies.default,
		fontSize: normalize(12),
		fontWeight: "500",
		color: "#90579E",
		lineHeight: normalize(16)
	},
	order: {
		backgroundColor: "#5856D6",
		width: normalize(20),
		height: normalize(20),
		borderRadius: normalize(20),
		justifyContent: "center",
		alignItems: "center",
		marginRight: normalize(10)
	},
	orderTxt: {
		fontFamily: fontFamilies.default,
		fontSize: normalize(13),
		fontWeight: fontWeights.bold,
		color: colors.white,
		lineHeight: normalize(18)
	},
	planet: {
		width: normalize(22),
		height: normalize(22),
		resizeMode: "contain",
		marginRight: normalize(10)
	}
});