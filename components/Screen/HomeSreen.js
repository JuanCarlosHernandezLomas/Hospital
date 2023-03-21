import React, { useState } from "react";
import { Dimensions,StyleSheet,View,Text, ScrollView, SafeAreaView, Image } from "react-native";

const images = [
    'https://static.wikia.nocookie.net/the-good-doctor/images/b/b1/101Hospital.png/revision/latest?cb=20171120221941',
    'https://starrymag.com/wp-content/uploads/2020/02/The-Good-Doctor-S03E14-660x400.jpg',
    'https://img.betaseries.com/BHls3axNciqmyj1au1YDCvAAiD8=/500x282/smart/https%3A%2F%2Fpictures.betaseries.com%2Fbanners%2Fepisodes%2F15549%2Fd883862e3f9bc81333a24eb681671ccd.jpg',
    'https://quenoticias.com/wp-content/uploads/2022/10/doctora-lim-the-good-doctor-temporada-6-400x240.jpg',


]

const  WIDTH = Dimensions.get('window').width;
const  HEIGHT = Dimensions.get('window').height;


const Home=()=>{

    const [imgActivate, setimgActivate]=useState(0);

    onchange =(nativeEvent)=>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x/ nativeEvent.layoutMeasurement.width);
            if (slide != imgActivate){
                setimgActivate(slide);
            }
        }

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ScrollView 
                    onScroll={({nativeEvent})=>onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                     images.map((e,index)=>
                        <Image
                            key={e}
                            resizeMode='stretch'
                            style={styles.wrap}
                            source={{uri: e}}
                    
                         />
                     )
                     }
                 </ScrollView>
                 <View style={styles.wrapDot}>
                    {
                        images.map((e, index)=>
                        <Text
                        key={e}
                        style={imgActivate == index ? styles.docActivate: styles.dot}
                        >
                            ●
                        </Text>
                        )
                    }
                 </View>
            </View> 
        </SafeAreaView>       
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: "#CECEE5",
        flex: 1,
        
        
        
        

    },
    wrap:{
        marginTop: '5%',
        width: WIDTH,
        height: HEIGHT *0.25,
       
    },
    wrapDot:{
        marginTop: '105%',
        position:'absolute',
        bottom: 0,
        flexDirection:'row',
        alignSelf: 'center'

    },
    docActivate:{
        margin: 3,
        color: 'black',
    },
    dot:{
        margin: 3,
        color: '#888'
    },
    text:{
        position: 'absolute',
        right:  '50%',
        top: '55%',
        color: "white",
        fontSize: 20
        
    },
    texts:{
        position: 'absolute',
        left:  '20%',
        top: '60%',
        color: "white",
        fontSize: 20
        
    }
});


export default Home;