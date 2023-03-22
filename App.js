import React from "react";
import { NativeBaseProvider } from 'native-base';
import Navegation from "./components/Navigation";
import Register from "./components/Register";
import NavegationD from "./components/NavigationD";



export default function App(){
  return(
    <NativeBaseProvider >
    <NavegationD></NavegationD>
    </NativeBaseProvider>
  );
  
}
