import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)`
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledLabel = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledBottom = styled(View)`
  padding: ${({ theme: { spacing } }) => `${spacing.small} ${spacing.regular}`};
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: space-between;
`;

const StyledQty = styled(Text)``;

const StyledPrice = styled(View)`
  flex-direction: row;
`;

const StyledOldPrice = styled(Text)`
  text-decoration-line: line-through;
  text-decoration-style: solid;
  margin-right: ${({ theme }) => theme.spacing.regular};
  color: ${({ theme }) => theme.color.grayLight};
`;

const StyledRegularPrice = styled(Text)``;

const ServiceItem = ({ label, description, qty, ...props }) => {
  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledWrapper>
          <StyledLabel>{label}</StyledLabel>
          <StyledDescription>{description}</StyledDescription>
        </StyledWrapper>

        <StyledBottom>
          <StyledQty>{`${qty} ${qty === 0 ? 'sessão' : 'sessões'}`}</StyledQty>
          <StyledPrice>
            <StyledOldPrice>R$199,00</StyledOldPrice>
            <StyledRegularPrice>R$299,00</StyledRegularPrice>
          </StyledPrice>
        </StyledBottom>
      </StyledContainer>
    </StyledTouchable>
  );
};

export default ServiceItem;
