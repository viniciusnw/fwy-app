
import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';

export const StyledText = styled(Text)`
  font-size: 18px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledField = styled(View)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

export const StyledSelect = styled(View)`
  margin-right: -4px;
  margin-left: -4px;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

export const StyledBox = styled(ScrollView)`
  width: 100%;
`;
