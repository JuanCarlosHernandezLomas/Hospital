import React from "react";
import {  Center,  Text, VStack, Box, FormControl, Input, Link, Button,  ScrollView,  } from "native-base";
import axios from "axios";
import SelectList from 'react-native-dropdown-select-list';
import {Alert} from 'react-native';


const Register = ({ navigation }) => {
  
    
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({

    });


    //constante de navegacion sin validacion



    const validate = () => {


        if (!formData.Password || formData.Password.length < 8) {
            setErrors({
                ...errors,
                Password: 'Password is empty'
            })
            return false;
        }
        if (!formData.Email) {
            setErrors({
                ...errors,
                Email: "Email is empty"
            });
        }
        setErrors({})
        return true;
    };




    const onSubmit = async () => {
        validate() ? console.log('Submitted', formData) :
            setFormData({
                ...formData,
                action: 'register'
            })  
        console.log('FormData', formData)
        const formDataforRequest = new FormData()
        formDataforRequest.append("Email", formData.Email)
        formDataforRequest.append("Password", formData.Password)
        formDataforRequest.append("Role", formData.Role)
        
        
        console.log('FormDataRequest', formDataforRequest)


        const response = await axios.post(
            'http://localhost/Hospital/api/registrar.php',  //Si no encuentra el localhost, poner direccion de la maquina
            formDataforRequest,
            {
                Headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*",
                    'Accept': 'application/json'
                },
                transformRequest: formData => formDataforRequest,
            }
        )
        console.log('typeof', typeof (response.data))
        console.log('Object.keys', Object.keys(response.data).length)
        console.log('Object', response.data)

        
    }


    return (
        <ScrollView>
            <Center w="100%">
                <Text color="#1b396a" fontWeight="semibold" fontSize="15">Register</Text>
                <Box px="1" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl isRequired isInvalid={'Email' in errors}>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input p={2} placeholder="example@mail.com" color={"blue.400"} onChangeText={value => setFormData({
                                ...formData,
                                Email: value
                            })} borderRadius={30} />
                            {'Email' in errors ?
                                <FormControl.ErrorMessage>{errors.Email}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Enter the email
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        <FormControl isRequired isInvalid={'Password' in errors}>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" p={2} placeholder="Mora than 8 caracters" color={"blue.400"} onChangeText={value => setFormData({
                                ...formData,
                                Password: value
                            })} borderRadius={30} />
                            {'Password' in errors ?
                                <FormControl.ErrorMessage>{errors.Password}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    The password must have a min of 8, one Capital and One special character
                                </FormControl.HelperText>
                            }
                        </FormControl>
                        
                        <FormControl isRequired isInvalid={'Role' in errors}>
                            <FormControl.Label>Role</FormControl.Label>
                            <Input p={2} placeholder="A"  color={"blue.400"} onChangeText={value => setFormData({
                                ...formData,
                                Role: value
                            })} borderRadius={30} />
                            {'Role' in errors ?
                                <FormControl.ErrorMessage>{errors.Role}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                    Enter the email
                                </FormControl.HelperText>
                            }
                            
                        </FormControl>
                        <Button 
                            mt="2"
                            size="lg"
                            backgroundColor="#1b396a"
                            borderRadius={30}
                            onPress={onSubmit} 
                            >  
                            Sign in
                        </Button>
                        <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => { navigation.navigate("Login") }}>
                            I have an account
                        </Link>
                    </VStack>
                </Box>
            </Center>
        </ScrollView>
    )
    
}

export default Register;