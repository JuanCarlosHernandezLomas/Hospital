import React from "react";
import { ListItem } from "@react-native-material/core";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements';
import { Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
    Provider,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
  } from "@react-native-material/core";


const ShowDate=(navigate)=>{
    const navigation = useNavigation();
    const[formData,setData]=React.useState({})
    const [errors, setErrors] = React.useState({});
    const [user, setUser] = React.useState([]);
    const [isLoading, setLoading] = React.useState();

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

    const chech= async()=>{
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.Lastname)
        const res = await axios.post(
            'http://192.168.100.5/Hospital/api/Patient/Selecespuser.php', //172.16.34.42
            formDataforRequest,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
                transformRequest: formData => formDataforRequest,
            }
        ).then((response)=>{
            console.log(response.data)
            formDataforRequest.append('cita', response.data[0].Id)
            const respuesta =  axios.post(
                'http://192.168.100.5/Hospital/api/Patient/ViewDate.php',
                    formDataforRequest,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Access-control-Allow-origin": "*"
                        },
                        transformRequest: formData => formDataforRequest,
                    }
            ).then((response)=>{
                console.log(response.data)
                formDataforRequest.append('Nocita', response.data[0].Id)
                const respuesta =  axios.post(
                    'http://192.168.100.5/Hospital/api/Patient/DelteDate.php',
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


        })

    }

    const submit = async ()=>{
        console.log(validate())
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('Name', formData.Name)
        formDataforRequest.append('LastName', formData.Lastname)
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
        ).then((response)=>{
            console.log(response.data)
            formDataforRequest.append('cita', response.data[0].Id)
            const respuesta =  axios.post(
                'http://192.168.100.5/Hospital/api/Patient/ViewDate.php',
                    formDataforRequest,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Access-control-Allow-origin": "*"
                        },
                        transformRequest: formData => formDataforRequest,
                    }
            ).then((response)=>{
                console.log(response.data)
                setUser({
                    ...user,
                    Date: response.data[0].Id,
                    Dates: response.data[1].Id,
                    Day: response.data[0].Day,
                    Days: response.data[1].Day,
                    Time: response.data[0].scheduledDate,
                    Times: response.data[1].scheduledDate,
                    Doctor: response.data[0].Medico,
                    Doctors: response.data[1].Medico

                    
                });

            })


        })

        
        
    }
    return(
        <ScrollView backgroundColor={"#CECEE5"}>

                        <Text
                            style={{
                            fontSize: 20,
                            textAlign:"center",
                            marginTop: "20%"
                            }}
                        >
                         Dates
                        </Text>
                        <Center w="100%">
            <Box px="1" py="8" w="90%" maxW="290">
            <VStack space={2} mt="2">                        
                        <FormControl isRequired isInvalid={'Name' in errors}>
                <FormControl.Label>Name of Patient</FormControl.Label>
                <Input p={2} placeholder="write the name of the patient" 
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
                        put the name of Patient
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'Lastname' in errors}>
                <FormControl.Label>Lastname  Patient</FormControl.Label>
                <Input p={2} placeholder="write the Last name of the patient" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Lastname: value
                   })
                 }
                />
                  {'Lastname' in errors ?
                 <FormControl.ErrorMessage>{errors.Lastname}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the Last name of Patient
                  </FormControl.HelperText>
                }
            </FormControl>
            <Button
            mt="2"
                size="lg"
                backgroundColor="#6495ED"
                borderRadius={2}   
                onPress= {(submit)
                }
        >
            Buscar
            </Button>
            </VStack> 
            </Box>      
        </Center>
                        <ListItem
                              leadingMode="avatar"
                              onPress={() => Alert.alert('cancel appointment?', 'Are you sure to cancel this appointment?',
                              [{text: 'Ok', onPress: (chech) }, {text: 'cancel',onPress: () => console.log('Cancel Pressed')}])
                      }
                              leading={
                                <Avatar 
                                size={"large"}
                                source={{
                                    uri:
                                    'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
                                    }}/>
                              }
                        title={user.Date}
                        secondaryText={['Day: ',user.Day, ' ', 'Time: ',user.Time, ' ' ,'Doctor: ', user.Doctor]}
                        />
                        <ListItem
                              leadingMode="avatar"
                              onPress={() => Alert.alert('cancel appointment?', 'Are you sure to cancel this appointment?',
                              [{text: 'Ok', onPress: (chech)}, {text: 'cancel',onPress: () => console.log('Cancel Pressed')}])}
                              leading={
                                <Avatar 
                                size={"large"}
                                source={{
                                    uri:
                                    'https://previews.123rf.com/images/rawpixel/rawpixel1704/rawpixel170441704/76561515-retrato-de-personas-estudio-disparar-con-expresi%C3%B3n-de-cara-sonriente.jpg',
                                    }}/>
                              }
                        title={user.Dates}
                        secondaryText={['Day: ',user.Days, ' ', 'Time: ',user.Times, ' ' ,'Doctor: ', user.Doctors]}
                        />
        </ScrollView>
    );
}
export default ShowDate