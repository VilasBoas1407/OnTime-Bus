import React,{ useState } from 'react';
import { Modal,TouchableOpacity,AsyncStorage} from 'react-native';
import {  Background,View, Text,Img } from './styles';



export default function Loader(props) {
  let { loading,msgErro,...attributes } = props;
  if(msgErro == null)
    msgErro = "Oops!Ocorreu um error inesperado!";

    function closeModal(){
      console.log("Eai");
    }
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}>
        <Background />
          <View>
            <Img source={require('../../assets/icon/erro.png')}/>
            <Text style={{color:'red',fontWeight:'bold'}}>Atenção!</Text>
            <Text style={{paddingBottom:10,paddingTop:10}}>{msgErro}</Text>
          </View>
    </Modal>
  )
}