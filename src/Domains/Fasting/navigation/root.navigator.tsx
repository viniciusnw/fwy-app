import 'react-native-gesture-handler';

import React from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatConnectProvider, ChatQueueProvider } from '@Modules';
import { APP_NAME_TYPE } from '@Config/types';
import { configureApolloClient } from '@Config/graphql';
import { ReduxStateType, ReduxPropsType } from '@Redux/Fasting';

import Logged from './logged.navigator';
import UnLogged from './unlogged.navigator';

class Root extends React.Component<ReduxPropsType, any> {

  constructor(props: any) {
    super(props);
  }

  componentDidMount = async () => {
    await configureApolloClient(APP_NAME_TYPE.FASTING);
    SplashScreen.hide();
  }

  render() {
    const { 
      User: { login, register },
    } = this.props.useRedux;
    
    const { success: loginSuccess } = login
    const { success: registerSuccess } = register

    const Stack = createStackNavigator();
    return (
      <>
        {/* Providers */}
        <ChatConnectProvider />
        <ChatQueueProvider />

        <NavigationContainer>
          <Stack.Navigator>
            {
              loginSuccess || registerSuccess
                ? <Stack.Screen name="Logged" component={Logged} options={{ header: _ => null }} />
                : <Stack.Screen name="UnLogged" component={UnLogged} options={{ header: _ => null }} />
            }
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User
    }
  };
}

export default connect(
  mapStateToProps,
  null
)(Root);
