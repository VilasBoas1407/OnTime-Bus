import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements'
import {Text,TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  View,
  DIcon,
  Title
} from './styles';

export default function Header({navigation}) {
  
  let title  = navigation.state.params.title;

  if(title == undefined)
    title  = 'OnTimeBus';

  console.log(navigation.state);


  return (
    <SafeAreaView>
      <View>
        <DIcon>  
          <TouchableOpacity onPress={() => navigation.openDrawer()}>   
            <Icon
              name='bars'
              type='font-awesome'
              color='#fff'
              size={32}
            />
            </TouchableOpacity>
          </DIcon>
          <Title> {title} </Title>
      </View>
    </SafeAreaView>
  )
};