import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';

export const StyledField = styled(View)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

export const StyledH1 = styled(Text)`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledH2 = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText = styled(Text)`
  font-size: 20px;
  padding-top: 4px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText1 = styled(Text)`
  font-size: 10px;
  padding-top: 16px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText2 = styled(Text)`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText3 = styled(Text)`
  padding-top: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText4 = styled(Text)`
  font-weight: 700;
  color: ${({ theme }) => theme.color.default};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const FieldTitle = styled(View)`
  margin-bottom: 15px;
  padding: 0 15px;
  opacity: 0.5;
`;

{
  /* <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>0</Text>
<Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
<Text style={{ fontSize: 21 }}>h</Text>
<Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
<Text style={{ fontSize: 21 }}>h</Text>
<Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>0</Text>
<Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>0</Text> */
}
