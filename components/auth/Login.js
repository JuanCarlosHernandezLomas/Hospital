import React from "react";
import { View,Text, Center, ScrollView,Input,VStack,Button, Box,FormControl,Link,Image,} from "native-base";
import { Alert } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";

const Login=({navigation})=>{

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
                Role: 'Role is required',
                

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
            formDataforRequest.append('Role', selected.Role)
            formDataforRequest.append('action', formData.action)

            const response = await axios.post(
            'http://192.168.100.11/Hospital/api/login.php', //172.16.34.42
            formDataforRequest,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
            ).then((response) => {
                console.log('respuestas', formData)
                console.log('Object', response.data);
                if (Object.keys(response.data).length >= 1) {
                    if (response.data[0].Role == 1){
                        navigation.replace('CreateUser')
                    } else if (response.data[0].Role == 2){
                        navigation.replace('DoctorTab')
                    }   else if (response.data[0].Role == 3){
                        navigation.replace('Admin')
                    } else {
                        Alert.alert("Error", "Verifica tus datos");
                    }
                }
                else {
                    Alert.alert("Error", "El usuario no existe");
                }

            })
    }
    else{
        Alert.alert('invalid information', 'please check the fields',
        [{text: 'Ok', onPress: () => console.log('alert closed')}])

    }

}

const data=[
    {key: '1', value: 'Paciente'},
    {key: '2', value: 'Doctor'},
    {key: '3', value: 'Admin'},

    
]


    return(

        <ScrollView backgroundColor={"#EAF2F8"}>
        <Center w="100%">
        <Image mt="9" shadow={2} source={imageURI} alt="Logo Tecnm" style={{ width: 100, height: 100 }} size="xl" borderRadius={20} />
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Login</Text>
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
                        <FormControl.Label>Password</FormControl.Label>
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
                                The password must have a min of 8, one Capital and One special character
                                </FormControl.HelperText>
                            }
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Role</FormControl.Label>
                        <SelectList p={2} placeholder="seleccione su role" 
                        color="black.400"   borderRadius={30} 
                        backgroundColor={"white"} 
                        search={true}
                        data={data}
                        setSelected={setSelected}
                        dropdownItemStyles={{backgroundColor: 'white'}}
                        onSelect={() =>setSelected({
                            ...selected,
                            Role:selected
                         })}
                        />
                
                    </FormControl>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        
                        onPress={submit}
                        >  
                        Login
                    </Button>
                    <Link _text={{
                            color: "indigo.500",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} onPress={() => { navigation.navigate('Register') }}>
                            Create account
                        </Link>
                    
                    
                </VStack>
            </Box>
        </Center>
    </ScrollView>
    );
};
export default Login