
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';

export const StyledH1 = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.color.default};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;
