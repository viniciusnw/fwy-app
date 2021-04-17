import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components/native';
import Icon from '../Icon';
import Label from '../Label';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)``;

const StyledStatus = styled(View)``;

const StyledLine = styled(Text)`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledView = styled(TouchableOpacity)``;

const StatusItem = ({ theme, status, line1, line2, ...props }) => {
  const statusLabel = () => {
    switch (status) {
      case 'success':
        return 'Agendado';
      case 'canceled':
        return 'Cancelado';
      default:
        return null;
    }
  };

  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledWrapper>
          <StyledStatus>
            <Label color={status} label={statusLabel()} />
          </StyledStatus>
          <StyledLine>{line1}</StyledLine>
          <StyledLine>{line2}</StyledLine>
        </StyledWrapper>

        <StyledView>
          <Icon icon="right" size={16} color={theme.color.gray} />
        </StyledView>
      </StyledContainer>
    </StyledTouchable>
  );
};

export default withTheme(StatusItem);
