import { View,Text,Dimension, ScrollView } from "native-base";
import React from "react";
import Caroucel from "../Carucel";


const Home=()=>{
    const imagenes=["https://cloudfront-us-east-1.images.arcpublishing.com/gruponacion/3ATFV4KVP5HYTL2WSBIXVN4SO4.jpg",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-good-doctor-temporada-4-1635935101.jpeg",
"https://vader.news/__export/1613522525685/sites/gadgets/img/2021/02/16/fiona-gubelmann-in-the-good-doctor-season-3-episode-18.jpg_1604209128.jpg",
"https://starrymag.com/wp-content/uploads/2020/02/The-Good-Doctor-S03E14-660x400.jpg"];

    return(
        
       <ScrollView>
        <Caroucel
            images={imagenes}
            height={250}
            width={150}
        />
       </ScrollView>      
    );
};

export default Home;