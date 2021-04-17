import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Card, StorybookWrapper } from '@Components';

const sample = {
  day: '25',
  month: 'ABR',
  hours: '14h00 - 15h00',
  status: true,
  title: 'Depilação de axilas',
};

storiesOf('Card', module)
  .addDecorator((getStory: any) => (
    <StorybookWrapper>{getStory()}</StorybookWrapper>
  ))
  .add('default', () => <Card {...sample} />);
