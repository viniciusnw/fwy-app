import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Wallet, StorybookWrapper } from '@Components';

const sample = {
  value: 'R$1350,50',
  qty: 8,
};

storiesOf('Wallet', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => <Wallet {...sample} />);
