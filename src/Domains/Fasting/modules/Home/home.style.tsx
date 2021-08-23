import styled from 'styled-components/native';
import { View, TouchableOpacity, Text } from 'react-native';

export const StyledH1 = styled(Text)`
  font-size: 31px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledH2 = styled(Text)`
  font-size: 24px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText2 = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText3 = styled(Text)`
  font-size: 28px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const StyledText4 = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const StyledText5 = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const Badges = styled(View)`
  margin-left: 8px;
  padding: 8px 12px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AddFastItem = styled.TouchableOpacity`
  margin: 8px;
  flex-grow: 1;
  height: 140px;
  flex-basis: 103px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const FastItem = styled.TouchableOpacity`
  margin: 8px;
  height: 140px;
  flex-grow: 1;
  flex-basis: 103px;
  border-radius: 20px;
  align-items: center;
  padding: 24px 12px 12px;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const EmptyFastItem = styled.View`
  margin: 8px;
  height: 140px;
  flex-grow: 1;
  flex-basis: 103px;
`;
