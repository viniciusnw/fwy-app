import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import {
  ReduxActions,
  ReduxPropsType,
  ReduxStateType,
} from '@Redux/FastingAdm';

import { WrapperPropsType } from './wrapper.navigator';
import { LoggedStackParamList } from './logged.navigator';
import { UnloogedStackParamList } from './unlogged.navigator';

import { Navbar, NavbarSecondary } from '@Components';

type BottomBarPropsType = ReduxPropsType & {
  color: string;
};

type RoutePropsType = StackScreenProps<
  UnloogedStackParamList & LoggedStackParamList,
  'Wrapper'
>;
class BottomBar extends React.Component<
  RoutePropsType & BottomBarPropsType & WrapperPropsType,
  any
> {
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
        onPress: () => (name == 'Home' ? null : navigate('Home')),
      },
    ];

    if (bottomBarType == 'primary')
      return <Navbar {...this.props} items={menu} />;
    if (bottomBarType == 'secondary')
      return (
        <NavbarSecondary
          items={menu}
          {...this.props}
          background="darkBlue"
          radius={[30, 30, 0, 0]}
        />
      );
    return null;
  }
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
