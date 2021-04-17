import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Specialty, StorybookWrapper } from '@Components';

storiesOf('Specialty', module)
  .addDecorator((getStory: any) => (
    <StorybookWrapper>{getStory()}</StorybookWrapper>
  ))
  .add('default', () => <Specialty icon="" label="Default Label" />);
