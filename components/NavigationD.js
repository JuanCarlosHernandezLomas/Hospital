
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
 //scren
import ListPatient from "./Doctor/ListPatient";
import HomeDoctor from "./Doctor/HomeDoctor";
import DateDoctor from "./Doctor/DateDoctor";
 import { FontAwesome, Fontisto,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons'; 



 const Tab = createBottomTabNavigator();

 function MyTabs(){
  return(
    <Tab.Navigator 
    initialRouteName="User"
    screenOptions={{
      tabBarStyle: {backgroundColor: 'white'},
      tabBarActiveTintColor: '#5cceee',
    }}>
      <Tab.Screen 
      name="Date" 
      component={DateDoctor}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="date" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Patients" 
      component={ListPatient}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="doctor" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen  
      name="User" 
      component={HomeDoctor}
      options={
      {
        tabBarIcon:({})=>(
          <FontAwesome name="user" size={24} color="black" />
          
        ),headerShown: false,
      }}/>
    </Tab.Navigator>
  );
 }

 export default function NavegationD(){
  return(
    <NavigationContainer >
      <MyTabs/>
    </NavigationContainer>
  )
 }