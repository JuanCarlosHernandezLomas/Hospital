import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements';
import axios from "axios";



const CreateUser=()=>{

        const[formData,setData]=React.useState({})

    const submit = async ()=>{
        console.log("Submitted", formData)
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.LastName)
        formDataforRequest.append('Direction', formData.Direction)
        formDataforRequest.append('Phone', formData.Phone)
        formDataforRequest.append('NSS', formData.NSS)

        const response = await axios.post(
            'http://172.25.48.1/Hospital/api/Patient/CreateUser.php', 
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
    return(
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
                         Perfil
                        </Text>
                        <Center>
                             <Avatar
                                size={"xlarge"}
                                rounded
                                source={{
                                uri:
                                'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
                                }}
                            />
                        </Center>
            <FormControl >
                <FormControl.Label>Name </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                    color="black.400" 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    Name: value
                   })
                    }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Lastname </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    LastName: value
                   })
                 }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Direcction </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Direction: value
                   })
                    }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Phone </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Phone: value
                   })
                    }
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    NSS: value
                   })
                    }
                />
                <FormControl.HelperText>
                    Nss should contains 12 characters
                </FormControl.HelperText>
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {submit}
            >
                Editar
             </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
    );
}
export default CreateUser