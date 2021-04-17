import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Navbar } from '@Components';

const Wrapper = styled(View)`
  height: 100%;
  justify-content: flex-end;
`;

const client = [
  {
    icon: 'calendar',
    label: 'Agenda',
    onPress: () => true,
    primary: false,
  },
  {
    icon: 'plus',
    label: 'Novo agendamento',
    onPress: () => true,
    primary: true,
  },
  {
    icon: 'list',
    label: 'Histórico',
    onPress: () => true,
    primary: false,
  },
];

const doctor = [
  {
    icon: 'calendar',
    label: 'Agenda',
    onPress: () => true,
    primary: false,
  },
  {
    icon: 'wallet',
    label: 'Cateira',
    onPress: () => true,
    primary: true,
  },
  {
    icon: 'list',
    label: 'Histórico',
    onPress: () => true,
    primary: false,
  },
];

storiesOf('Navbar', module)
  .addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)
  .add('client', () => <Navbar items={client} />)
  .add('doctor & clinic', () => <Navbar items={doctor} />);
