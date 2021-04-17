import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import Icon from '../Icon';

const StyledContainer = styled(View)`
  width: 100%;
  align-items: center;
  padding: 60px ${({ theme }) => theme.spacing.regular};
`;

const StyledValue = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;

const StyledQty = styled(Text)`
  margin-top: 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledIcon = styled(View)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 100px;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const Wallet = ({ value, qty, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledIcon>
        <Icon icon="wallet" size={26} />
      </StyledIcon>
      <StyledValue>{value}</StyledValue>
      <StyledQty>{`${qty} atendimento${qty > 1 ? 's' : ''}`}</StyledQty>
    </StyledContainer>
  );
};

export default Wallet;
