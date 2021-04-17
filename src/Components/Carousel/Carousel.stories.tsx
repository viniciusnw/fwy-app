import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Carousel } from '@Components';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Item = styled(View)`
  border: 1px solid #ddd;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const data = [
  <Item>
    <Text>Lorem ipsum</Text>
  </Item>,
  <Item>
    <Text>Sit Dolor</Text>
  </Item>,
  <Item>
    <Text>Sit Dolor</Text>
  </Item>,
];

storiesOf('Carousel', module)
  .addDecorator((getStory: any) => <>{getStory()}</>)
  .add('default', () => <Carousel data={data} />);
