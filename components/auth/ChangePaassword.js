import React from "react";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl,Link,Image,} from "native-base";
import { SelectList } from "react-native-dropdown-select-list";
import { Alert } from "react-native";
import axios from "axios";


const ChangePassword=({navigation})=>{

    const imageURI = require('../../assets/inicio.png');
     const [selected, setSelected]= React.useState({});
    const[formData,setData]=React.useState({})
    const [errors, setErrors] = React.useState({});

     const validate = () => {
        if(!formData.Email && !formData.Passwords && !formData.Role){
            setErrors({
                ...errors,
                Email: 'Email is required',
                Passwords: 'Password is required',                
            });
            return false;
        }
        else if (!formData.Email) {
            setErrors({
                ...errors,
                Email: 'Email is required'
            });
            return false;
        } else if (formData.Email.length < 3) {
            setErrors({
                ...errors,
                Email: 'Email is to short'
            })
            return false;
        }

        if (!formData.Passwords || formData.Passwords.length < 3) {
            setErrors({
                ...errors,
                Passwords: 'Password is empty'
            })
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
            formDataforRequest.append('Email', formData.Email)
            formDataforRequest.append('Password', formData.Passwords)

            const response = await axios.post(
            'http://192.168.100.5/Hospital/api/Password.php', //172.16.34.42
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
        Alert.alert('invalid information', 'please check the fields',
        [{text: 'Ok', onPress: () => console.log('alert closed')}])

    }
}


    return(
        <ScrollView backgroundColor={"#EAF2F8"}>
        <Center w="100%">
        <Image mt="9" shadow={2} source={imageURI} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={20} />
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Chenge Password</Text>
            <Box px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={'Email' in errors}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com"
                         borderRadius={30}
                         backgroundColor={"white"}
                         onChangeText={
                            value=>setData({
                                ...formData,
                                Email: value

                            })
                         }
                         />
                        {'Email' in errors ?
                            <FormControl.ErrorMessage>{errors.Email}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter the email
                          </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'Passwords' in errors}>
                        <FormControl.Label>New Password</FormControl.Label>
                        <Input type="password" p={2} 
                        placeholder="Mora than 8 caracters" 
                        borderRadius={30}
                        backgroundColor={"white"}
                        onChangeText={
                            value=>setData({
                                ...formData,
                                Passwords: value

                            })
                         }
                        />
                           {'Passwords' in errors ?
                                <FormControl.ErrorMessage>{errors.Passwords}</FormControl.ErrorMessage> :
                                <FormControl.HelperText>
                                The password must have a min of 3
                                </FormControl.HelperText>
                            }
                    </FormControl>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        onPress={submit}
                        >  
                        Sign in
                    </Button>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        onPress={() => { navigation.navigate('Login') }}
                        >  
                        back
                    </Button>
                </VStack>
            </Box>
        </Center>
    </ScrollView>
    );
};

export default ChangePassword;