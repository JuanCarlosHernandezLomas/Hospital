import React from "react";
import { Container, Center, Heading, Text, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView } from "native-base";
import { Icon } from "native-base";
import { G, Path } from "react-native-svg";
const NativeBaseIcon = () => {
  return (
    <ScrollView>
        <Center w="100%">
            
            <Box>
                <Text color="#1b396a" fontWeight="semibold" fontSize="2xl" style={{ textAlignVertical: "center", textAlign: "center", }}>TecNM{"\n"}Campus Aguascalientes</Text>
            </Box>
            <Text color="#1b396a" fontWeight="semibold" fontSize="15">Register</Text>
            <Box px="1" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={'email' in errors}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input p={2} placeholder="example@mail.com" onChangeText={value => setFormData({
                            ...formData,
                            email: value
                        })} borderRadius={30} />
                        {'email' in errors ?
                            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                                Enter the email
                            </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'pass' in errors}>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" p={2} placeholder="Mora than 8 caracters" onChangeText={value => setFormData({
                            ...formData,
                            pass: value
                        })} borderRadius={30} />
                        {'pass' in errors ?
                            <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                                The password must have a min of 8, one Capital and One special character
                            </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'name' in errors}>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input placeholder="Nombre" onChangeText={value => setFormData({
                            ...formData,
                            name: value
                        })} borderRadius={30} />
                        {'name' in errors ?
                            <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                                Just your first name
                            </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'lastname' in errors}>
                        <FormControl.Label>Lastname</FormControl.Label>
                        <Input placeholder="Apellido" onChangeText={value => setFormData({
                            ...formData,
                            lastname: value
                        })} borderRadius={30} />
                        {'lastname' in errors ?
                            <FormControl.ErrorMessage>{errors.lastname}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                                Just yout lastname
                            </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl isRequired isInvalid={'controlNumber' in errors}>
                        <FormControl.Label>Control number</FormControl.Label>
                        <Input placeholder="00000000" onChangeText={value => setFormData({
                            ...formData,
                            controlNumber: value
                        })} borderRadius={30} />
                        {'controlNumber' in errors ?
                            <FormControl.ErrorMessage>{errors.controlNumber}</FormControl.ErrorMessage> :
                            <FormControl.HelperText>
                                Enter the controlNumber of your school
                            </FormControl.HelperText>
                        }
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Major</FormControl.Label>
                        <SelectList setSelected={setSelected} data={data} placeholder="Select major" onSelect={() => alert(selected)} search={false} />
                    </FormControl>
                    <Button 
                        mt="2"
                        size="lg"
                        backgroundColor="#1b396a"
                        borderRadius={30}
                        onPress={onSubmit} 
                        >  
                        Sign in
                    </Button>
                    <Link _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} onPress={() => { navigation.navigate("Login") }}>
                        I have an account
                    </Link>
                </VStack>
            </Box>
        </Center>
    </ScrollView>
  );
};

export default NativeBaseIcon;
