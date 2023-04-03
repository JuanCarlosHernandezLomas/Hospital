import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
;
import axios from "axios";



const CreateDoctor=()=>{
    const navigation = useNavigation();
        const[formData,setData]=React.useState({})
        const [selected, setSelected]= React.useState("");
        
        const data =[
            {key: '1', value: 'Cardiologo'},
            {key: '2', value: 'Neurologo'},
            {key: '3', value: 'Traumatologo'},
            {key: '4', value: 'Medico General'},
        ];

    const submit = async ()=>{
        console.log("Submitted", formData)
        setData({ ...formData, action: 'login' })


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
                                'https://depor.com/resizer/pU2cw5AVsAeDuCSRoNMh1QszXiY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HMBTNM3UYJCSRBD2MDIBTPU6X4.jpg',
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
                <FormControl.Label>specialidad </FormControl.Label>
                <SelectList p={2} placeholder="seleccione una especialidad" 
                color="black.400"   borderRadius={30}  
                data={data}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                onSelect={setSelected =>setSelected({
                    ...formData,
                    specialilidad:setSelected
                })}
                />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
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
    );
}
export default CreateDoctor