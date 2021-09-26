import React from 'react';
import { Login, SignUp } from '@Modules';
import Wrapper from './wrapper.navigator';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

export type UnloogedStackParamList = {
  UnLogged: undefined;
  Wrapper: undefined;
  Login: undefined;
  SignUp: undefined;
};

const UnloogedStackList = [
  {
    name: 'Login',
    Page: Login,
    topBarType: null,
    bottomBarType: null
  },
  {
    name: 'SignUp',
    Page: SignUp,
    topBarType: 'primary',
    bottomBarType: null
  },
]

type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'UnLogged'>;
export default class UnLogged extends React.Component<RoutePropsType, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName={'Login'}>
        {UnloogedStackList.map((StackItem, index) => (
          <Stack.Screen
            key={index}
            name={StackItem.name}
            // @ts-ignore
            component={props => <Wrapper {...props} {...StackItem} />}
            options={{ header: _ => null }}
          />
        ))}
      </Stack.Navigator>
    )
  }
}