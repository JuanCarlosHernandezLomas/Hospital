import React from "react";
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl, Select} from "native-base";
import { Avatar } from 'react-native-elements'
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { useEffect } from "react";
import axios from "axios";



const Selectschedule=()=>{
    const navigation = useNavigation();
    const[formData,setData]=React.useState({})
    const [isLoading, setLoading] = React.useState();
    const [selected, setSelected]= React.useState({});
    const [user, setUser] = React.useState([]);
    const [Time, setTime] = React.useState([]);
    const [errors, setErrors] = React.useState({});



   useEffect(() => {
    setTimeout(() => {
        const response = axios.get(
            'http://192.168.100.5/Hospital/api/Doctor/AllDoctor.php',
            
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
                medico: response.data[0].medico,
                doctor: response.data[1].medico,
                doc: response.data[2].medico,
                med: response.data[3].medico,
            });
            

            
        })
    }, 100);
} ,[isLoading]);

useEffect(() => {
    setTimeout(() => {
        const response = axios.get(
            'http://192.168.100.5/Hospital/api/Admin/AllSchudeles.php',
            
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-control-Allow-origin": "*"
                },
            },
        ).then((response) => {
            console.log(response.data);
            setTime({
                ...Time,
                ho: response.data[0].horario,
                hora: response.data[1].horario,
                
            });
            

            
        })
    }, 100);
} ,[isLoading]);


const hora =[
    {key: '1', value: Time.ho},
    {key: '2', value: Time.hora},

    ];

const data =[
{key: '1', value: user.medico},
{key: '2', value: user.doctor},
{key: '3', value: user.doc},
{key: '4', value: user.med},
];
const day=[
    {key: 'L', value: 'Lunes'},
    {key: 'M', value: 'Martes'},
    {key: 'X', value: 'Miercoles'},
    {key: 'J', value: 'Jueves'},
    {key: 'V', value: 'Viernes'},
    {key: 'S', value: 'sabado'},
    {key: 'D', value: 'Domingo'},
    
]
const validate = () => {
    if(!formData.Doctor && !formData.Day && !formData.Time){
        setErrors({
            ...errors,
            Doctor: 'Doctor is required',
            Day: 'Day is required',
            Time:'Time is required',
        });
        return false;
    }
    else if (!formData.Doctor) {
        setErrors({
            ...errors,
            Doctor: 'Doctor is empty'
        });
        return false;
    } 
    if (!formData.Day) {
        setErrors({
            ...errors,
            Day: 'Day is empty'
        });
        return false;
    }
    if (!formData.Time) {
        setErrors({
            ...errors,
            Time: 'Time is empty'
        });
        return false;
    }
    setErrors({})
    return true;
};


const submit = async ()=>{
    console.log(selected)
    console.log(validate())
    if(validate()){
    setData({ ...formData, action: 'login' })
            const formDataforRequest = new FormData()
            formDataforRequest.append('Doctor', formData.Doctor)
            formDataforRequest.append('Day', formData.Day)
            formDataforRequest.append('Time', formData.Time)

            console.log(formDataforRequest)
            const response = await axios.post(
                'http://192.168.100.5/Hospital/api/Admin/SelectSchudeles.php', //172.16.34.42
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
                        <Text
                            style={{
                            fontSize: 20,
                            textAlign:"center",
                            marginTop: "20%"
                            }}
                        >
                         Horarios
                        </Text>
                        <FormControl isRequired isInvalid={'Doctor' in errors} >
                <FormControl.Label>Doctor </FormControl.Label>
                <SelectList p={2} placeholder="seleccione un doctor" 
                color="black.400"   borderRadius={30}  
                data={data}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                onSelect={() =>setData({
                    ...formData,
                    Doctor:selected
                })}
                />
               {'Doctor' in errors ?
                 <FormControl.ErrorMessage>{errors.Doctor}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        select a Doctor
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'Day' in errors}>
                <FormControl.Label>day </FormControl.Label>
                <SelectList p={2} placeholder="seleccione un dia" 
                color="black.400"  borderRadius={30} 
                data={day}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                onSelect={() =>setData({
                    ...formData,
                    Day:selected
                })}
                />
               {'Day' in errors ?
                 <FormControl.ErrorMessage>{errors.Day}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        select a Day
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'Time' in errors}>
                <FormControl.Label>horas </FormControl.Label>
                <SelectList p={2} placeholder="seleccione un dia" 
                color="black.400"  borderRadius={30} 
                data={hora}
                setSelected={setSelected}
                dropdownItemStyles={{backgroundColor: 'white'}}
                onSelect={() =>setData({
                    ...formData,
                    Time:selected
                })}
                />
               {'Time' in errors ?
                 <FormControl.ErrorMessage>{errors.Time}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        select a time 
                  </FormControl.HelperText>
                }
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2} 
                onPress={submit}  
                
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
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
}
export default Selectschedule