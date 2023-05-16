import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";



const DoctorSchedule=()=>{
        const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [errors, setErrors] = React.useState({});

        const validate = () => {
           if(!formData.StartTime && !formData.EndTime && !formData.Spaces){
               setErrors({
                   ...errors,
                   StartTime: 'start time is required',
                   EndTime: 'end time is required',
                   Spaces: 'Spaces is required',
               });
               return false;
           }
            if (!formData.StartTime) {
               setErrors({
                   ...errors,
                   StartTime: 'Start time is empty'
               });
               return false;
           }  if (!formData.EndTime) {
               setErrors({
                   ...errors,
                   EndTime: 'End time is empty'
               })
               return false;
           }
   
           if (!formData.Spaces) {
               setErrors({
                   ...errors,
                   Spaces: 'Spaces is empty'
               })
               return false;
           }
             setErrors({})
           return true;
       };
        
        
    const submit = async ()=>{
        if(validate()){
        setData({ ...formData, action: 'login' })
        const formDataforRequest = new FormData()
        formDataforRequest.append('StartTime', formData.StartTime)
        formDataforRequest.append('EndTime', formData.EndTime)
        formDataforRequest.append('Spaces', formData.Spaces)


        const response = await axios.post(
            'http://192.168.100.5/Hospital/api/Admin/Schudeles.php', //172.16.34.42
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
                         Horarios
                        </Text>
                <FormControl isRequired isInvalid={'StartTime' in errors}>
                <FormControl.Label>StartTime </FormControl.Label>
                <Input p={2} placeholder="start Time" 
                    color="black.400" 
                    backgroundColor={"white"} 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    StartTime: value
                   })
                    }
                />
                        {'StartTime' in errors ?
                            <FormControl.ErrorMessage>{errors.StartTime}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter the Start Time
                          </FormControl.HelperText>
                        }
                    </FormControl>
            <FormControl isRequired isInvalid={'EndTime' in errors}>
                <FormControl.Label>EndTime</FormControl.Label>
                <Input p={2} placeholder="end TIme" 
                color="black.400" 
                backgroundColor={"white"} 
                borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    EndTime: value
                   })
                 }
                />
                        {'EndTime' in errors ?
                            <FormControl.ErrorMessage>{errors.EndTime}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter the End Time
                          </FormControl.HelperText>
                        }           
                    </FormControl>
            <FormControl isRequired isInvalid={'Spaces' in errors}>
                <FormControl.Label>Spaces</FormControl.Label>
                <Input p={2} placeholder="end TIme" 
                color="black.400"
                backgroundColor={"white"} 
                 borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Spaces: value
                   })
                 }
                />
                        {'Spaces' in errors ?
                            <FormControl.ErrorMessage>{errors.Spaces}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                            Enter the Spaces
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
                    navigation.navigate('Login')
                }}
        >
         Salir
        </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default DoctorSchedule