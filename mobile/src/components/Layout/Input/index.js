import React from 'react';
import { View } from 'react-native';

import { 
    Input,
    Label
 } from "./styles";

export default function LayoutInput(props){

    const { placeholder, onChangeText,keyboardType, Text } = props;

    return(
        <View>
            <Label>{ Text }</Label>
            <Input placeholder={placeholder} 
            onChangeText={onChangeText}
            keyboardType={keyboardType} />
        </View>
    );

};