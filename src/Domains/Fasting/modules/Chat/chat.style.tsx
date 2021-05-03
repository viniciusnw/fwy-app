import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';

export const StyledTextInput = styled(TextInput)`
  height: 80px;
  width: 100%;
  padding: 8px;
  color: #fff;
  border: none;
  line-height: 20px;
  border-radius: 6px;
  padding: 30px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;
