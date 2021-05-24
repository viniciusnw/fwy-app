import styled from 'styled-components/native';
import { View, Text, FlatList } from 'react-native';
import { Message } from '@Redux/Fasting/repository/Chat/state';

export const ScrollMessages = styled(FlatList)`
  flex: 1;
  margin: 0 40px;
  padding: 0 10px;
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export const MessageContainer = styled(View)<Message>`
  margin: ${({ sender }) => sender == 'customer' ? '0 10px 0 0' : '0 0 0 10px'};
`;


export const MessageItem = styled(View)<Message>`
  display: flex;
  margin: 8px 2px;
  flex-direction: row;
  align-items: flex-end;
  align-self: ${({ sender }) => sender == 'customer' ? 'flex-end' : 'flex-start'};
`;

export const MessageTextContainer = styled(View)<Message>`
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, .2);
  align-self: ${({ sender }) => sender == 'customer' ? 'flex-end' : 'flex-start'};
  
`;

export const MessageText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const MessageDate = styled(Text)`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

export const Divider = styled(View)`
  width: 100%;
  height: 42px;
  bottom: -62px;
  border-width: 1px;
  margin-top: -62px;
  margin-bottom: -42px;
`