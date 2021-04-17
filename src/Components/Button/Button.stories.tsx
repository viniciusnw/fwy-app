import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button, StorybookWrapper } from '@Components';

storiesOf('Button', module)
  .addDecorator((getStory: any) => (
    <StorybookWrapper>{getStory()}</StorybookWrapper>
  ))
  .add('default', () => (
    <Button onPress={() => true}>
      <Text>Default Button</Text>
    </Button>
  ))
  .add('primary', () => (
    <Button color="primary" onPress={() => true}>
      <Text>Primary Button</Text>
    </Button>
  ))
  .add('black', () => (
    <Button color="black" onPress={() => true}>
      <Text>Black Button</Text>
    </Button>
  ))
  .add('gray', () => (
    <Button color="gray" onPress={() => true}>
      <Text>Gray Button</Text>
    </Button>
  ));
