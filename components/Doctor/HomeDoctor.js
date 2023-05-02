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
                    <Text mt="2" fontSize="25" color="#1b396a" fontWeight="bold" textAlign="center">{"   "}My Profile</Text>
                    <Text fontSize="20" fontWeight="bold" mt="3" >
                        {"   "}Name :
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> Francisco </Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3">
                        {"   "}Last Name:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> Loera </Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Time:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black"> 8:00-22:00</Text>
                    </Text>
                    <Text fontSize="20" fontWeight="bold" borderTopWidth="1" mt="3" >
                        {"   "}Specialidad:
                        <Text color="#1b396a" textAlign="left" fontSize="18" fontWeight="black">Neurologo</Text>
                    </Text>
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
    </ScrollView>
);
}
export default HomeDoctor
