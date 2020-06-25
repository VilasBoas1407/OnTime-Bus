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
    const [sobrenome,setSobreNome] = useState(null);
    const [email,setEmail] = useState(null);
    const [senha,setSenha] = useState(null);
    const [confirm_senha,setConfirm] = useState(null);

    const [loading,setLoading] = useState(false);
    //#endregion 
    
    async function register(){

        setLoading(true);
        const user = {};
        user.DS_NOME = nome;
        user.DS_SOBRENOME = sobrenome;
        user.DS_EMAIL = email;
        user.DS_SENHA = senha;
        user.DS_SENHA_CONF = confirm_senha;

        await api.post('/user', { user })
        .then(function(response){
            console.log(response);
            console.log('salvo com sucesso')
        }); 
        setLoading(false);
        //await AsyncStorage.setItem('userData', user.data.userData[0]);
        navigation.navigate('Home');
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
                            
                                <Img source={require('../../assets/img/amigo.png')} height={100}/>
                                <Label>Bem vindo, vamos fazer seu cadastro!</Label>
                                <Input value={nome} onChangeText={setNome} placeholder='Nome' placeholderTextColor='#424949'/>
                                <Input value={sobrenome} onChangeText={setSobreNome} placeholder='Sobrenome' placeholderTextColor='#424949'/>
                                <Input value={email} onChangeText={setEmail} placeholder='E-mail' placeholderTextColor='#424949'/>
                                <Input value={senha} onChangeText={setSenha} secureTextEntry placeholder='Senha' placeholderTextColor='#424949'/>
                                <Input value={confirm_senha} onChangeText={setConfirm} secureTextEntry placeholder='Confirme sua senha' placeholderTextColor='#424949'/>            
                                
                                <Br/>

                                <Button onPress={register}>
                                    <TextButton>Criar Conta</TextButton>
                                </Button> 
                        </ViewForm>
                        <Loading loading={loading}/>
                    </KeyboardAvoidingView>
                </Body>
        </SafeAreaView>
    </ImageBackground>
        
    );
}