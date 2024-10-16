import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";


import {
  Montserrat_600SemiBold
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function Home({ navigation }) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Montserrat_600SemiBold
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container}  onLayout={onLayoutRootView}>
      <Image style={styles.intro} source={require('../assets/intro.png')} />
       <TouchableOpacity style={styles.localizacao} onPress={() => navigation.navigate('Local')}> 
       <Text style={styles.texto}> Localização </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.camera} onPress={() => navigation.navigate('Camera')}> 
       <Text style={styles.texto2}> Câmera </Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#fff',
  },
  intro:{
     width: '100%',
     height: 500,
  },
  localizacao:{
    width: 300,
    height: 80,
    backgroundColor: '#023274',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  texto: {
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#5bdfe4',
  },
  camera:{
    width: 300,
    height: 80,
    backgroundColor: '#df0e8b',
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto2: {
    fontSize: 30,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#fe83ce',
  },
});