import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import {ScrollView} from 'react-native';

import {
    Container,
    View,
    Top,
    Line,
    Title,
    Data,
    Row,
    FindBar,
    TextInput
} from './styles';

export default function NextBus({navigation}) {
  
  useEffect(() => {

  }, []);

  return (
   
    <ScrollView>
         
    <FindBar>
        <Icon  
            name='search'
            type='font-awesome'
            color='#48126a'
            size={20}>
        </Icon>
        <TextInput placeholder={'Pesquisar linha'} placeholderTextColor={'#000'} style={{marginBottom:5}}/>
    </FindBar>
    <Container>
        <Row>
            <Title>Linhas - Clique para mais detalhes:</Title>
            <Icon  
                name='bus'
                type='font-awesome'
                color='#48126a'
                size={22}>
            </Icon>
        </Row>
          
        <View>
            <Top>
                <Line>62 - Savassi / Hospitais - Parador</Line>
            </Top>
            <Data>Previsão: 10 minutos</Data>
            <Data>Ponto: Estação Ouro Minas</Data>
            <Data>Número de passageiros: 32</Data>
            <Data>Próximo: 15 minutos</Data>
        </View>
        <View>
            <Top>
                <Line>85 - Estação São Gabriel/Centro via Floresta</Line>
            </Top>
            <Data>Previsão: 5 minutos</Data>
            <Data>Ponto: Estação Ouro Minas</Data>
            <Data>Número de passageiros: 12</Data>
            <Data>Próximo: 25 minutos</Data>
        </View>
        <View>
            <Top>
                <Line>62 - Savassi / Hospitais - Parador</Line>
            </Top>
            <Data>Previsão: 10 minutos</Data>
            <Data>Ponto: Estação Ouro Minas</Data>
            <Data>Número de passageiros: 32</Data>
            <Data>Próximo: 15 minutos</Data>
        </View>
        <View>
            <Top>
                <Line>62 - Savassi / Hospitais - Parador</Line>
            </Top>
            <Data>Previsão: 10 minutos</Data>
            <Data>Ponto: Estação Ouro Minas</Data>
            <Data>Número de passageiros: 32</Data>
            <Data>Próximo: 15 minutos</Data>
        </View>
        <View>
            <Top>
                <Line>62 - Savassi / Hospitais - Parador</Line>
            </Top>
            <Data>Previsão: 10 minutos</Data>
            <Data>Ponto: Estação Ouro Minas</Data>
            <Data>Número de passageiros: 32</Data>
            <Data>Próximo: 15 minutos</Data>
        </View>
    </Container>
    </ScrollView>
  )
};