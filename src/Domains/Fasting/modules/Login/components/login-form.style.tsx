import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const StyledField = styled(View)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

export const StyledBox = styled(View)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.large};
`;
