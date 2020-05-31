import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawerContentComponent from '../src/components/SideMenu/index';

import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Home from  './pages/Home/index';
import QuadroHorario from './pages/QuadroHorario/index';
const Routes = createAppContainer(

    createDrawerNavigator({
      Login,
      Cadastro,  
      Home,
      QuadroHorario
    },{ contentComponent: CustomDrawerContentComponent,          
    })
  );

export default Routes;