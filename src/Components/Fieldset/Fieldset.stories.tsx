import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Fieldset, Input } from '@Components';
import { View } from 'react-native';
import styled from 'styled-components/native';

const StyledField = styled(View)`
  margin-bottom: 15px;
`;

storiesOf('Fieldset', module)
  .addDecorator((getStory: any) => <>{getStory()}</>)
  .add('default', () => {
    return (
      <Fieldset title="Identificação" subtitle="Seus dados pessoais">
        <StyledField>
          <Input placeholder="Nome" />
        </StyledField>
        <StyledField>
          <Input placeholder="E-mail" />
        </StyledField>
      </Fieldset>
    );
  });
