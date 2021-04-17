import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const StyledText = styled(Text)`
  font-size: 18px;
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.fonts.AdobeClean.regular};
`;

export const StyledField = styled(View)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

export const StyledBox = styled(View)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.large};
`;
