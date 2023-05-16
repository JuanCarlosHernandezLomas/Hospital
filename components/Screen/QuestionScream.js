
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import {TextInput} from "react-native"
import React from "react";
import axios from "axios";
import { Alert } from "react-native";

const QuestionSreen=()=>{

    const[formData,setData]=React.useState({})
    const [errors, setErrors] = React.useState({});

     const validate = () => {
        if(!formData.Name && !formData.LastName && !formData.Coment){
            setErrors({
                ...errors,
                Name: 'Name is required',
                LastName: 'Last is required',
                Coment: 'Coment is required'

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
        if (!formData.LastName) {
            setErrors({
                ...errors,
                LastName: 'Last is required'
            });
            return false;
        }
        if (!formData.Coment) {
            setErrors({
                ...errors,
                Coment: 'Coment is empty'
            });
            return false;
        }
        setErrors({})
        return true;
    }
    const submit = async ()=>{
        console.log(validate())
       if(validate()){
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.LastName)
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
            formDataforRequest.append('Usuario', response.data[0].Id)
            formDataforRequest.append('Coment', formData.Coment)
            console.log(formDataforRequest)
            const respuesta =  axios.post(
                'http://192.168.100.5/Hospital/api/Patient/Coment.php',
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
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
                }}>
                Coment
            </Text>
            <FormControl isRequired isInvalid={'Name' in errors}>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                         borderRadius={30}
                         backgroundColor={"white"}
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
                            Enter your Name
                          </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'LastName' in errors}>
                        <FormControl.Label>Last Name</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                         borderRadius={30}
                         backgroundColor={"white"}
                         onChangeText={
                            value=>setData({
                                ...formData,
                                LastName: value

                            })
                         }
                         />
                        {'LastName' in errors ?
                            <FormControl.ErrorMessage>{errors.LastName}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter your Last name 
                          </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'Coment' in errors}>
                        <FormControl.Label> Coment </FormControl.Label>
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
                        Coment: value

                         })
                        }
                        />
                        {'Coment' in errors ?
                                <FormControl.ErrorMessage>{errors.Coment}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                enter a comment
                                </FormControl.HelperText>
                        }
                    </FormControl>
        <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}
                onPress={submit} 
                
        >
            Send Coment
        </Button>
            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
            
    );
};

export default QuestionSreen