import React from "react";
import { NativeBaseProvider } from 'native-base';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

 //scren
 //import ListPatient from "./Doctor/ListPatient";
 //import HomeDoctor from "./Doctor/HomeDoctor";
 //import DateDoctor from "./Doctor/DateDoctor";
 //import HomeUser from "./Screen/HomeUser";
 //import ListDoctor from "./Screen/ListDoctor";
 import DateUser from "./components/Screen/DateUser";
 import QuestionSreen from "./components/Screen/QuestionScream";
 import Home from "./components/Screen/HomeSreen";
 import ListDoctor from "./components/Screen/ListDoctor";
 import HomeUser from "./components/Screen/HomeUser";
 import Register from "./components/Register";
 import Login from "./components/Login";
 import ListPatient from "./components/Doctor/ListPatient";
 import HomeDoctor from "./components/Doctor/HomeDoctor";
import DateDoctor from "./components/Doctor/DateDoctor";
import { FontAwesome, Fontisto,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons'; 


 const Tab = createBottomTabNavigator();
 const Stack = createStackNavigator();

 function UserTab(){
  return(
    <Tab.Navigator 
    initialRouteName="User"
    screenOptions={{
      tabBarStyle: {backgroundColor: 'white'},
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
 function DoctorTab(){
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






export default function App(){
  return(
    <NativeBaseProvider >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="UserTab"
        >
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
          name="UserTab"
          component={UserTab}
          options={{
            headerBackVisible: true,
          }}
          />
          <Stack.Screen
          name="DoctorTab"
          component={DoctorTab}
          options={{
            headerBackVisible: true,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
  
}
