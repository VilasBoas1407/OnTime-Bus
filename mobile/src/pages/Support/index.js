import React, { useState } from 'react';
import { View, CheckBox } from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Layout/Input';
import Textarea from '../../components/Layout/TextArea';

import {
    Title,
    Body,
    Button,
    TextButton,
    Label,
    Row
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
                <Title>Aproveite esse espaço para dar sua opnião:</Title>
                <Input placeholder={'Nome'} Text={' Nome'}/>
                <Input placeholder={'E-mail'} Text={' E-mail'}/>
                <Input placeholder={'Telefone'} Text={' Telefone '} onChangeText={setTeste} value={teste}/> 
                <Textarea Text={'Escreva aqui: '} numberOfLines={6}/>
                <Button>
                    <TextButton>Salvar</TextButton>
                  </Button>
            </Body>
        </View>
    );
}