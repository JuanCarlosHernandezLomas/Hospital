import React from "react";
import { NativeBaseProvider } from 'native-base';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

 //scren
 import CreateUser from "./components/Screen/CreateUser";
 import EditUser from "./components/Screen/EditUser";
 import DateUser from "./components/Screen/DateUser";
 import QuestionSreen from "./components/Screen/QuestionScream";
 import Home from "./components/Screen/HomeScreen";
 import ListDoctor from "./components/Screen/ListDoctor";
 import HomeUser from "./components/Screen/HomeUser";
 import ShowDate from "./components/Screen/ShowDate";
 import Register from "./components/auth/Register";
 import Login from "./components/auth/Login";
 import ChangePassword from "./components/auth/ChangePaassword";
 import ListPatient from "./components/Doctor/ListPatient";
 import HomeDoctor from "./components/Doctor/HomeDoctor";
import CreateHistorial from "./components/Doctor/CreateHistorial";
import CreateDoctor from "./components/Doctor/CreateDoctor";
import Viewhistory from "./components/Doctor/Viewhistory";
import DoctorSchedule from "./components/Admin/DoctorSchedule";
import Speciality from "./components/Admin/Speciality";
import Selectschedule from "./components/Admin/Selectschedule";
import { FontAwesome, Fontisto,FontAwesome5,MaterialIcons,AntDesign,Ionicons  } from '@expo/vector-icons'; 


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
      name="Show Date" 
      component={ShowDate}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="list-1" size={24} color="black" />
        ),
        headerShown: false,
      }}/>

      <Tab.Screen 
      name="Queston" 
      component={QuestionSreen}
      options={{
        tabBarIcon:({})=>(
          <AntDesign name="mail" size={24} color="black" />
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
      name="Create History" 
      component={CreateHistorial}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="date" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="show History" 
      component={Viewhistory}
      options={{
        tabBarIcon:({})=>(
          <AntDesign name="solution1" size={24} color="black" />
        ),
        headerShown: false,
      }}/>

      <Tab.Screen 
      name="Patients" 
      component={ListPatient}
      options={{
        tabBarIcon:({})=>(
          <AntDesign name="table" size={24} color="black" />
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
 function AdminTab(){
  return(
    <Tab.Navigator 
    initialRouteName="Schedule"
    screenOptions={{
      tabBarStyle: {backgroundColor: 'white'},
      tabBarActiveTintColor: '#5cceee',
    }}>
      <Tab.Screen 
      name="Schedule" 
      component={DoctorSchedule}
      options={{
        tabBarIcon:({})=>(
          <Ionicons name="md-time-sharp" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Selectschedule" 
      component={Selectschedule}
      options={{
        tabBarIcon:({})=>(
          <Fontisto name="date" size={24} color="black" />
        ),
        headerShown: false,
      }}/>
      <Tab.Screen 
      name="Speciality" 
      component={Speciality}
      options={{
        tabBarIcon:({})=>(
          <MaterialIcons name="file-upload" size={24} color="black" />
        ),
        headerShown: false,
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
          initialRouteName="Register"
        >
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
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
          <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{
            headerBackVisible: true,
          }}
          />
          <Stack.Screen
          name="EditUser"
          component={EditUser}
          options={{
            headerBackVisible: true,
          }}
          />
          <Stack.Screen
          name="CreateDoctor"
          component={CreateDoctor}
          options={{
            headerBackVisible: true,
          }}
          />
          <Stack.Screen
          name="Admin"
          component={AdminTab}
          options={{
            headerBackVisible: true,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
  
}
