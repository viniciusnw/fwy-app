import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components/native';
import Icon from '../Icon';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledWrapper = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme: { spacing } }) => `18px ${spacing.regular}`};
`;

const StyledLabel = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledIconWrapper = styled(View)`
  width: 26px;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

const AccountItem = ({ theme, icon, label, ...props }) => {
  return (
    <StyledTouchable {...props}>
      <StyledWrapper>
        {icon && (
          <StyledIconWrapper>
            <Icon icon={icon} size={20} color={theme.color.black} />
          </StyledIconWrapper>
        )}
        <StyledLabel>{label}</StyledLabel>
      </StyledWrapper>
    </StyledTouchable>
  );
};

export default withTheme(AccountItem);
