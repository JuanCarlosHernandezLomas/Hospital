import { View,Text,ScrollView } from "native-base";
import React from "react";
import { useEffect } from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from "axios";

const ListDoctor=()=>{

    const [isLoading, setLoading] = React.useState();
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            const response = axios.get(
                'http://192.168.100.5/Hospital/api/Doctor/DateDoctor.php',
                
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                }
            ).then((response) => {
                console.log(response.data);
                setLoading(false);
                setUser({
                    ...user,
                    cupos: response.data[0].cupos,
                    dia: response.data[0].dia,
                    especialidad: response.data[0].especialidad,
                    hora: response.data[0].horario,
                    medico: response.data[0].medico,
                    cu: response.data[1].cupos,
                    di: response.data[1].dia,
                    es: response.data[1].especialidad,
                    ho: response.data[1].horario,
                    me: response.data[1].medico,
                    cup: response.data[2].cupos,
                    dias: response.data[2].dia,
                    esp: response.data[2].especialidad,
                    hor: response.data[2].horario,
                    medi: response.data[2].medico,
                    
                });
                
            })
        }, 100);
    }, [isLoading]);


    const headers=['Medico','Horario','dias','especialidad','espacios'];
    const rows=[
        [user.me,user.ho,user.di,user.es,user.cu],
        [user.medi,user.hor,user.dias,user.esp,user.cup],
        [user.medico,user.hora,user.dia,user.especialidad,user.cupos]
    ]
    
    
    return(
        <ScrollView backgroundColor={"#CECEE5"}>
        <View>
            <Text
             style={{
                fontSize: 20,
                textAlign:"center",
                marginTop: "20%"
            }}>
            Doctors</Text>
            <Table borderStyle={{borderWidth: 1,borderColor: '#00BFFF'}}>
                <Row data={headers}
                style={{
                    backgroundColor: '#87CEEB'
                }}
                height={40}
                flexArr={[0.7,0.6,0.5,1,0.6]}
                textStyle={{
                    textAlign: 'center'
                }}
                />
                <TableWrapper>
                    <Rows data={rows}
                    heightArr={[54,54,54,54,,54,54]}
                    flexArr={[0.7,0.6,0.5,1,0.6]}
                    textStyle={{
                        textAlign: 'center'
                    }}
                    style={{
                        backgroundColor: 'white',
                    }}/>
                </TableWrapper>
            </Table>
        </View> 
        </ScrollView>       
    );
};

export default ListDoctor;