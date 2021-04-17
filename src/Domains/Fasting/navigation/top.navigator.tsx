import React from 'react';
import { Header } from '@Components'
import { StackScreenProps } from '@react-navigation/stack';

import { LoggedStackParamList } from './logged.navigator'
import { UnloogedStackParamList } from './unlogged.navigator'
import { WrapperPropsType } from './wrapper.navigator'

type TopBarPropsType = {
  color: string;
  title: string;
  back: () => null;
  menu: () => null;
}

type RoutePropsType = StackScreenProps<UnloogedStackParamList & LoggedStackParamList, 'Wrapper'>;
export default class TopBar extends React.Component<RoutePropsType & TopBarPropsType & WrapperPropsType, any> {

  constructor(props) {
    super(props);
  }

  goBack = () => {
    const { goBack } = this.props.navigation
    goBack()
  }
  
  goSettings = () => {
    const { navigate } = this.props.navigation;
    navigate('Settings');
  }

  render() {
    const { topBarType } = this.props;

    if (topBarType == 'primary') return <Header goSettings={this.goSettings} goBack={this.goBack} {...this.props} />
    else return null
  }
}