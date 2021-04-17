import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Logo, StorybookWrapper } from '@Components';

storiesOf('Logo', module)
  .addDecorator((getStory) => (
    <StorybookWrapper>
      <View style={{ marginTop: 60 }}>{getStory()}</View>
    </StorybookWrapper>
  ))
  .add('default', () => <Logo />);
