import React from "react";
import { NativeBaseProvider } from 'native-base';
import Navegation from "./components/Navigation";



export default function App(){
  return(
    <NativeBaseProvider >
    <Navegation />
    </NativeBaseProvider>
  );
  
}
