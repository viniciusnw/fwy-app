import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Header } from '@Components';

storiesOf('Header', module)
  .add('default', () => (
    <Header back={() => true} menu={() => true} title="TakeCare" />
  ))
  .add('no back', () => (
    <Header back={false} menu={() => true} title="TakeCare" />
  ))
  .add('no menu', () => (
    <Header back={() => true} menu={false} title="Checkout" />
  ));
