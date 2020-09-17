import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

function Tabela({data}){
    return(
        <View style={styles.containerTable}>
            <Text style={styles.font}>{data.name}</Text>
        </View>
    );
}
export default function Infomation(){
    const table = [
        {key: '0', name: 'Abaixo de 17 Muito abaixo do peso'},
        {key: '1', name: 'Entre 17 e 18,49 Abaixo do peso'},
        {key: '2', name: 'Entre 18,50 e 24,99 Peso normal'},
        {key: '3', name: 'Entre 25 e 29,99 Acima do peso'},
        {key: '4', name: 'Entre 30 e 34,99 Obesidade I'},
        {key: '5', name: 'Entre 35 e 39,99 Obesidade II (severa)'},
        {key: '6', name: 'Acima de 40 Obesidade III (mórbida)'}
    ]
    return(
        <View style={styles.container}>
            <View style={styles.tableImc}>
                <Text style={styles.tableTitle}>Tabela IMC</Text>
                <FlatList
                data={table}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => <Tabela data={item} />}
                 />
            </View>
            <View style={styles.tableInfo}>
                <Text style={styles.font}>
                    O índice de massa corporal (IMC) é uma
                    medida internacional usada para calcular 
                    se uma pessoa está no peso ideal.
                    Desenvolvido pelo polímata Lambert 
                    Quételet no fim do século XIX, trata-se de 
                    um método fácil e rápido para a avaliação 
                    do nível de gordura de cada pessoa, sendo, 
                    por isso, um preditor internacional de 
                    obesidade adotado pela Organização 
                    Mundial da Saúde (OMS).
                </Text>
            </View>
        </View>
    );
}