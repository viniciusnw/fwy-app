import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import Wrapper from './wrapper.navigator'
// import Sidebar from './sidebar.navigator'

import * as Pages from '@Modules'

export type LoggedStackParamList = {
  Wrapper: undefined;
  Logged: undefined;
  Home: undefined;
  FastStart: {
    presetId?: string
  };
  Timer: {
    fastingId?: string;
    fasting?: {
      name: string,
      days: number,
      hours: number,
      color: string,
      finished: null | Date
    }
  };
  FastEnd: undefined;
  BadgeNew: undefined;
  BadgeList: undefined;
  BadgeAll: undefined;
  BadgeView: {
    badgeId: number
  };
  Profile: undefined;
  ProfileEdit: undefined;
  Settings: undefined;
  Chat: undefined;
};

const LoggedStackList = [
  {
    name: 'Home',
    Page: Pages.Home,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'FastStart',
    Page: Pages.FastStart,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'FastEnd',
    Page: Pages.FastEnd,
    topBarType: null,
    bottomBarType: 'primary'
  },
  {
    name: 'Timer',
    Page: Pages.Timer,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'BadgeNew',
    Page: Pages.BadgeNew,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'BadgeList',
    Page: Pages.BadgeList,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'BadgeAll',
    Page: Pages.BadgeAll,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'BadgeView',
    Page: Pages.BadgeView,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'Profile',
    Page: Pages.Profile,
    topBarType: null,
    bottomBarType: 'primary'
  },
  {
    name: 'ProfileEdit',
    Page: Pages.ProfileEdit,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'Settings',
    Page: Pages.Settings,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
  {
    name: 'Chat',
    Page: Pages.Chat,
    topBarType: 'primary',
    bottomBarType: 'primary'
  },
]

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
              component={props => <Wrapper {...props} {...StackItem} />}
              options={{ header: _ => null }}
            />
          ))}
        </Stack.Navigator>
      </>
    )
  }
}
