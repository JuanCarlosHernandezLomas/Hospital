import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";



const Speciality=()=>{
        const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [errors, setErrors] = React.useState({});

        const validate = () => {
            if(!formData.Name ){
                setErrors({
                    ...errors,
                    Name: 'Speciality is required',
                });
                return false;
            }
              setErrors({})
            return true;
        };
    
        
        
    const submit = async ()=>{
        if(validate()){
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)


        const response = await axios.post(
            'http://192.168.100.11/Hospital/api/Admin/Speciality.php', //172.16.34.42
            formDataforRequest,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        )
                    Alert.alert('informacion correcta', 'los datos se han guaradado',
        [{text: 'Ok', onPress: () => console.log('pasas')}])
        }
        else{
            Alert.alert('invalid information', 'please complete the fields',
            [{text: 'Ok', onPress: () => console.log('alert closed')}])
        }
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
                         Specialidad
                        </Text>
                <FormControl isRequired isInvalid={'Name' in errors}>
                <FormControl.Label>Specialidad </FormControl.Label>
                <Input p={2} placeholder="specialidad" 
                    color="black.400" 
                    backgroundColor={"white"} 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    Name: value
                   })
                    }
                />
                         {'Name' in errors ?
                            <FormControl.ErrorMessage>{errors.Name}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter the Speciality
                          </FormControl.HelperText>
                        }
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
export default Speciality