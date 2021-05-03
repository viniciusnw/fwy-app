import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { WrapperPropsType } from './wrapper.navigator'
import { LoggedStackParamList } from './logged.navigator'
import { UnloogedStackParamList } from './unlogged.navigator'

import { Navbar, NavbarSecondary } from '@Components'

type BottomBarPropsType = {
  color: string;
}

type RoutePropsType = StackScreenProps<UnloogedStackParamList & LoggedStackParamList, 'Wrapper'>;
export default class BottomBar extends React.Component<RoutePropsType & BottomBarPropsType & WrapperPropsType, any> {

  constructor(props) {
    super(props);
    // console.log('BottomBar=>constructor', this)
  }

  render() {
    const { navigation, bottomBarType, name } = this.props;
    const { navigate } = navigation;

    const menu = [
      {
        size: 25,
        icon: 'home',
        onPress: () => name == "Home" ? null : navigate('Home'),
      },
      {
        icon: 'timer',
        onPress: () => name == "Timer" ? null : navigate('Timer'),
      },
      {
        icon: 'chat',
        size: 26,
        onPress: () => name == "Chat" ? null : navigate('Chat'),
      },
      {
        icon: 'user-circle',
        size: 26,
        onPress: () => name == "ProfileEdit" ? null : navigate('ProfileEdit'),
      },
    ]

    if (bottomBarType == 'primary') return <Navbar {...this.props} items={menu} />
    if (bottomBarType == 'secondary') return <NavbarSecondary radius={[30, 30, 0, 0]} background='darkBlue' {...this.props} items={menu} />
    return null
  }
}