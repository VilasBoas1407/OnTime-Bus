import React, { useState, useEffect } from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView, { Marker,Callout } from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

import Header from '../../components/Header';
import NextBus from '../../components/NextBus';

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
  const [points,setPoints] = useState({});

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
          loadStopsNear(latitude,longitude);
      }

      async function loadStopsNear(latitude,longitude){
         

        const point = await apiBhBus.get(`/bus/GetParadasProximas?latitude=${latitude}&longitude=${longitude}`);
        console.log(points.data.places)
        await setPoints(point.data);
        console.log("Pontos:",points.places);
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
            {points.places.map(points => (
                <Marker
                  key={points.ID_STOP}
                  coordinate={{
                    longitude: points.location.coordinates[0],
                    latitude: points.location.coordinates[1]
                  }}
                >
                <Image  source={require('../../assets/icon/bus.png')} />
              </Marker>
            ))}
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
