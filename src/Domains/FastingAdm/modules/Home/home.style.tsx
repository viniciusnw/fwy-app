import styled from 'styled-components/native';
import { View, FlatList, Text } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  margin: 0 35px;
`;

export const StyledH1 = styled(Text)`
  font-size: 31px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const SearchContainer = styled(View)`
  flex: 0.14;
  align-items: center;
  justify-content: center;
`;

export const CustomerContainer = styled(View)`
  flex: 1;
`;

export const ScrollCustomers = styled(FlatList)`
  flex: 1;
`;
