import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import styles from './styles';

export default function Home(){
    const [weight, setWeight] = useState('');
    const [Height, setHeight] = useState('');
    const [imc, setImc] = useState('00.00');
    const [MYAlert, setMyAlert] = useState('Bem-vindo');
    const [table, setTable] = useState('Entre 18.50 e 24.99 pesso normal')

    async function handleCalc(){
        const newImc = (weight / (Height * Height)).toFixed(2)
        
        if(weight === '' || Height === '' || newImc === 'NaN' || newImc === '0.00'){
            Alert.alert(
                'Ops!',
                'Preecha corretamente todos os campos.\nEx:\nMassa 70\nAltura 1,72',
            )
            setImc('00.00');
            return;
        }
        else if(newImc < 17.00){
            setMyAlert('Muito abaixo do peso')
            setTable('Abaixo de 17 Muito abaixo do peso');
        }
        else if(newImc >= 17.00 && newImc <= 18.49){
            setMyAlert('Abaixo do peso');
            setTable('Entre 17 e 18,49 Abaixo do peso');
        }
        else if(newImc >= 18.50 && newImc <= 24.99){
            setMyAlert('Parabéns, Você está em seu peso ideal!');
            setTable('Entre 18,50 e 24,99 Peso normal');
        }
        else if(newImc >= 25.00 && newImc <= 29.99){
            setMyAlert('Acima do peso');
            setTable('Entre 25 e 29,99 Acima do peso');
        }
        else if(newImc >= 30.00 && newImc <= 34.99){
            setMyAlert('Obesidade I');
            setTable('Entre 30 e 34,99 Obesidade I');
        }
        else if(newImc >= 35.00 && newImc <= 39.99){
            setMyAlert('Obesidade II (Severa)');
            setTable('Entre 35 e 39,99 Obesidade II (severa)');
        }
        else if(newImc >= 40.00){
            setMyAlert('Obesidade III (mórbida)');
            setTable('Acima de 40 Obesidade III (mórbida)');
        }
        setImc(newImc);
        Keyboard.dismiss();
    }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder='MASSA'
                style={styles.inputPasta}
                textAlign='center'
                keyboardType='numeric'
                placeholderTextColor='#888888'
                onChangeText={(event) => setWeight(event.replace(',', '.'))}
                 />
                
                <TextInput placeholder='ALTURA'
                style={styles.inputHeight}
                textAlign='center'
                keyboardType='numeric'
                placeholderTextColor='#888888'
                onChangeText={(event) => setHeight(event.replace(',', '.'))}
                 />
            </View>
            <TouchableOpacity style={styles.Button}
            onPress={handleCalc}>
                <Text style={styles.ButtonText}>Calcular</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Seu IMC</Text>
            <Text style={styles.result}>{imc}</Text>
            <Text style={styles.alert}>{MYAlert}</Text>
            <View style={styles.tableView}>
                <Text style={styles.tableText}>{table}</Text>
            </View>
        </View>
    );
}