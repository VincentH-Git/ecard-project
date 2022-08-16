import React, { useEffect, useLayoutEffect, useState } from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity, Pressable, Alert, TouchableWithoutFeedback, SafeAreaView, TextInput, StatusBar, Platform, TouchableNativeFeedback } from "react-native";
import COLORS from "../../conts/colors";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();


const SearchCard = (props: any) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} backgroundColor={COLORS.primaryColor} />
            <View>
               <Text>Search</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   
})


export default SearchCard
