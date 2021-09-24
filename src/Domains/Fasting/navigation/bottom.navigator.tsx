import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

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

  componentDidMount() {
    this.handlerGetActivesFastings();
  }

  handlerGetActivesFastings = () => {
    const { name } = this.props;
    if (
      name == 'Home' ||
      name == 'Timer' ||
      name == 'FastStart' ||
      name == 'FastEnd'
    ) {
      const { data } = this.props.useRedux.User;
      if (data?.token) {
        this.props.useDispatch.getPresets();
        this.props.useDispatch.getActivesFastings();
      }
    }
  };

  render() {
    const { navigation, bottomBarType, name, useRedux } = this.props;
    const { navigate } = navigation;
    const {
      User: { data: User },
    } = useRedux;

    const disabledChat = User?.configs?.chat
      ? !User?.configs?.chat
      : !!User?.configs?.chat;

    const menu = [
      {
        size: 25,
        icon: 'home',
        onPress: () => (name == 'Home' ? null : navigate('Home')),
      },
      {
        icon: 'timer',
        onPress: () => {
          if (name == 'Timer') return null;
          if (this.ActiveFastId)
            navigate('Timer', { fastingId: this.ActiveFastId });
          else navigate('FastStart', {});
        },
      },
      {
        disabled: disabledChat,
        icon: 'chat',
        size: 26,
        onPress: () => (name == 'Chat' ? null : navigate('Chat')),
      },
      {
        icon: 'user-circle',
        size: 26,
        onPress: () => (name == 'ProfileEdit' ? null : navigate('ProfileEdit')),
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

  private get ActiveFastId() {
    const { fastings } = this.props.useRedux.Fastings;
    if (!fastings.length) return;
    fastings[0]._id;
    return fastings[0]._id;
  }
}

function mapStateToProps({ Fastings, User }: ReduxStateType) {
  return {
    useRedux: {
      User,
      Fastings,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      getPresets: () => dispatch(ReduxActions.getPresets()),
      getActivesFastings: () => dispatch(ReduxActions.getActivesFastings()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
