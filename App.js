import React from "react";
import { NativeBaseProvider } from 'native-base';
import Navegation from "./components/Navigation";
import Register from "./components/Register";



export default function App(){
  return(
    <NativeBaseProvider >
    <Navegation></Navegation>
    </NativeBaseProvider>
  );
  
}
