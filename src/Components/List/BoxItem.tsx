import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => theme.spacing.regular};
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledLabel = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
`;

const BoxItem = ({ label, description, ...props }) => {
  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledLabel>{label}</StyledLabel>
        <StyledDescription>{description}</StyledDescription>
      </StyledContainer>
    </StyledTouchable>
  );
};

export default BoxItem;
