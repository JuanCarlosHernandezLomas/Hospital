import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";



const DoctorSchedule=()=>{
        const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        
        
    const submit = async ()=>{
        console.log("Submitted", formData)
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('StartTime', formData.StartTime)
        formDataforRequest.append('EndTime', formData.EndTime)
        formDataforRequest.append('Spaces', formData.Spaces)


        const response = await axios.post(
            'http://172.16.34.42/Hospital/api/Admin/Schudeles.php', //172.16.34.42
            formDataforRequest,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        )

        }
    return(
        <ScrollView backgroundColor={"#EAF2F8"}>
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
                         Horarios
                        </Text>
                <FormControl >
                <FormControl.Label>StartTime </FormControl.Label>
                <Input p={2} placeholder="start Time" 
                    color="black.400" 
                    backgroundColor={"white"} 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    StartTime: value
                   })
                    }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>EndTime</FormControl.Label>
                <Input p={2} placeholder="end TIme" 
                color="black.400" 
                backgroundColor={"white"} 
                borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    EndTime: value
                   })
                 }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Spaces</FormControl.Label>
                <Input p={2} placeholder="end TIme" 
                color="black.400"
                backgroundColor={"white"} 
                 borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Spaces: value
                   })
                 }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {submit}
            >
                Guardar
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
export default DoctorSchedule