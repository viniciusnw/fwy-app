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

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)``;

const StyledTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledLine = styled(Text)`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledMore = styled(TouchableOpacity)``;

const AdressItem = ({ theme, label, line1, line2, ...props }) => {
  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>{label}</StyledTitle>
          <StyledLine>{line1}</StyledLine>
          <StyledLine>{line2}</StyledLine>
        </StyledWrapper>

        <StyledMore>
          <Icon icon="more" size={16} color={theme.color.gray} />
        </StyledMore>
      </StyledContainer>
    </StyledTouchable>
  );
};

export default withTheme(AdressItem);
