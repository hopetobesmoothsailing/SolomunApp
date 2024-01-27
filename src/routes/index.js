import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionSpecs} from "@react-navigation/stack";
import Affirmation from "../pages/affirmation";
import Events from "../pages/events";
import Practices from "../pages/practices";
import Tarot from "../pages/tarot";
import Tips from "../pages/affirmation/tips";
import PracticePack from '../pages/practices/pack'
import Name from "../pages/data_form/name";
import Birthday from "../pages/data_form/birthday";
import Birthplace from "../pages/data_form/birthplace";
import Feed from "../pages/data_form/feed";
import Nakshatra from "../pages/events/nakshatra";
import Transit_detail from "../pages/events/transit_detail";
import Transit_info from "../pages/events/transit_info";
import MonthlyEvents from "../pages/events/monthly_events";

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'practices'}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={'affirmations'}
                    component={Affirmation}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'events'}
                    component={Events}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'events/nakshatra'}
                    component={Nakshatra}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'events/transit_detail'}
                    component={Transit_detail}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'events/transit_info'}
                    component={Transit_info}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'events/monthly_events'}
                    component={MonthlyEvents}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'practices'}
                    component={Practices}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'tarot'}
                    component={Tarot}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'tips'}
                    component={Tips}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'practice_pack'}
                    component={PracticePack}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'data_form/name'}
                    component={Name}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'data_form/birthday'}
                    component={Birthday}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'data_form/birthplace'}
                    component={Birthplace}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
                <Stack.Screen
                    name={'data_form/feed'}
                    component={Feed}
                    options={{
                        transitionSpec: {
                            open: TransitionSpecs.TransitionIOSSpec,
                            close: TransitionSpecs.TransitionIOSSpec,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router