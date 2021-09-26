
import styled, { css } from 'styled-components/native';
import { View, TouchableOpacity, Text } from 'react-native';

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

export const MenuItem = styled(TouchableOpacity)`
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Strike = styled(View)`
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
`;