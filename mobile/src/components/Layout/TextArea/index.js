import React from 'react';
import { View } from 'react-native';

import { 
    Input,
    Label
 } from "./styles";

export default function LayoutInput(props){

    const { placeholder, onChangeText,keyboardType,numberOfLines, Text } = props;
    console.log(numberOfLines);
    return(
        <View>
            <Label>{ Text }</Label>
            <Input placeholder={placeholder} 
             multiline = {true}
             numberOfLines = {numberOfLines}
             keyboardType={keyboardType} />
        </View>
    );

};