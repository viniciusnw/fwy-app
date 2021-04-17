import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input, StorybookWrapper } from '@Components';

storiesOf('Input', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => {
    return <Input value="" />;
  });
