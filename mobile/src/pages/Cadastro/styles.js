import React from 'react';
import styled from 'styled-components/native';

export const Body = styled.View`
    padding-top: 20px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
    width: 100%;
    height: 100%;
`;

export const ViewButton = styled.View`
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
`;

export const ViewForm = styled.View`
    margin-top: 25px;
    padding-left: 45px;
    position: relative;
    background-color:#FCFCFC;
    border-radius:10;
`;


export const Img = styled.Image`
    height: 170px;
    width: 170px;
    margin-left:70px;
    margin-top:90px;
    margin-bottom: 10px;
`;

export const Input =styled.TextInput`
    margin-top: 5px;
    margin-bottom:10px;
    padding-left: 0px;        
    width: 300px;
    height:40px;
    border-color: #fff;
    border-width: 2px;
    border-radius: 10;
    color: #000;
    background-color:#FFF;
    border-color: #444;
    padding-left: 5px;
`;

export const Br = styled.View`
    padding-top:5px;
    padding-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
    position: relative;
    width: 300px;
    height: 40px;
    background-color:#48126a;
	border-radius:28px;
	border:1px solid #ffffff;
    color:#ffffff;
    margin-bottom: 50px;

`;

export const TextButton = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:20px;
    padding-top:4px;
    margin-left:35%;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
`;

export const Label = styled.Text`
    font-family: Roboto;
    color: #48126a;
    font-size: 18px;
    font-weight: bold;
`;