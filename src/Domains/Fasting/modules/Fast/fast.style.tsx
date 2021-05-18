import React from 'react';
import { Button, Icon } from '@Components';
import styled from 'styled-components/native';
import { View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

export const StyledH1 = styled(Text)`
  font-size: 22px;
  padding-bottom: 8px;
  margin-bottom: -7px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledH2 = styled(Text)`
  width: 70px;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledH3 = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: -4px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText2 = styled(Text)`
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText3 = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: -4px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText4 = styled(Text)`
  padding-bottom: 15px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText5 = styled(Text)`
  line-height: 18px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText6 = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText7 = styled(Text)`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText8 = styled(Text)`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText9 = styled(Text)`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText10 = styled(Text)`
  font-size: 44px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText11 = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText12 = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText13 = styled(Text)`
  font-size: 15px;
  padding-bottom: 4px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText14 = styled(Text)`
  font-size: 15px;
  padding-bottom: 4px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText15 = styled(Text)`
  font-size: 15px;
  padding-bottom: 4px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.default};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText16 = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText17 = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText18 = styled(Text)`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText19 = styled(Text)`
  font-size: 16px;
  margin-right: 12px;
  font-weight: bold;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText20 = styled(Text)`
  font-size: 15px;
  margin-left: 12px;
  margin-bottom: -6px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText21 = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText22 = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText23 = styled(Text)`
  font-weight: bold;
  margin-bottom: -5px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const ColorPick = styled(TouchableOpacity)<any>`
  width: 25px;
  height: 25px;
  margin: 0 6px;
  border-width: 2px;
  border-radius: 25px;
  background-color: ${({ color }) => (color ? color : '#FFF')};
  border-color: ${({ active, theme }) => (active ? theme.color.black : '#FFF')};
`;

export const FormContainer = styled(View)`
  flex: 1;
  margin: 0 40px;
  align-items: center;
  justify-content: flex-start;
`

export const Footer = styled(View)`
  height: 230px;
  bottom: -62px;
  right: 0px;
  left: 0;
`

export const Divider = (props) => (
  <View style={{ width: '100%', height: 42, bottom: -62, marginTop: -62 }} />
);

export const CustomPlanTag = (props) => (
  <View
    style={{
      width: '100%',
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
    }}>
    <StyledText>Custom Plan</StyledText>
    <Icon size={12} icon="info" color={'#FFF'} style={{ marginLeft: 4 }} />
  </View>
);
