import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Register from './components/auth/Register';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#0081C9',
        100: '#5BC0F8',
        200: '#86E5FF',
        300: '#FFC93C',
      
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706'
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark'
    }
  });
  return <NativeBaseProvider theme={theme}>
    <Center flex={1} px="3">
    <Register></Register>
    </Center>

    </NativeBaseProvider>;
}


