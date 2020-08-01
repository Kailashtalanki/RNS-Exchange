import React from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Image,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1.2}
      style={styles.background}
      source={require("../assets/background-1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/blue-logo.png")}
        />
        <Text style={styles.tagLine}>Exchange/Sell What's Not Needed!</Text>
        <Image
          style={styles.exchange}
          source={require("../assets/exchange.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  exchange: {
    marginTop: 70,
    width: 400,
    height: 150,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 22,
    fontWeight: "900",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
