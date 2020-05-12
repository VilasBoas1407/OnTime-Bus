import React, { useState, useEffect } from 'react';
import { ImageBackground,TouchableOpacity, AsyncStorage  } from 'react-native';

import Loading from '../../components/Loading/index';
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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  

 async function Login (){
    
    const DS_EMAIL = email;
    const DS_SENHA = senha;


    const userData = { DS_EMAIL, DS_SENHA };
    console.log(userData);

    setLoading(true);

    const response = await api.get('/user',{
      params : userData
    });
    const user = response.data;
    if(user.data.valid){
      console.log(user.data.userData[0]);
      //await AsyncStorage.setItem('userData', user.data.userData[0]);
      setLoading(false);
      navigation.navigate('Home');
    }
    else {
      console.log('Usuario inválido!');
      setLoading(false);
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
              </Div>
              <Br/>
              <TextLink>Esqueceu sua senha ?</TextLink>
              <DivCad> 
                <TouchableOpacity onPress={goToRegister}>
                  <TextCenter>Criar Conta</TextCenter>
                </TouchableOpacity>
              </DivCad>
              <Loading loading={loading}/>
          </View>
        </ImageBackground>
  );
}
