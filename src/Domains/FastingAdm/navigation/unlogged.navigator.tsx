import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Wrapper from './wrapper.navigator';
import { Home, Details } from '@ADMModules';

export default class UnLogged extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={(props) => <Wrapper {...props} Page={Home} bottomBarType={null} />}
          options={{ header: (_) => null }}
        />
        <Stack.Screen
          name="Details"
          component={(props) => <Wrapper {...props} Page={Details} bottomBarType={null} />}
          options={{ header: (_) => null }}
        />
      </Stack.Navigator>
    );
  }
}
