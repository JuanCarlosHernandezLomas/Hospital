import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useEffect } from "react";
import axios from "axios";



const CreateDoctor=()=>{
    const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [isLoading, setLoading] = React.useState();
        const [selected, setSelected]= React.useState({});
        const [errors, setErrors] = React.useState({});
        const [user, setUser] = React.useState([]);

        const validate = () => {
           if(!formData.NameDoctor && !formData.SurnamesDoctor ){
               setErrors({
                   ...errors,
                   NameDoctor: 'Name is required',
                   SurnamesDoctor: 'Last is required',
                   
               });
               return false;
           }
           else if (!formData.NameDoctor) {
               setErrors({
                   ...errors,
                   NameDoctor: 'Name is required'
               });
               return false;
           } 
           if (!formData.SurnamesDoctor) {
               setErrors({
                   ...errors,
                   SurnamesDoctor: 'Last is required'
               });
               return false;
           }

           setErrors({})
           return true;
       };

       useEffect(() => {
        setTimeout(() => {
            const response = axios.get(
                'http://192.168.100.5/Hospital/api/Doctor/Specialty.php',
                
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                },
            ).then((response) => {
                console.log(response.data);
                setUser({
                    ...user,
                    Name: response.data[0].Name,
                    especialidad: response.data[1].Name,
                    valor: response.data[2].Name,
                    prueba: response.data[3].Name,
                    
                });
                

                
            })
        }, 100);
    } ,[isLoading]);

   
        
        const data =[
            {key: '1', value: user.especialidad},
            {key: '2', value: user.Name},
            {key: '3', value: user.valor},
            {key: '4', value: user.prueba},
        ];
        const submit = async ()=>{
        console.log(validate())
        console.log(selected)
        if(validate()){
            setData({ ...formData, action: 'login' })
            const formDataforRequest = new FormData()
            formDataforRequest.append('NameDoctor', formData.NameDoctor)
            formDataforRequest.append('SurnamesDoctor', formData.SurnamesDoctor)
            formDataforRequest.append('Specialty', selected.Specialty)

            const response = await axios.post(
                'http://192.168.100.5/Hospital/api/Doctor/CreateDoctor.php', //172.16.34.42
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
                                'https://depor.com/resizer/pU2cw5AVsAeDuCSRoNMh1QszXiY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HMBTNM3UYJCSRBD2MDIBTPU6X4.jpg',
                                }}
                            />
                        </Center>
            <FormControl isRequired isInvalid={'NameDoctor' in errors}>
                <FormControl.Label>Name </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                    color="black.400"
                    backgroundColor={"white"} 
                    borderRadius={30}
                    onChangeText={
                    value=>setData({
                    ...formData,
                    NameDoctor: value
                   })
                    }
                />
                 {'NameDoctor' in errors ?
                 <FormControl.ErrorMessage>{errors.NameDoctor}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the name
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'SurnamesDoctor' in errors}>
                <FormControl.Label>Lastname </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30}
                backgroundColor={"white"} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    SurnamesDoctor: value
                   })
                 }
                />
                  {'SurnamesDoctor' in errors ?
                 <FormControl.ErrorMessage>{errors.SurnamesDoctor}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        put the Last name
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl >
                <FormControl.Label>specialidad </FormControl.Label>
                <SelectList p={2} placeholder="seleccione una especialidad" 
                color="black.400"   borderRadius={30} 
                backgroundColor={"white"} 
                search={true}
                data={data}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                onSelect={() =>setSelected({
                    ...selected,
                    Specialty:selected
                })}
                />
                         
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
                    navigation.navigate('DoctorTab')
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
export default CreateDoctor