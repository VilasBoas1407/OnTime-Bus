import React, { useState , useEffect, useRef } from 'react';

import {
    SafeAreaView,
    KeyboardAvoidingView,
    ImageBackground,
    Text
 } from 'react-native';

import Loading from '../../components/Loading/index';

import api from '../../services/index';
import { Icon } from 'react-native-elements';

import {
    Body,ViewButton,ViewForm,Br,Img,
    Input,Button,TextButton,Label

} from './styles';

export default function Cadastro({ navigation }){
    
    const background = require('../../assets/img/bg-bus.jpg');
    
    //#region Declaração de Variavéis
    
    const [nome,setNome] = useState(null);
    const [email,setEmail] = useState(null);
    const [senha,setSenha] = useState(null);
    const [confirm_senha,setConfirm] = useState(null);

    const [loading,setLoading] = useState(false);
    //#endregion 
    
    function register(){

        setLoading(true);
        const userData = {};
        userData.nome = nome;
        userData.email = email;
        userData.senha = senha;
        userData.confirm_senha = confirm_senha;
        setLoading(false);
        
    }
    function goBack(){
        console.log('Oi');
        navigation.navigate('Login');
    }

    useEffect(() => {
    }, []);

    return(
       
    <ImageBackground source={background}  style={{width: '100%', height: '100%'}} >  
        <SafeAreaView>    
                <Body>
                    <KeyboardAvoidingView  behavior="position" enabled>
                        <ViewForm>
                            <ViewButton>
                                <Icon  
                                    name='arrow-left'
                                    type='font-awesome'
                                    color='#48126a'
                                    size={32}
                                    onPress={goBack}
                                />
                            </ViewButton>
                            
                                <Img source={require('../../assets/img/amigo.png')}/>
                                <Label>Bem vindo, vamos fazer seu cadastro!</Label>
                                <Input value={nome} onChangeText={setNome} placeholder='Nome' placeholderTextColor='#424949'/>
                                <Input value={email} onChangeText={setEmail} placeholder='E-mail' placeholderTextColor='#424949'/>
                                <Input value={senha} onChangeText={setSenha} secureTextEntry placeholder='Senha' placeholderTextColor='#424949'/>
                                <Input value={confirm_senha} onChangeText={setConfirm} secureTextEntry placeholder='Confirme sua senha' placeholderTextColor='#424949'/>            
                                
                                <Br/>

                                <Button onPress={register}>
                                    <TextButton>Criar Conta</TextButton>
                                </Button> 
                        </ViewForm>
                    </KeyboardAvoidingView>
                </Body>
        </SafeAreaView>
    </ImageBackground>
        
    );
}