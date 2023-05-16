import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useEffect } from "react";
import {TextInput} from "react-native"
import axios from "axios";



const CreateHistorial=()=>{
    const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [isLoading, setLoading] = React.useState();
        const [selected, setSelected]= React.useState({});
        const [errors, setErrors] = React.useState({});
        const [user, setUser] = React.useState([]);

        const validate = () => {
           if(!formData.Name && !formData.Lastname && !formData.observations ){
               setErrors({
                   ...errors,
                   Name: 'Name of patient is required',
                   Lastname: 'Last name of patient is required',
                   observations: 'observation is required'
                   
               });
               return false;
           }
           else if (!formData.Name) {
               setErrors({
                   ...errors,
                   Name: 'Name is required'
               });
               return false;
           } 
           if (!formData.Lastname) {
               setErrors({
                   ...errors,
                   Lastname: 'Last name is required'
               });
               return false;
           }
           if (!formData.observations) {
            setErrors({
                ...errors,
                observations: 'observations is empty'
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
            formDataforRequest.append('Name', formData.Name)
            formDataforRequest.append('LastName', formData.Lastname)
            const response = await axios.post(
                'http://192.168.100.5/Hospital/api/Patient/Selecespuser.php', //172.16.34.42
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
                formDataforRequest.append('Paciente', response.data[0].Id)
                formDataforRequest.append('observations', formData.observations)
                console.log(formDataforRequest)
                const respuesta =  axios.post(
                    'http://192.168.100.5/Hospital/api/Doctor/MedicalHistory.php',
                        formDataforRequest,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                "Access-control-Allow-origin": "*"
                            },
                            transformRequest: formData => formDataforRequest,
                        }
                )
    
            })
            Alert.alert('informacion correcta', 'los datos se han guaradado',
        [{text: 'Ok', onPress: () => console.log('pasas')}])

            }
            else{
                 Alert.alert('invalid information', 'please check the fields',
            [{text: 'Ok', onPress: () => console.log('alert closed')}])
    
    
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
                         medical history
                        </Text>
            <FormControl isRequired isInvalid={'Name' in errors}>
                <FormControl.Label>Name of Patient</FormControl.Label>
                <Input p={2} placeholder="write the name of the patient" 
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
                        put the name of Patient
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'Lastname' in errors}>
                <FormControl.Label>Lastname  Patient</FormControl.Label>
                <Input p={2} placeholder="write the Last name of the patient" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Lastname: value
                   })
                 }
                />
                  {'Lastname' in errors ?
                 <FormControl.ErrorMessage>{errors.Lastname}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the Last name of Patient
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'observations' in errors}>
                        <FormControl.Label> observations </FormControl.Label>
                        <TextInput
                        backgroundColor = "white"
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={100}
                        color="#1b396a" 
                        fontWeight="black"
                        style={{padding: 100}}
                        onChangeText={
                        value=>setData({
                        ...formData,
                        observations: value

                         })
                        }
                        />
                        {'observations' in errors ?
                                <FormControl.ErrorMessage>{errors.observations}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                enter a observations
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
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default CreateHistorial