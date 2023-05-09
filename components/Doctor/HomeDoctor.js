import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect } from "react";


const HomeDoctor=()=>{
    const navigation = useNavigation();
    const [isLoading, setLoading] = React.useState();
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            const response = axios.get(
                'http://192.168.100.5/Hospital/api/Doctor/SelectDoctor.php',
                
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                }
            ).then((response) => {
                console.log(response.data);
                setLoading(false);
                setUser({
                    ...user,
                    Nombre: response.data[0].Nombre,
                    Apellido: response.data[0].Apellido,
                    especialidad: response.data[0].especialidad,
                    inicio: response.data[0].inicio,
                    salida: response.data[0].salida,
                    
                });
                
            })
        }, 100);
    }, [isLoading]);



return(
    <ScrollView backgroundColor={"#CECEE5"}>
    <Center w="100%">
        <Box px="1" py="8" w="90%" maxW="290">
            <VStack space={2} mt="2">
                <ScrollView>
                    <Text
                        style={{
                        fontSize: 20,
                        textAlign:"center",
                        marginTop: "20%"
                        }}
                    >
                     Perfil
                    </Text>
                    <Center>
                         <Avatar
                            size={"xlarge"}
                            rounded
                            source={{
                            uri:
                            'https://depor.com/resizer/pU2cw5AVsAeDuCSRoNMh1QszXiY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HMBTNM3UYJCSRBD2MDIBTPU6X4.jpg',
                            }}
                        />
                    </Center>
                    <Text mt="2" fontSize="25" color="#1b396a" fontWeight="bold" textAlign="center">{"   "}My Profile</Text>
                    <Text fontSize="20"  mt="3" >
                        {"   "}Name :
                        <Text color="#1b396a" textAlign="left" fontSize="18" > {user.Nombre}</Text>
                    </Text>
                    <Text fontSize="20"  borderTopWidth="1" mt="3">
                        {"   "}Last Name:
                        <Text color="#1b396a" textAlign="left" fontSize="18" > {user.Apellido}</Text>
                    </Text>
                    <Text fontSize="20"  borderTopWidth="1" mt="3" >
                        {"   "}Start:
                        <Text color="#1b396a" textAlign="left" fontSize="18" > {user.inicio}</Text>
                    </Text>
                    <Text fontSize="20"  borderTopWidth="1" mt="3" >
                        {"   "}End:
                        <Text color="#1b396a" textAlign="left" fontSize="18" > {user.salida}</Text>
                    </Text>
                    <Text fontSize="20"  borderTopWidth="1" mt="3" >
                        {"   "}Specialidad:
                        <Text color="#1b396a" textAlign="left" fontSize="18" > {user.especialidad}</Text>
                    </Text>
        <Button
            mt="2"
            size="lg"
            backgroundColor="#6495ED"
            borderRadius={2}   
            onPress= {()=>navigation.navigate('CreateDoctor')}
        >
            Actualizar Datos
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
        </ScrollView>
        </VStack> 
        </Box>      
    </Center>
    </ScrollView>
);
}
export default HomeDoctor
