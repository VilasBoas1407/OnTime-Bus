import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements'
import {Text,TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  View,
  DIcon,
  Title
} from './styles';

export default function Header({ navigation }) {
  
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
          <Title>OnTime Bus</Title>
      </View>
    </SafeAreaView>
  )
};