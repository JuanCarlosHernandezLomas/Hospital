import React from "react";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl,Link} from "native-base";


const Login=({navigation})=>{
    return(

        <ScrollView>
        <Center w="100%">
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Login</Text>
            <Box px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                         borderRadius={30} />
                            <FormControl.HelperText>
                                Enter the email
                            </FormControl.HelperText>
                    </FormControl>
                    <FormControl >
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" p={2} 
                        placeholder="Mora than 8 caracters" 
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
                        
                        onPress={() =>{navigation.navigate('UserTab')} }
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
                    
                </VStack>
            </Box>
        </Center>
    </ScrollView>
    );
};
export default Login