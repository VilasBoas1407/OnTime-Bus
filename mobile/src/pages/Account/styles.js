import styled from 'styled-components/native';

export const Body = styled.View`
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
`;

export const Title = styled.Text`
    font-family: Roboto;
    color: #48126a;
    font-size: 20px;
    font-weight: bold;
    padding-left:5px;
    margin-bottom:15px;
`;

export const Button = styled.TouchableOpacity`
    position: relative;
    width: 250px;
    height: 40px;
    background-color:#48126a;
	border-radius:28px;
	border:1px solid #ffffff;
    color:#ffffff;
    margin-left:18%;

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