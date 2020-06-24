import React, {useEffect, AsyncStorage} from 'react';
import { Container, 
  Top, 
  Avatar,
  User, 
  Nav,
  TabButton,
  Tab,
  SocialMedia
} from './styles';
import { Icon } from 'react-native-elements'


export default function CustomDrawerContentComponent({navigation}) {  

  function LogOut() {
    navigation.navigate('Login');
  }  

  function goQuadroHorario(){
    navigation.navigate('QuadroHorario',{
      title:  'Quadro de Horários'
    });
  }

  function goFavorites(){
    navigation.navigate('Favorites',{
      title: 'Linhas Favoritas'
    });
  }

  function goHome(){
    navigation.navigate('Home',{
      title : 'OnTimeBus'
    });
  }
  
  async function load(){
    const nome = await AsyncStorage.getItem('nome'); 
    console.log(nome);
  }

  useEffect(() => {
    load();
  }, []);   
  return(      
        <Container>
          <Top>
            <Avatar source={require('../../assets/user.jpg')}/>
            <User>Olá</User>
          </Top>          
          <Nav>
            <Tab>Minha Conta</Tab>
            <TabButton onPress={goHome}>
              <Tab>Home</Tab>
            </TabButton>
            <TabButton onPress={goFavorites}>
              <Tab>Linhas Favoritas</Tab>
            </TabButton>
            <TabButton onPress={goQuadroHorario}>
              <Tab>Quadro de hórario</Tab>
            </TabButton>
            <Tab>Solicitar assistência</Tab>
            <Tab>Sobre Nós</Tab>
            <TabButton onPress={LogOut}>
              <Tab>Sair</Tab>
            </TabButton>            
            <SocialMedia>
              <Icon  
                name='facebook-square'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='instagram'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='linkedin'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
              <Icon  
                name='twitter-square'
                type='font-awesome'
                color='#48126a'
                size={32}>
              </Icon>
            </SocialMedia>
          </Nav>
        </Container>
  )
}