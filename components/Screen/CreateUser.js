import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements';
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



const CreateUser=(navigate)=>{
    const navigation = useNavigation();
    const[formData,setData]=React.useState({})
    const [errors, setErrors] = React.useState({});

     const validate = () => {
        if(!formData.Name && !formData.LastName && !formData.Direction&& !formData.Phone && !formData.NSS){
            setErrors({
                ...errors,
                Name: 'Name is required',
                LastName: 'Last is required',
                Direction:'Direccion is required',
                Phone: 'Phone is required',
                NSS: 'NSS is required'

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
        if (!formData.Direction) {
            setErrors({
                ...errors,
                Direction: 'Direccion is required'
            });
            return false;
        }
        if (!formData.Phone) {
            setErrors({
                ...errors,
                Phone: 'Phone is required'
            });
            return false;
        }
        else if (formData.Phone.length < 10) {
            setErrors({
                ...errors,
                Phone: 'Phone is to short'
            })
            return false;
        }
        if (!formData.NSS) {
            setErrors({
                ...errors,
                NSS: 'NSS is required'
            });
            return false;
        }
        else if (formData.NSS.length < 12) {
            setErrors({
                ...errors,
                NSS: 'NSS is to short'
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
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.LastName)
        formDataforRequest.append('Direction', formData.Direction)
        formDataforRequest.append('Phone', formData.Phone)
        formDataforRequest.append('NSS', formData.NSS)
        const response = await axios.post(
            'http://192.168.100.5/Hospital/api/Patient/CreateUser.php', //172.16.34.42
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
            <FormControl isRequired isInvalid={'Name' in errors}>
                <FormControl.Label>Name </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
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
                        put the name
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'LastName' in errors} >
                <FormControl.Label>Lastname </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30}
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
                        put the lastname
                  </FormControl.HelperText>
                } 
            </FormControl>
            <FormControl isRequired isInvalid={'Direction' in errors}>
                <FormControl.Label>Direcction </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Direction: value
                   })
                    }
                />
              {'Direction' in errors ?
                 <FormControl.ErrorMessage>{errors.Direction}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the direccion
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'Phone' in errors}>
                <FormControl.Label>Phone </FormControl.Label>
                <Input p={2} placeholder="enter you Phone" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Phone: value
                   })
                    }
                />
               {'Phone' in errors ?
                 <FormControl.ErrorMessage>{errors.Phone}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                         Phone should contains atleast 10 characters
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'NSS' in errors}>
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="enter you NSS" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"}
                onChangeText={
                    value=>setData({
                    ...formData,
                    NSS: value
                   })
                    }
                />
                {'NSS' in errors ?
                  <FormControl.ErrorMessage>{errors.NSS}</FormControl.ErrorMessage> :
                  <FormControl.HelperText>
                           Nss should contains 12 characters
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
                Save
             </Button>
             <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigate('UserTab')
                }}
        >
         Back
        </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default CreateUser