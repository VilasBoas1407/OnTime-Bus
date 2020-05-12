import React, { useState , useEffect, useRef } from 'react';

import {
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text
 } from 'react-native';
import Loading from '../../components/Loading/index';

import api from '../../services/index';
import { Icon } from 'react-native-elements';

import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Forms/Input/index';
import {
    Body,
    ViewButton,
    ViewForm
} from './styles';
export default function Cadastro({ navigation }){

    const formRef = useRef(null);
    function goBack(){
        console.log('Oi');
        navigation.navigate('Login');
    }
    async function handleSubmit(){
        console.log('COE');
    }

    useEffect(() => {
    }, []);

    return(
        <SafeAreaView>
            <KeyboardAvoidingView>
                <Body>
                    <ViewButton>
                        <Icon  
                            name='arrow-left'
                            type='font-awesome'
                            color='#48126a'
                            size={32}
                            onPress={goBack}
                        />
                    </ViewButton>
                    <ViewForm>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Text>Oi</Text>
                            <Input name="name"/>
                            <Input type="email" name="email"/>

                            <Scope path="address">
                                <Input name="street" />
                                <Input name="neighborhood"/>
                                <Input name="city"/>
                                <Input name="state"/>
                                <Input name="number"/> 
                            </Scope>
                        </Form>
                    </ViewForm>
                </Body>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}