import React, {useEffect} from 'react';
import Router from "./src/routes";
import { Platform, StatusBar, UIManager } from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./src/store/reducers";

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
    useEffect(() => {
        StatusBar.setBackgroundColor('transparent', true);
        StatusBar.setTranslucent(true);
    })
    return (
        <Provider store={createStore(reducer)}>
            <Router />
        </Provider>
    );
}