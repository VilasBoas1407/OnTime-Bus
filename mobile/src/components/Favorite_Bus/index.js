import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import {Text,TouchableOpacity, ScrollView} from 'react-native';

import {
    Container,
    Bus,
    Line,
    Button
} from './styles';

export default function NextBus({navigation}) {
  
  useEffect(() => {

  }, []);

  return (
    <ScrollView>

    <Container>          
            <Bus>
                <Line>62 - Savassi / Hospitais - Parador</Line>
                <Button>
                    <Icon  
                        name='times'
                        type='font-awesome'
                        color='#00000f'
                        size={30}>
                    </Icon>
                </Button>
            </Bus>
            <Bus>
                <Line>66 - Vilarinho - Centro</Line>
                <Button>
                    <Icon  
                        name='times'
                        type='font-awesome'
                        color='#00000f'
                        size={30}>
                    </Icon>
                </Button>
            </Bus>
            <Bus>
                <Line>61 - Centro - Direto</Line>
                <Button>
                    <Icon  
                        name='times'
                        type='font-awesome'
                        color='#00000f'
                        size={30}>
                    </Icon>
                </Button>
            </Bus>
            <Bus>
                <Line>64 - Venda Nova / Assembleia  </Line>
                <Button>
                    <Icon  
                        name='times'
                        type='font-awesome'
                        color='#00000f'
                        size={30}>
                    </Icon>
                </Button>
            </Bus>
            <Bus>
                <Line>63 - Venda Nova / Lagoinha </Line>
                <Button>
                    <Icon  
                        name='times'
                        type='font-awesome'
                        color='#00000f'
                        size={30}>
                    </Icon>
                </Button>
            </Bus>
    </Container>

    </ScrollView>
  )
};