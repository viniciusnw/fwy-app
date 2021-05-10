import styled from 'styled-components/native';
import { message } from '@Redux/Fasting/repository/Chat/state';
import { View, TextInput, Text, ScrollView, FlatList } from 'react-native';

export const ScrollMessages = styled(FlatList)`
  flex: 1;
  margin: 0 40px;
  border-width: 1px;
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const MessageItem = styled(View)<message>`
  border: 1px solid black;
  margin: 8px 2px;
  display: flex;
`;

export const MessageText = styled(Text)<message>`
  border: 1px solid black;
  margin: 2px;
  align-self: ${({ sender }) => sender == 'customer' ? 'flex-end' : 'flex-start'}
`;

export const Divider = styled(View)`
  width: 100%;
  height: 42px;
  bottom: -62px;
  margin-top: -62px;
  border-width: 1px;
`