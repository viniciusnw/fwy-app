import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Profile } from '@Components';

const user = {
  src: 'https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg',
  name: 'Doctor House',
  rule: 'Médico',
};

storiesOf('Profile', module).add('default', () => <Profile {...user} />);
