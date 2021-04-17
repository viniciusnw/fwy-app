import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { CreditCard, StorybookWrapper } from '@Components';

const card = {
  name: 'Pedro Prado',
  number: '**** **** **** 1234',
  brand: 'visa',
};

const card1 = {
  name: 'Wesley Ribeiro',
  number: '**** **** **** 1234',
  brand: 'mastercard',
};

storiesOf('Credit Card', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => (
    <>
      <CreditCard {...card} />
      <CreditCard {...card1} />
    </>
  ));
