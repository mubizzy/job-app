import { Component, useState } from "react";
import { View,Text } from "react-native";
import { Stack, useRouter} from "expo-router";
import{COLORS,icons,images,SIZES} from '../constants'
import{Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "../components"
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const Home =() =>{
   const router=useRouter();
  return(
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
       options={{headerStyle:{backgroundColor:COLORS.lightWhite},
      headerShadowVisible:false,
      headerLeft:()=>(
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
  ),
      headerRight:()=>(
        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
      ),headerTitle:''}}/>

      <ScrollView showsVerticalScrollIndicator={true}></ScrollView>
       <View style={{flex:1,padding:SIZES.medium}}/>
      <ScrollView/>

    </SafeAreaView>
  )
}

export default Home;