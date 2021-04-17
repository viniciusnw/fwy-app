import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Wrapper from './wrapper.navigator';
import Sidebar from './sidebar.navigator';
import { Home, Details, Calendar, Wallet, History } from '@ADMModules';

export default class Logged extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  rootStack = () => {
    const Stack = createStackNavigator();

    return (
      <>
        <Stack.Navigator initialRouteName="calendar">
          <Stack.Screen
            name="home"
            component={(props) => <Wrapper {...props} Page={Home} bottomBarType="nav-bar" />}
            options={{ header: (_) => null }}
          />
          <Stack.Screen
            name="details"
            component={(props) => <Wrapper {...props} Page={Details} bottomBarType="action-bar" />}
            options={{ header: (_) => null }}
          />
          <Stack.Screen
            name="calendar"
            component={(props) => <Wrapper {...props} Page={Calendar} bottomBarType="nav-bar" />}
            options={{ header: (_) => null }}
          />
          <Stack.Screen
            name="wallet"
            component={(props) => <Wrapper {...props} Page={Wallet} bottomBarType="nav-bar" />}
            options={{ header: (_) => null }}
          />
          <Stack.Screen
            name="history"
            component={(props) => <Wrapper {...props} Page={History} bottomBarType="nav-bar" />}
            options={{ header: (_) => null }}
          />
        </Stack.Navigator>
      </>
    );
  };

  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        drawerContent={() => <Sidebar />}
        drawerPosition={'right'}
        drawerStyle={{ width: '85%' }}>
        <Drawer.Screen name="Root" component={this.rootStack} />
      </Drawer.Navigator>
    );
  }
}
