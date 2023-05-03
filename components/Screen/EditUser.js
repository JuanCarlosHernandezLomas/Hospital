import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



const EditUser=(navigate)=>{
    const navigation = useNavigation();
    const[formData,setData]=React.useState({})
    const [errors, setErrors] = React.useState({});

     const validate = () => {
        if (!formData.Name) {
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
        setErrors({})
        return true;
    };


    const submit = async ()=>{
        validate() ? console.log('submitted', formData) :
        console.log('Validation Failed', errors)
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.LastName)
        formDataforRequest.append('Direction', formData.Direction)
        formDataforRequest.append('Phone', formData.Phone)
    
//172.25.48.1
        const response = await axios.post(
            'http://192.168.100.1/Hospital/api/Patient/EditUser.php', //172.16.34.42
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
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {submit}
            >
                Guardar
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
         Regresar
        </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default EditUser