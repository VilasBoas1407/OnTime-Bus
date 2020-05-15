import styled from "styled-components";
import { Input } from "react-native-elements";

export const Mapa = styled.View`
    margin-top: 10px;
    position: relative;
    width: auto;
    height: 250px;
    border-width: 1px;
`;

export const Lines = styled.View`
    margin-top: 10px;
    position: relative;
    width: auto;
    height: 350px;
`;

export const Map = styled.Image`
    height: 240px;
    width: 500px;
`;

export const Find = styled.View`
    position: relative;
    height: 45px;
    width:45px;
    background-color:#48126a;
    margin-left: 360px;
    margin-top: -40px;
    padding-top:5px;
    border-radius: 30px;
`;

export const FindBar = styled.View`
    padding-top:3px;    
    padding-left:8px;
    border-color: #000;
    height: 35px;
    border-width:1px;
    border-radius: 20;
    background-color:#f4f4f4;
    margin-bottom: 5px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: row; 
`;

export const TextInput = styled.TextInput`
    height: 25px;
    border-radius: 20;
    padding-left: 15px;
    padding-top:3px;
    padding-bottom:2px;
    color:#000;

`;