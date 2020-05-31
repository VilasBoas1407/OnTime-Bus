import React, { useState, useEffect } from 'react';
import { ImageBackground,TouchableOpacity, AsyncStorage  } from 'react-native';

import Loading from '../../components/Loading/index';
import Erro from '../../components/Error/index';

import {
  View,
  Logo,
  Div,
  Br,
  Label,
  Input,
  Button,
  TextLink,
  TextButton,
  DivCad,
  TextCenter
} from './styles';

import api from '../../services/index';

export default function Login({ navigation }) {


  const background = require('../../assets/img/bg-bus.jpg');

  const [loading,setLoading] = useState(false);
  const [erro,setErro] = useState(false);
  const [msgErro,setMsgErro] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function _storeData (data){
    try {
      const email = data.email;
      const nome = data.nome;
      await AsyncStorage.setItem('email',email);
      await AsyncStorage.setItem('nome',nome);
    } catch (error) {
      console.log(error);
    }
  };

 async function Login (){
    setLoading(true);
    
    const DS_EMAIL = email;
    const DS_SENHA = senha;


    const userData = { DS_EMAIL, DS_SENHA };
    console.log(userData);

   

    const response = await api.get('/user',{
      params : userData
    });
    const user = response.data;
    if(user.valid){
     _storeData(user.userData[0]);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Home');
      }, 2000);
    }
    else {
      console.log(user);
      setLoading(false);
      setErro(true);
      setMsgErro(user.msg);
      setTimeout(() => {
        setErro(false);
      }, 3000);
      
    }
  }

  function goToRegister(){
    navigation.navigate('Cadastro');
  }
  useEffect(() => {
  }, []);


  return (
     
        <ImageBackground source={background}  style={{width: '100%', height: '100%'}} >  
          <View>
              <Logo source={require('../../assets/icon.png')}/>
              <Br/>
              <Div>
                  <Br/>
                  <Input value={email} onChangeText={setEmail} placeholder='E-mail' placeholderTextColor='#424949'/>
                  <Input value={senha} onChangeText={setSenha} secureTextEntry placeholder='Senha' placeholderTextColor='#424949'/>            
                  <Br/>
                  <Button onPress={Login}>
                    <TextButton>Login</TextButton>
                  </Button>
                  <Br/>
                <TextLink>Esqueceu sua senha ?</TextLink>
              </Div>
              <DivCad> 
                <TouchableOpacity onPress={goToRegister}>
                  <TextCenter>Criar Conta</TextCenter>
                </TouchableOpacity>
              </DivCad>

              <Loading loading={loading}/>
              <Erro loading={erro} msgErro={msgErro}/>
          </View>
        </ImageBackground>
  );
}
