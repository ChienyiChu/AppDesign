import React from "react";
import {  StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
                  <Image style={styles.image} source = {{uri:'https://i.pinimg.com/originals/22/2a/02/222a02c64a27d1ca2de0acd2634ce1a0.jpg'}}/>
      </View>
        );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 60,
    marginTop: 0,
  },
});

export default Header;