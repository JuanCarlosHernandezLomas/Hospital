import { View,Text,ScrollView} from "native-base";
import React from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const ListPatient=()=>{
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