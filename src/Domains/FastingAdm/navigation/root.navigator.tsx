import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logged from './logged.navigator';
import UnLogged from './unlogged.navigator';
import { APP_NAME_TYPE } from '@Config/types';
import { configureApolloClient } from '@Config/graphql';
import { ChatConnectProvider, ChatQueueProvider } from '@ADMModules';
import { ReduxStateType, ReduxPropsType } from '@Redux/FastingAdm';

class Root extends React.Component<ReduxPropsType, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount = async () => {
    await configureApolloClient(APP_NAME_TYPE.FASTING_ADM);
    SplashScreen.hide();
  };

  render() {
    const {
      User: { login },
    } = this.props.useRedux;

    const { success: loginSuccess } = login;

    const Stack = createStackNavigator();
    return (
      <>
        {/* Providers */}
        <ChatConnectProvider />
        <ChatQueueProvider />

        <NavigationContainer>
          <Stack.Navigator>
            {loginSuccess ? (
              <Stack.Screen
                name="Logged"
                component={Logged}
                options={{ header: (_) => null }}
              />
            ) : (
              <Stack.Screen
                name="UnLogged"
                component={UnLogged}
                options={{ header: (_) => null }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User,
    },
  };
}

export default connect(mapStateToProps, null)(Root);
