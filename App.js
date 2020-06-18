import React from 'react';
import Header from "./src/header/";
import CocktailsList from "./src/cocktailsList/";
import thunk from "redux-thunk";
import rootReducer from "./store/reducer";
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(()=> console.log(store.getState()));

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Header/>
        <CocktailsList/>
      </View>
    </Provider>
  );
}

