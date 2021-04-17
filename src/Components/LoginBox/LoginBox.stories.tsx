import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { LoginBox, StorybookWrapper } from '@Components';

storiesOf('LoginBox', module)
  .addDecorator((getStory) => (
    <StorybookWrapper>
      <View style={{ width: '100%', marginTop: 60 }}>{getStory()}</View>
    </StorybookWrapper>
  ))
  .add('default', () => {
    const props = {
      facebook: {
        onPress: () => true,
      },
      google: {
        onPress: () => true,
      },
      email: {
        value: '',
        onChangeText: () => true,
        placeholder: 'E-mail',
        autoCompleteType: 'email',
      },
      password: {
        value: '',
        onChangeText: () => true,
        placeholder: 'Senha',
        autoCompleteType: 'password',
      },
      forgotPassword: true,
      submit: () => true,
      register: {
        onPress: () => true,
      },
    };

    return <LoginBox {...props} />;
  });
