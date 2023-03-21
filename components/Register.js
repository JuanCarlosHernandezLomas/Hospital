import React from "react";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl,Link} from "native-base";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";


const Register=()=>{


    const [Roles, setRoles]= React.useState("");
    const[formData,setData]=React.useState({})

    const submit = async ()=>{
        console.log("Submitted", formData)
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Email', formData.Email)
        formDataforRequest.append('Password', formData.Passwords)
        formDataforRequest.append('Role', formData.Role)

        const response = await axios.post(
            'http://172.16.4.219/Hospital/api/registrar.php', 
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

       
           
        

    const Role=[
        {key: '1', value: 'Paciente'},
        {key: '2', value: 'Doctor'},
        {key: '3', value: 'Admin'},

        
    ]

    return(
        <ScrollView>
        <Center w="100%">
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Register</Text>
            <Box px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                         borderRadius={30} 
                         onChangeText={
                            value=>setData({
                                ...formData,
                                Email: value

                            })
                         }
                         />
                            <FormControl.HelperText>
                                Enter the email
                            </FormControl.HelperText>
                    </FormControl>
                    <FormControl >
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" p={2} 
                        placeholder="Mora than 8 caracters" 
                        borderRadius={30} 
                        onChangeText={
                            value=>setData({
                                ...formData,
                                Passwords: value

                            })
                         }
                        />
                            <FormControl.HelperText>
                                The password must have a min of 8, one Capital and One special character
                            </FormControl.HelperText>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Role</FormControl.Label>
                        <Input p={2} placeholder="Paciente"
                         borderRadius={30}
                         onChangeText={
                            value=>setData({
                                ...formData,
                                Role: value

                            })
                         }
                         />
                            <FormControl.HelperText>
                                Enter the Role
                            </FormControl.HelperText>
                    </FormControl>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        onPress={submit }
                        
                        >  
                        Sign in
                    </Button>
                    
                </VStack>
            </Box>
        </Center>
    </ScrollView>
    );
};

export default Register;