import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const StyledContainer = styled(TouchableWithoutFeedback)``;

const StyledWrapper = styled(View)`
  border: 1px solid ${({ theme }) => theme.color.border};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledLabel = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
`;

const StyledIcon = styled(View)`
  width: 42px;
  height: 42px;
  background-color: #ddd;
  margin-bottom: 15px;
`;

const Specialty = ({ label, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        <StyledIcon />
        <StyledLabel>{label}</StyledLabel>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Specialty;
