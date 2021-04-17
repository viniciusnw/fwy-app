import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledWrapper = styled(View)`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const StorybookWrapper = ({ children, ...props }) => (
  <StyledWrapper {...props}>{children}</StyledWrapper>
);

export default StorybookWrapper;
