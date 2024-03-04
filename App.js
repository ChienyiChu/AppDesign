import React from "./node_modules/react";
import {  StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Header />
      <AlbumList />
      
    </SafeAreaView>
  );
};

export default App;
