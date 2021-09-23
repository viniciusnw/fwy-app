import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import Wrapper from './wrapper.navigator';

import * as Pages from '@ADMModules';

export type LoggedStackParamList = {
  Wrapper: undefined;
  Logged: undefined;
  Home: undefined;
  Chat: undefined;
  Customer: {
    customerId: string;
  };
};

const LoggedStackList = [
  {
    name: 'Home',
    Page: Pages.Home,
    topBarType: 'primary',
    bottomBarType: 'primary',
  },
  {
    name: 'Customer',
    Page: Pages.Customer,
    topBarType: 'primary',
    bottomBarType: 'primary',
  },
  {
    name: 'Chat',
    Page: Pages.Chat,
    topBarType: 'primary',
    bottomBarType: 'primary',
  },
];

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Logged'>;
export default class Logged extends React.Component<RoutePropsType, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <>
        <Stack.Navigator initialRouteName={'Home'}>
          {LoggedStackList.map((StackItem, index) => (
            <Stack.Screen
              key={index}
              name={StackItem.name}
              options={{ header: (_) => null }}
              // @ts-ignore
              component={(props) => <Wrapper {...props} {...StackItem} />}
            />
          ))}
        </Stack.Navigator>
      </>
    );
  }
}
