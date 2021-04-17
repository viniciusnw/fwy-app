import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

const StyledContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.color.border};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledInfo = styled(View)``;

const StyledTitle = styled(Text)`
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  font-size: 16px;
  margin: 10px 0 5px;
`;

const StyledMore = styled(TouchableOpacity)``;

const StyledDateWrapper = styled(View)`
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.regular};
  padding-bottom: 5px;
`;

const StyledDay = styled(Text)`
  font-size: 42px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledMonth = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledHours = styled(Text)``;

const Card = ({ day, month, hours, status, title, ...props }) => {
  const parseStatus = () => {
    switch (status) {
      case 'done':
        return { label: 'Realizado', color: 'success' };
      case 'pending':
        return { label: 'Aguardando', color: 'warning' };
      case 'canceled':
        return { label: 'Cancelado', color: 'danger' };
      default:
        return {};
    }
  };

  return (
    <StyledContainer {...props}>
      <StyledDateWrapper>
        <StyledDay>{day}</StyledDay>
        <StyledMonth>{month}</StyledMonth>
      </StyledDateWrapper>

      <StyledWrapper>
        <StyledInfo>
          <Label {...parseStatus()} />
          <StyledTitle>{title}</StyledTitle>
          <StyledHours>{hours}</StyledHours>
        </StyledInfo>
        <StyledMore>
          <Icon icon="more" size={20} />
        </StyledMore>
      </StyledWrapper>
    </StyledContainer>
  );
};

Card.propTypes = {
  day: string,
  month: string,
  hours: string,
  status: string,
  title: string,
};

Card.defaultProps = {
  label: '',
  color: 'primary',
};

export default Card;
