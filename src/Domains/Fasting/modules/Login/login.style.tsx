import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const StyledText = styled(Text)`
  font-size: 18px;
  color: ${({theme}) => theme.color.white};
  font-family: ${({theme}) => theme.fonts.AdobeClean.regular};
`;