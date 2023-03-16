import { View, Text, Center, ScrollView,Input,VStack,Button, Box,FormControl } from "native-base";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Image } from 'react-native-elements';



const DateUser=()=>{

    const [selected, setSelected]= React.useState("");
const [days, setDay]= React.useState("");

const data =[
    {key: '1', value: 'Gimena'},
    {key: '2', value: 'Luis'},
    {key: '3', value: 'Raul'},
    {key: '4', value: 'Melisa'},
];

const day=[
    {key: '1', value: 'Lunes'},
    {key: '2', value: 'Martes'},
    {key: '3', value: 'Miercoles'},
    {key: '4', value: 'Jueves'},
    {key: '5', value: 'Viernes'},
    {key: '6', value: 'sabado'},
    {key: '7', value: 'Domingo'},
    
]
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
                Cita
            </Text>
            <Center>
                <Image 
                source={{ uri: 'https://us.123rf.com/450wm/ahasoft2000/ahasoft20001602/ahasoft2000160201715/52102515-el-doctor-calendario-icono-larga-sombra-el-estilo-es-un-s%C3%ADmbolo-de-luz-plana-con-%C3%A1ngulos.jpg?ver=6' }}
                style={{ width: 150, height: 150 }}
                backgroundColor={"#CECEE5"}/>
            </Center>
            <FormControl >
                <FormControl.Label>Doctor </FormControl.Label>
                <SelectList p={2} placeholder="seleccione un doctor" 
                color="black.400"   borderRadius={30}  
                data={data}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>day </FormControl.Label>
                <SelectList p={2} placeholder="seleccione un dia" 
                color="black.400"  borderRadius={30} 
                data={day}
                setDay={setDay}
                dropdownItemStyles={{backgroundColor: 'white'}}
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>hora</FormControl.Label>
                <Input p={2} placeholder="ingrese una hora" 
                color="black.400" backgroundColor={"white"} borderRadius={30} />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400"backgroundColor={"white"} borderRadius={30} />
                <FormControl.HelperText>
                    Nss should contains 12 characters
                </FormControl.HelperText>
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigation('HomeUser')
                }}
        >
            Generar cita 
        </Button>
        <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigation('HomeUser')
                }}
        >
            cancelar cita 
        </Button>
            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
};

export default DateUser;