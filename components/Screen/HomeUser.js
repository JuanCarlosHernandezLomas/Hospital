import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import React from "react";
import { Avatar } from 'react-native-elements';


const HomeUser=({navigation})=>{
    return(
        <ScrollView backgroundColor={"#CECEE5"}>
        <Center w="100%">
            <Box px="1" py="8" w="90%" maxW="290">
            <VStack space={2} mt="2">
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
                }}>
                Perfil
            </Text>
            <Center>
                <Avatar
             size={"xlarge"}
             rounded
                source={{
                uri:
                'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
                }}
             />
            </Center>
            <FormControl >
                <FormControl.Label>Name </FormControl.Label>
                <Input p={2} placeholder="ANA" 
                color="black.400" backgroundColor={"white"} borderRadius={30}  />
            </FormControl>
            <FormControl >
                <FormControl.Label>Lastname </FormControl.Label>
                <Input p={2} placeholder="Gallardo Medina" 
                color="black.400" backgroundColor={"white"} borderRadius={30} />
            </FormControl>
            <FormControl >
                <FormControl.Label>Direcction </FormControl.Label>
                <Input p={2} placeholder="Lomas del ajderez" 
                color="black.400"backgroundColor={"white"} borderRadius={30} />
            </FormControl>
            <FormControl >
                <FormControl.Label>Phone </FormControl.Label>
                <Input p={2} placeholder="449-132-2322" 
                color="black.400" backgroundColor={"white"} borderRadius={30} />
            </FormControl>
            <FormControl >
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="12345678910" 
                color="black.400" backgroundColor={"white"} borderRadius={30} />
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigate('CreateUser')
                }}
        >
            Editar
        </Button>
        <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigate('Login')
                }}
        >
            Salir
        </Button>
            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default HomeUser
