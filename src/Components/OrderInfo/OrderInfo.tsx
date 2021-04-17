import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  padding: ${({ theme: { spacing } }) => `${spacing.large} ${spacing.regular}`};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledWrapper = styled(View)``;

const StyledOrder = styled(Text)`
  font-size: 22px;
  font-weight: 700;
`;

const StyledDetailsWrapper = styled(View)`
  flex-direction: row;
  margin: 10px 0 15px;
`;

const StyledService = styled(Text)`
  font-weight: 700;
  margin-right: ${({ theme }) => theme.spacing.regular};
`;

const StyledQty = styled(Text)``;

const StyledLocation = styled(Text)`
  font-size: 16px;
`;

const StyledAddressLine = styled(Text)`
  color: ${({ theme }) => theme.color.grayDark};
  margin-top: 5px;
`;

const StyledDateWrapper = styled(View)`
  flex-direction: row;
  margin: 10px 0 0;
`;

const StyledDate = styled(Text)``;

const StyledHours = styled(Text)`
  margin-left: ${({ theme }) => theme.spacing.regular};
`;

const StyledActions = styled(View)``;

const StyledMore = styled(TouchableOpacity)``;

const OrderInfo = ({
  orderId,
  service,
  qty,
  location,
  address1,
  address2,
  date,
  hours,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        <StyledOrder>{orderId}</StyledOrder>
        <StyledDetailsWrapper>
          <StyledService>{service}</StyledService>
          <StyledQty>{`${qty} ${qty === 1 ? 'sessão' : 'sessções'}`}</StyledQty>
        </StyledDetailsWrapper>
        <StyledLocation>{location}</StyledLocation>
        <StyledAddressLine>{address1}</StyledAddressLine>
        <StyledAddressLine>{address2}</StyledAddressLine>
        <StyledDateWrapper>
          <StyledDate>{date}</StyledDate>
          <StyledHours>{hours}</StyledHours>
        </StyledDateWrapper>
      </StyledWrapper>

      <StyledActions>
        <StyledMore>
          <Icon icon="more" size={20} />
        </StyledMore>
      </StyledActions>
    </StyledContainer>
  );
};

OrderInfo.propTypes = {
  orderId: string,
  service: string,
  qty: number,
  location: string,
  address1: string,
  address2: string,
  date: string,
  hours: string,
};

export default OrderInfo;
