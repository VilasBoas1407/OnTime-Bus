import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../components/Header';

import Loading from '../../components/Loading/index';
import Erro from '../../components/Error/index';

import Bus from '../../components/QuadroHorario/Bus/index';


export default function QuadroHorario({ navigation }) {

    const [loading,setLoading] = useState(false);
    const [erro,setErro] = useState(false);
    const [msgErro,setMsgErro] = useState('');


    return (
        <View>
            <Header navigation={navigation}/>
            <Bus/>
            <Loading loading={loading}/>
            <Erro loading={erro} msgErro={msgErro}/>
        </View>
    )
}