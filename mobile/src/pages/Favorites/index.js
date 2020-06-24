import React, { useState,useEffect } from 'react';
import { Text,View } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Erro from '../../components/Error';
import Bus from '../../components/Favorite_Bus';

import { 
    Body,
    FindBar, 
    Container,
    Row,
    Title,
    TextInput
} from './styles';

export default function Favorites({ navigation }){
    console.log(navigation.openDrawer);
    const [titulo,setTitulo] = useState('');

    useEffect(() => {
        setTitulo('Linhas Favoritas');
        console.log(titulo);
    }, []);

    return(
        <View>
            <Header navigation={navigation} titulo={titulo} />
            <Body>         
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
                        <Title>Linhas Favoritas :</Title>
    
                    </Row>
                    <Row>
                        <Bus/>
                    </Row>
                </Container>

            </Body>
        </View>
    )
}
