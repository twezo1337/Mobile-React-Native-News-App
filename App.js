import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Navigation } from "./screens/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
    flex: 1,
  },
});