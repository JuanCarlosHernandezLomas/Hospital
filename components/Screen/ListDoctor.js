import { View,Text,ScrollView } from "native-base";
import React from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const ListDoctor=()=>{

    const headers=['Medico','Horario','dias','especialidad','espacios','#'   ];
    const rows=[
        ['Maria','8:00-3:00','L-V','Cardiologo','20','presionar'],
        ['Laura','12:00-5:00','L-x','Medico General','10','presionar'],
        ['Luis','3:00-8:00','V','Neurologo','5','presionar']
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
                flexArr={[0.5,0.7,0.5,1,0.6,0.6]}
                textStyle={{
                    textAlign: 'center'
                }}
                />
                <TableWrapper>
                    <Rows data={rows}
                    heightArr={[28,28,28,28,,28,28]}
                    flexArr={[0.5,0.7,0.5,1,0.6,0.6]}
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