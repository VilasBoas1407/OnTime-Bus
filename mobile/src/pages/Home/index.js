import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker,Callout } from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

import Header from '../../components/Header';
import NextBus from '../../components/NextBus';

import {
  Mapa,
  Lines,
  FindBar,
  TextInput,
  Find
} from './styles';


export default function Home({ navigation }) {

  const [currentRegion,setCurrentRegion] = useState(null);

  useEffect(() => {

    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync();

      if(granted){
          const { coords } = await getCurrentPositionAsync({
              enableHighAccuracy: true,
          });

          const { latitude, longitude } = coords;

          setCurrentRegion({
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
          })
      }
  };
  
    loadInitialPosition();
  }, []);


  if(!currentRegion)
    return null;

  return (
    <View>
      <Header navigation={navigation}/>
      <FindBar>
        <Icon  
            name='search'
            type='font-awesome'
            color='#48126a'
            size={20}>
        </Icon>
       <TextInput placeholder={'Vamos para onde ?'} pla/>
      </FindBar>
     <Mapa>
        <MapView initialRegion={currentRegion} style={styles.map}>      
      </MapView>
     </Mapa>
    <Lines>
    <NextBus/>
    </Lines>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
      flex: 1
  },

  avatar:{
      width: 54,
      height: 54,
      borderRadius: 4,
      borderWidth: 4,
      borderColor: '#FFF'
  },
});
