import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { ActionBar, Button, PriceResume } from '@Components';

const Wrapper = styled(View)`
  height: 100%;
  justify-content: flex-end;
`;

const ActionBarWrapperSingle = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

const ActionBarWrapperDouble = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

storiesOf('ActionBar', module)
  .addDecorator((getStory) => <Wrapper>{getStory()}</Wrapper>)
  .add('default', () => (
    <ActionBar>
      <ActionBarWrapperSingle>
        <Button color="black">
          <Text>Avançar</Text>
        </Button>
      </ActionBarWrapperSingle>
    </ActionBar>
  ))
  .add('price', () => (
    <ActionBar>
      <ActionBarWrapperDouble>
        <PriceResume label="3x de R$99,99" description="ou R$299,90" />
        <Button color="black">
          <Text>Agendar</Text>
        </Button>
      </ActionBarWrapperDouble>
    </ActionBar>
  ));
