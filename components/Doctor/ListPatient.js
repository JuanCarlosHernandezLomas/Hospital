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
                'http://192.168.100.5/Hospital/api/Patient/AllPatient.php',
                
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
                    paciente: response.data[0].paciente,
                    cita: response.data[0].cita,
                    NSS: response.data[0].NSS,
                    Dia: response.data[0].Dia,
                    Medico: response.data[0].Medico,
                    pa: response.data[1].paciente,
                    ci: response.data[1].cita,
                    NUM: response.data[1].NSS,
                    Di: response.data[1].Dia,
                    Me: response.data[1].Medico,
                    paci: response.data[2].paciente,
                    citas: response.data[2].cita,
                    NS: response.data[2].NSS,
                    Dias: response.data[2].Dia,
                    Medicos: response.data[2].Medico,
                    
                });
                
            })
        }, 100);
    }, [isLoading]);
const headers=['Paciente','Hora','dia','Doctor',"NSS"];
    const rows=[
        [user.paciente,user.cita,user.Dia,user.Medico,user.NSS],
        [user.pa,user.ci,user.Di,user.Me,user.NUM],
        [user.paci,user.citas,user.Dias,user.Medicos,user.NS]
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
                flexArr={[1,1,1,1,1]}
                textStyle={{
                    textAlign: 'center'
                }}
                />
                <TableWrapper>
                    <Rows data={rows}
                    heightArr={[54,54,54,54,54,54]}
                    flexArr={[1,1,1,1,1]}
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