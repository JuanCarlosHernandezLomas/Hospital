import { View,Text, Center} from "native-base";
import React from "react";
import { Avatar } from 'react-native-elements';

const HomeUser=()=>{
    return(
        
        <View>
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
            }}>
            Perfil</Text>
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

        </View>        
    );
}
export default HomeUser
