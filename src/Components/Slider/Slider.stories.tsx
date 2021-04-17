import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Slider, StorybookWrapper } from '@Components';

storiesOf('Slider', module)
  .addDecorator((getStory: any) => (
    <StorybookWrapper>{getStory()}</StorybookWrapper>
  ))
  .add('default', () => <Slider />);
