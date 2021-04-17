import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from '../Icon';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components/native';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid transparent;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.regular};
  border-bottom-color: ${({ theme }) => theme.color.border};
`;

const StyledTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledAction = styled(TouchableOpacity)``;

const Item = ({ theme, label, action, ...props }) => {
  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledTitle>{label}</StyledTitle>
        {action && (
          <StyledAction onPress={action}>
            <Icon icon="right" size={16} color={theme.color.gray} />
          </StyledAction>
        )}
      </StyledContainer>
    </StyledTouchable>
  );
};

export default withTheme(Item);
