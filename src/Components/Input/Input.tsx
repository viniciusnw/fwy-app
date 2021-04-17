import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';

const StyledInput = styled(TextInput)`
  flex: ${({ half }: any) => half ? '2' : '1'};
  width: ${({ half }: any) => half ? 'auto' : '100%'};
  height: 47px;
  border: none;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, .2);
  color: ${({ theme }) => theme.color.white};
  margin-right: ${({ half }: any) => half ? '4px' : '0'};
  margin-left: ${({ half }: any) => half ? '4px' : '0'};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
