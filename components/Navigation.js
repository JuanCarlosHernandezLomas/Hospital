
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
 //scren
 import HomeUser from "./Screen/HomeUser";
import ListDoctor from "./Screen/ListDoctor";
import DateUser from "./Screen/DateUser";
import QuestionSreen from "./Screen/QuestionScream";
import Home from "./Screen/HomeSreen";
 import { FontAwesome, Fontisto,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons'; 



 const Tab = createBottomTabNavigator();

 function MyTabs(){
  return(
    <Tab.Navigator 
    initialRouteName="User"
    screenOptions={{
      tabBarStyle: {backgroundColor: '#f1ebeb'},
      tabBarActiveTintColor: '#5cceee',
    }}>
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon:({})=>(
          <FontAwesome5 name="home" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Date" 
      component={DateUser}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="date" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Doctors" 
      component={ListDoctor}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="doctor" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Queston" 
      component={QuestionSreen}
      options={{
        tabBarIcon:({})=>(
          <MaterialCommunityIcons name="chat-question-outline" size={24} color="black" />
        ),
        tabBarBadge: 5,
        headerShown: false,
      }}/>
        <Tab.Screen  
      name="User" 
      component={HomeUser}
      options={
      {
        tabBarIcon:({})=>(
          <FontAwesome name="user" size={24} color="black" />
          
        ),headerShown: false,
      }}/>
    </Tab.Navigator>
  );
 }

 export default function Navegation(){
  return(
    <NavigationContainer >
      <MyTabs/>
    </NavigationContainer>
  )
 }