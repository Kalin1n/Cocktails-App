import React from 'react';
import Header from "./src/header/";
import CocktailsList from "./src/cocktailsList/";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles}>
      <Header/>
      <CocktailsList/>
    </View>
  );
}

const styles = StyleSheet.create({
});
