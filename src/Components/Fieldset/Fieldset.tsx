import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const StyledContainer = styled(View)`
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
`;

const StyledSubtitle = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.extraSmall};
`;

const StyledWrapper = styled(View)`
  margin-top: ${({ theme }) => theme.spacing.regular};
`;

const Fieldset = ({ title, subtitle, children }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledContainer>
  );
};

export default Fieldset;
