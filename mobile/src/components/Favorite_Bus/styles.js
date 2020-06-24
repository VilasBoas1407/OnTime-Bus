import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    margin-bottom: 1%;
`;

export const Bus = styled.View`
    border-color: #f4f4f4;
    border-width:1px;
    border-radius: 10;
    height:50px;
    background-color:#65ED72;
    margin-bottom: 3%;
    margin-top: 3%;
    margin-left: 3%;
    margin-right: 3%;
    flex-direction: row; 

`;
export const Row = styled.View`
    flex-direction: row; 
`;

export const Line = styled.Text`
    font-family: Roboto;
    color: #00000f;
    font-size: 18px;
    font-weight: bold;
    padding-top:10px;
    padding-bottom:3px;
    padding-left:5px;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 2%;
    margin-left: 12%;
`;
export const View = styled.View`
    padding-bottom:10px;
    margin-left:10px;
    margin-right:10px;
    margin-top:10px;
    margin-bottom:10px;
    border-color: #f4f4f4;
    border-width:1px;
    background-color:#f4f4f4;
    border-radius: 10;
`;

export const Title = styled.Text`
    font-family: Roboto;
    color: #48126a;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 5px;
`;
