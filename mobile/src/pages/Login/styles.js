import React from 'react'
import styled from 'styled-components/native'

//#region  Views

export const View = styled.View`
    width:100%;
    margin-left:25px;
    margin-right:10;
`;


export const Div = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
    width: 810px;
    padding-bottom: 20%;
`;

export const DivCad = styled.View`
    margin-left: -6%;
    height: 80px;
    width: 100%;
    background-color:#48126a;
    border-radius: 2;
    position:relative;
    margin-bottom: 10%;
    width:101%;
`;

export const Br = styled.View`
    padding-top:5px;
    padding-bottom: 10px;
`;

//#endregion

//#region  Text Components

export const Title = styled.Text`
    font-family: Roboto;
    color : #000;
    font-size: 36px;
    font-weight: bold;
    margin-left: 30%;
    margin-top: 40%;
    padding-bottom: 55px;
`;

export const Logo = styled.Image`
    height: 150px;
    width: 120px;
    margin-left:28%;
    margin-top:90px;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    font-family: Roboto;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`;

export const Input =styled.TextInput`
    margin-top: 5px;
    margin-bottom:10px;
    margin-left: 2%;       
    padding-left:5px; 
    width: 250px;
    height:40px;
    border-color: #fff;
    border-width: 2px;
    border-radius: 10;
    color: #000;
    background-color:#FFF;
`;

//#endregion

//#region  Buttons


export const Button = styled.TouchableOpacity`
    position: relative;
    width: 250px;
    height: 40px;
    background-color:#48126a;
	border-radius:28px;
	border:1px solid #ffffff;
    color:#ffffff;
    margin-left:2.5%;

`;

export const TextButton = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:20px;
    padding-top:4px;
    margin-left:39%;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
`;

export const TextCenter = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:20px;
    padding-top:15px;
    margin-left:39%;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
`;

export const TextLink = styled.Text`
    color:#ffffff;
    font-family:Roboto;
    font-size:16px;
    padding-top:20px;
    text-decoration:none;
    text-shadow:0px 1px 0px #aad6a3;
    font-weight: bold;
    margin-left: 8%;
`;

//#endregion
