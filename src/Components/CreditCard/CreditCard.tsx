import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { string } from 'prop-types';
import { Icon } from '@Components';
import * as ASSETS from '@Config/assets';

const StyledContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 0 ${({ theme }) => theme.spacing.regular};
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;
const StyledWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
`;

const StyledInfo = styled(View)`
  margin-left: ${({ theme }) => theme.spacing.regular};
  padding: ${({ theme }) => theme.spacing.regular};
  border: 1px solid transparent;
  border-left-color: ${({ theme }) => theme.color.border};
`;

const StyledLogo = styled(View)`
  justify-content: center;
`;

const StyledName = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledNumber = styled(Text)`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
`;

const CreditCard = ({ name, number, brand, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        <StyledLogo>
          <Image style={{ width: 52, height: 52 }} source={ASSETS.FASTING.icons[brand]} />
        </StyledLogo>

        <StyledInfo>
          <StyledName>{name}</StyledName>
          <StyledNumber>{number}</StyledNumber>
        </StyledInfo>
      </StyledWrapper>
    </StyledContainer>
  );
};

CreditCard.prototypes = {
  name: string,
  number: string,
};

export default CreditCard;
