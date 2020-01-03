import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import CounterApp from './CounterApp'
import { Provider } from 'react-redux'
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp,watchAgeDown } from "./saga";

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER_ASYNC':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER_ASYNC':
            return { counter: state.counter - 1 }
    }
    return state
}

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);
class Red extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterApp />
            </Provider>
        );
    }
}

export default Red


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});