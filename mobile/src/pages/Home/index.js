import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker,Callout } from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

import Header from '../../components/Header';
import NextBus from '../../components/NextBus';
import Loading from '../../components/Loading/index';

import apiBhBus from '../../services/apiBhBus';

import {
  Mapa,
  Lines,
  FindBar,
  TextInput,
  Find
} from './styles';



export default function Home({ navigation }) {

  const [currentRegion,setCurrentRegion] = useState(null);
  const [points,setPoints] = useState();
  
  const [loading,setLoading] = useState(false);
  useEffect(() => {

    async function loadInitialPosition(){
      setLoading(true);
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
          loadStopsNear(latitude,longitude);
      }

      async function loadStopsNear(latitude,longitude){

        const point = await apiBhBus.get(`/bus/GetParadasProximas?latitude=${latitude}&longitude=${longitude}`);
        if(point)
          setPoints(point.data);
        else
          console.log("Erro API!");
        setTimeout(() => {
          console.log("Pontos:",points); 
          setLoading(false);
        }, 2000);

      };
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
            {points.places.map(marker =>(
              <Marker
                coordinate={{
                  latitude: marker.location.coordinates[0],
                  longitude: marker.location.coordinates[1]
                }}
                title={marker.NOME_STOP}
                description={marker.DESC_STOP}
                image={require('../../assets/icon/bus.png')}
              />
            ))}
        </MapView>
     </Mapa>
    <Lines>
    <NextBus/>
    </Lines>
     <Loading loading={loading}/>
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
