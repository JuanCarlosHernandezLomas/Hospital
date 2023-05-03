import React from "react";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl,Link,Image,} from "native-base";


const Login=({navigation})=>{

    const imageURI = require('../../assets/inicio.png');
    return(

        <ScrollView backgroundColor={"#EAF2F8"}>
        <Center w="100%">
        <Image mt="9" shadow={2} source={imageURI} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={20} />
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Login</Text>
            <Box px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                        backgroundColor={"white"}
                         borderRadius={30} />
                            <FormControl.HelperText>
                                Enter the email
                            </FormControl.HelperText>
                    </FormControl>
                    <FormControl >
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" p={2} 
                        placeholder="Mora than 8 caracters"
                        backgroundColor={"white"}
                        borderRadius={30} />
                            <FormControl.HelperText>
                                The password must have a min of 8, one Capital and One special character
                            </FormControl.HelperText>
                    </FormControl>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        
                        onPress={() =>{navigation.navigate('CreateUser')} }
                        >  
                        Login
                    </Button>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        
                        onPress={() =>{navigation.navigate('DoctorTab')} }
                        >  
                        Doctor
                    </Button>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        
                        onPress={() =>{navigation.navigate('Admin')} }
                        >  
                        Admin
                    </Button>
                    
                </VStack>
            </Box>
        </Center>
    </ScrollView>
    );
};
export default Login