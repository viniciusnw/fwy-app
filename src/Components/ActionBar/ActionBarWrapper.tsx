import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

export const ActionBarWrapperSingle = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const ActionBarWrapperDouble = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;