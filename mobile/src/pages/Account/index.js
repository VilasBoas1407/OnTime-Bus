import React, { useState } from 'react';
import { View,CheckBox } from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Layout/Input';


import {
    Title,
    Body,
    Button,
    TextButton
} from './styles';

export default function Account({ navigation }){
    const [teste,setTeste] = useState('');

    function print(){
        console.log("Valor:" + teste)
    }

    return (
        <View>
             <Header navigation={navigation}/>
            <Body>
                <Title>Altere seus dados cadastrais:</Title>
                <Input placeholder={'Nome'} Text={' Nome'}/>
                <Input placeholder={'E-mail'} Text={' E-mail'}/>
                <Input placeholder={'Telefone'} Text={' Telefone '} onChangeText={setTeste} value={teste}/> 

                <Title>Configurações:</Title>
                <CheckBox
                    center
                    title='Click Here'
                    
                />
                <Button>
                    <TextButton>Salvar</TextButton>
                  </Button>
            </Body>


        </View>
    );
}