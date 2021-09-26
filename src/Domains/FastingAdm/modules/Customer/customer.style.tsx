import styled from 'styled-components/native';
import {
  View,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  margin: 0 35px;
`;

export const CustomerContainer = styled(View)`
  flex-direction: row;
`;

export const LoadContent = styled(View)`
  flex: 1;
  min-height: 150px;
  align-items: center;
  justify-content: center;
`;

export const ListMenu = styled(ScrollView)`
  width: 100%;
  margin-top: 12px;
`;

export const MenuItem = styled(TouchableOpacity)`
  padding: 20px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuTitle = styled(Text)`
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const Strike = styled(View)`
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const LastFastContent = styled(View)`
  display: flex;
  justify-content: center;
`;

export const FastValue = styled(Text)`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const LastFastTitle = styled(Text)`
  font-size: 21px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`

export const FastValueDesc = styled(Text)`
  color: ${({ theme }) => theme.color.darkBlue};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;