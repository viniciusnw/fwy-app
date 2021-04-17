import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logged from './logged.navigator';
import UnLogged from './unlogged.navigator';

class Root extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { login } = this.props.user;
    const { data } = login;
    const Stack = createStackNavigator();
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {data.logged ? (
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

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(Root);
