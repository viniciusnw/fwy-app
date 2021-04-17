import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { OrderInfo } from '@Components';

const order = {
  orderId: '#000024665',
  service: 'Depilação de axilas',
  qty: 1,
  location: 'Clínica Sempre Bela',
  address1: 'Av. Paulista 14.005, Bela Vista, São Paulo - SP',
  address2: '5 andar, sala 55, consultório #2',
  date: '25 de Abril, 2020',
  hours: '14h00 - 15h00',
};

storiesOf('Order Info', module)
  .addDecorator((getStory) => <>{getStory()}</>)
  .add('default', () => <OrderInfo {...order} />);
