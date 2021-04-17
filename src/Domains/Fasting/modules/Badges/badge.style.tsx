
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';

export const StyledH1 = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledH2 = styled(Text)`
  font-size: 15px;
  text-Align: left;
  margin-bottom: -5px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText = styled(Text)`
  margin-top: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText2 = styled(Text)`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText3 = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText4 = styled(Text)`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText5 = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText6 = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText7 = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText8 = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;