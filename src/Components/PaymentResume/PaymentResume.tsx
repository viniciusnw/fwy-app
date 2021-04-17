import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from '../Icon';
import * as ASSETS from '@Config/assets';

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
`;

const StyledWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const StyledIcon = styled(View)`
  border: 1px solid transparent;
  border-right-color: ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => theme.spacing.regular};
  margin-right: ${({ theme }) => theme.spacing.regular};
`;

const StyledInfo = styled(View)``;

const StyledItem = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.color.border};
  padding: ${({ theme: { spacing } }) => `${spacing.small} ${spacing.regular}`};
`;

const PaymentResume = ({ theme, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        <StyledIcon>
          <Image
            style={{
              width: 42,
              height: 42,
            }}
            source={ASSETS.FASTING.icons.santander}
          />
        </StyledIcon>
        <StyledInfo>
          <Text>Próximo pagamento</Text>
          <Text>24 de Abril, 2020</Text>
        </StyledInfo>
      </StyledWrapper>

      <StyledItem>
        <Text>Configurações</Text>
        <Icon icon="right" size={12} color={theme.color.gray} />
      </StyledItem>
      <StyledItem>
        <Text>Histórico de pagamentos</Text>
        <Icon icon="right" size={12} color={theme.color.gray} />
      </StyledItem>
    </StyledContainer>
  );
};

export default withTheme(PaymentResume);
