
import { View,Text, Center,ScrollView,Input,VStack,Button, Box,FormControl} from "native-base";
import {TextInput} from "react-native"
import React from "react";


const QuestionSreen=()=>{
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
                Question
            </Text>
            <TextInput
            backgroundColor = "white"
        editable
        multiline
        numberOfLines={4}
        maxLength={100}
        color="#1b396a" 
         fontWeight="black"
        style={{padding: 100}}
      />
        <Button
                mt="2"
                size="lg"
                backgroundColor="#1b396a"
                borderRadius={2}   
                
        >
            Enviar pregunta
        </Button>
            
            </VStack> 
            </Box>      
        </Center>
        </ScrollView>
            
    );
};

export default QuestionSreen;