import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { UserCard, StorybookWrapper } from '@Components';

const user = {
  src: 'https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg',
  name: 'Doctor House',
  description: 'Av. Paulista, 14.005, Bela Vista - SP',
};

storiesOf('User card', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => <UserCard {...user} />);
