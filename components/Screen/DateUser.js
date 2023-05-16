import { View, Text, Center, ScrollView,Input,VStack,Button, Box,FormControl } from "native-base";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Image } from 'react-native-elements';
import { Alert } from "react-native";
import { useEffect } from "react";
import axios from "axios";



const DateUser=()=>{

        const[formData,setData]=React.useState({})
        const [isLoading, setLoading] = React.useState();
        const [selected, setSelected]= React.useState({});
        const [errors, setErrors] = React.useState({});
        const [user, setUser] = React.useState([]);
        

        const validate = () => {
           if(!formData.Doctor && !formData.Day && !formData.Time && !formData.NSS ){
               setErrors({
                   ...errors,
                   Doctor: 'Name is required',
                   Day: 'Last is required',
                   Time: 'Time is required',
                   NSS: 'NSS is required'
                   
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
                Time: 'Day is empty'
            });
            return false;
        }
        if (!formData.NSS) {
            setErrors({
                ...errors,
                NSS: 'NSS is empty'
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

    const submit = async ()=>{
        
            const formDataforRequest = new FormData()
            formDataforRequest.append("NSS",formData.NSS)
            const response = await axios.post(
                'http://192.168.100.5/Hospital/api/Patient/SelectNss.php',
                    formDataforRequest,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            "Access-control-Allow-origin": "*"
                        },
                        transformRequest: formData => formDataforRequest,
                    }
            ).then((response) =>{
            console.log(formDataforRequest)
            console.log(response.data);
            setUser({
                ...user,
                paciente: response.data[0].Id,
            });
            console.log(user.paciente)
            console.log(validate())
            if(validate()){     
            formDataforRequest.append('Doctor', formData.Doctor)
            formDataforRequest.append('Day', formData.Day)
            formDataforRequest.append('Time', formData.Time)
            formDataforRequest.append('paciente', response.data[0].Id)
            console.log(formDataforRequest)
            const respuesta =  axios.post(
                'http://192.168.100.5/Hospital/api/Patient/CreateDate.php',
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

            )

    }


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

    return(
        <ScrollView backgroundColor={"#CECEE5"}>
        <Center w="100%">
            <Box px="1" py="8" w="90%" maxW="290">
            <VStack space={2} mt="2">
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
                }}>
                Cita
            </Text>
            <Center>
                <Image 
                source={{ uri: 'https://us.123rf.com/450wm/ahasoft2000/ahasoft20001602/ahasoft2000160201715/52102515-el-doctor-calendario-icono-larga-sombra-el-estilo-es-un-s%C3%ADmbolo-de-luz-plana-con-%C3%A1ngulos.jpg?ver=6' }}
                style={{ width: 150, height: 150 }}
                backgroundColor={"#CECEE5"}/>
            </Center>
            <FormControl isRequired isInvalid={'Doctor' in errors}>
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
                        select a doctor
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
                <FormControl.Label>hora</FormControl.Label>
                <Input p={2} placeholder="ingrese una hora" 
                color="black.400" backgroundColor={"white"} 
                borderRadius={30} 
                onChangeText={
                    value=>setData({
                    ...formData,
                    Time: value
                   })
                    }
                />
               {'Time' in errors ?
                 <FormControl.ErrorMessage>{errors.Time}</FormControl.ErrorMessage> :
                 <FormControl.HelperText>
                        enter an hour
                  </FormControl.HelperText>
                }
            </FormControl>
            <FormControl isRequired isInvalid={'NSS' in errors}>
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" backgroundColor={"white"} 
                borderRadius={30} 
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
                        enter an NSS
                  </FormControl.HelperText>
                }
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#6495ED"
                borderRadius={2}   
                onPress={submit}
        >
            Generar cita 
        </Button>            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
    );
};

export default DateUser