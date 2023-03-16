import { View,Text, Center} from "react-native";
import React from "react";
import { Avatar } from 'react-native-elements';



const CreateUser=(navigation)=>{
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
                }}>
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
            <FormControl >
                <FormControl.Label>Name </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Lastname </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Direcction </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>Phone </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} />
                <FormControl.HelperText>
                    nickname should contains atleast 6 characters
                </FormControl.HelperText>
            </FormControl>
            <FormControl >
                <FormControl.Label>NSS </FormControl.Label>
                <Input p={2} placeholder="enter you name" 
                color="black.400" borderRadius={30} />
                <FormControl.HelperText>
                    Nss should contains 12 characters
                </FormControl.HelperText>
            </FormControl>
            <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                onPress= {()=>{
                    navigation.navigation('HomeUser')
                }}
        >
            Editar
        </Button>
            </ScrollView>
            </VStack> 
            </Box>      
        </Center>
    );
}
export default CreateUser