import { View,Text,ScrollView} from "native-base";
import React from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useEffect } from "react";
import axios from "axios";


const ListPatient=()=>{

    
    const [isLoading, setLoading] = React.useState();
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            const response = axios.get(
                'http://192.168.100.5/Hospital/api/Doctor/SelectDoctor.php',
                
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "Access-control-Allow-origin": "*"
                    },
                }
            ).then((response) => {
                console.log(response.data[0]);
                setLoading(false);
                setUser({
                    ...user,
                    nombre: response.data[0].cupos,
                    Apellido: response.data[0].dia,
                    especialidad: response.data[0].especialidad,
                    hora: response.data[0].horario,
                    medico: response.data[0].medico,
                    
                });
                
            })
        }, 100);
    }, [isLoading]);
const headers=['Paciente','Hora','dia','estatus'];
    const rows=[
        ['Maria','8:30','M','Carcelacion'],
        ['Laura','4:00','L','bueno'],
        ['Luis','3:40','V','bueno']
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
            Paciente</Text>
            <Table borderStyle={{borderWidth: 1,borderColor: '#00BFFF'}}>
                <Row data={headers}
                style={{
                    backgroundColor: '#87CEEB'
                }}
                height={40}
                flexArr={[1,1,1,1]}
                textStyle={{
                    textAlign: 'center'
                }}
                />
                <TableWrapper>
                    <Rows data={rows}
                    heightArr={[28,28,28,28,,28,28]}
                    flexArr={[1,1,1,1]}
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

export default ListPatient;