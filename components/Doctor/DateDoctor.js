import { View, Text, Center, ScrollView,Input,VStack,Button, Box,FormControl } from "native-base";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Image } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';





const DateDoctor=()=>{
const headers=['Paciente','frecuencias','estatus'];
    const rows=[
        ['Maria','baja','Carcelacion'],
        ['Laura','Alta','bueno'],
        ['Luis','baja','bueno']
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
            Informacion de los Paciente</Text>
            <Table borderStyle={{borderWidth: 1,borderColor: '#00BFFF'}}>
                <Row data={headers}
                style={{
                    backgroundColor: '#87CEEB'
                }}
                height={40}
                flexArr={[1,1,1]}
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

export default DateDoctor;