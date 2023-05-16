import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useEffect } from "react";
import {TextInput} from "react-native"
import axios from "axios";



const Viewhistory=()=>{
    const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [user, setUser] = React.useState([]);
        const [isLoading, setLoading] = React.useState();
        const [errors, setErrors] = React.useState({});

        const validate = () => {

           if (!formData.Folio) {
            setErrors({
                ...errors,
                Folio: 'Folio is empty'
            });
            return false;
        }
           setErrors({})
           return true;
       };

        const submit = async ()=>{
        console.log(validate())
        if(validate()){
            setData({ ...formData, action: 'login' })
            const formDataforRequest = new FormData()
            formDataforRequest.append('Folio', formData.Folio)
            const response = await axios.post(
                'http://192.168.100.5/Hospital/api/Doctor/Viewhistory.php', //172.16.34.42
                formDataforRequest,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                    transformRequest: formData => formDataforRequest,
                }
            ).then((response) => {
                console.log(response.data)
                setLoading(false);
                setUser({
                    ...user,
                    Nombre: response.data[0].paciente,
                    observations: response.data[0].observacion,
                    
                });
            })

        }
            
        }
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
                         View history
                        </Text>
            <FormControl isRequired isInvalid={'Folio' in errors}>
                <FormControl.Label>Expediente</FormControl.Label>
                <Input p={2} placeholder="write the name of the patient" 
                    color="black.400"
                    backgroundColor={"white"} 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    Folio: value
                   })
                    }
                />
                 {'Folio' in errors ?
                 <FormControl.ErrorMessage>{errors.Folio}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the Folio of patient
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl >
                <FormControl.Label> Patient</FormControl.Label>
                <Input p={2} placeholder="write the Last name of the patient" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                >{user.Nombre}</Input>
            </FormControl>
            <FormControl>
                        <FormControl.Label> observations </FormControl.Label>
                        <TextInput
                        backgroundColor = "white"
                        multiline
                        numberOfLines={4}
                        maxLength={100}
                        color="#1b396a" 
                        fontWeight="black"
                        style={{padding: 100}}
                        >{user.observations}</TextInput>
                    </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {submit}
            >
                Show history
             </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default Viewhistory