import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";


const HomeDoctor=()=>{
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
    const formDataforRequest = new FormData()
    formDataforRequest.append('Name', formData.Name)
    formDataforRequest.append('LastName', formData.LastName)
    formDataforRequest.append('Schedule', formData.Schedule)


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
            <Input p={2} placeholder="enter you LastName" 
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
            <FormControl.Label> Time</FormControl.Label>
            <Input p={2} placeholder="enter you schedule" 
            color="black.400" borderRadius={30} 
            onChangeText={
                value=>setData({
                ...formData,
                Schedule: value
               })
             }
            />
            <FormControl.HelperText>
                nickname should contains atleast 6 characters
            </FormControl.HelperText>
        </FormControl>
        <FormControl >
            <FormControl.Label>specialidad </FormControl.Label>
            <SelectList p={2} placeholder="seleccione su especialidad" 
            color="black.400"   borderRadius={30}  
            data={data}
            setSelected={setSelected}
            dropdownItemStyles={{backgroundColor: 'white'}}
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
            onPress= {()=>navigation.navigate('CreateDoctor')}
        >
            Actualizar Datos
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
);
}
export default HomeDoctor
