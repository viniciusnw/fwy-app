import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

const Container = styled(View)`
  position: relative;
  flex: ${({ half }: any) => half ? '2' : '1'};
  width: ${({ half }: any) => half ? 'auto' : '100%'};
  margin-left: ${({ half }: any) => half ? '4px' : '0'};
  margin-right: ${({ half }: any) => half ? '4px' : '0'};
`

const StyledInput = styled(TextInputMask).attrs(props => ({
  ...props,
  placeholderTextColor: `${props.theme.color.white}`
}))`
  height: 47px;
  border: none;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, .2);
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;


const ErrorContainer = styled(View)`
  height: 18px;
  padding-top: 4px;
  padding-left: 8px;
`;

const ErrorText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
`;

const InputPhone = (props) => {

  useEffect(() => {
    // props.refs.TextInputMask.getElement()
    // console.log(props)
  }, []);
  return (
    // maskType: 'BRL | INTERNATIONAL'
    <Container>
      <StyledInput
        type={'cel-phone'}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={(value, rawValue) => props.onChangeText(value)}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
      />

      <ErrorContainer>
        {props.error && <ErrorText>* {props.error}</ErrorText>}
      </ErrorContainer>
    </Container>
  )
};

export default InputPhone;