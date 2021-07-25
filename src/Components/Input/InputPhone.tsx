import React from 'react';
import { View, Text } from 'react-native';
import { FASTING } from '@Config/constants';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { TextInputMask } from 'react-native-masked-text';

const { languages } = FASTING.enums;

const InputPhone = (props) => {
  const { t, i18n } = useTranslation('language');

  return (
    <Container>
      {(i18n.language == languages.EN_US && (
        <StyledInput
          type={'custom'}
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          placeholder={props.placeholder}
          onChangeText={(value, rawValue) => props.onChangeText(value)}
          options={{
            mask: '+9 (999) 999-9999',
          }}
        />
      )) || (
        <StyledInput
          type={'cel-phone'}
          value={props.value}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          placeholder={props.placeholder}
          onChangeText={(value, rawValue) => props.onChangeText(value)}
          options={{
            withDDD: true,
            maskType: 'BRL',
            dddMask: '(99) ',
          }}
        />
      )}

      <ErrorContainer>
        {props.error && <ErrorText>* {props.error}</ErrorText>}
      </ErrorContainer>
    </Container>
  );
};

export default InputPhone;

const Container = styled(View)`
  position: relative;
  flex: ${({ half }: any) => (half ? '2' : '1')};
  width: ${({ half }: any) => (half ? 'auto' : '100%')};
  margin-left: ${({ half }: any) => (half ? '4px' : '0')};
  margin-right: ${({ half }: any) => (half ? '4px' : '0')};
`;

const ErrorContainer = styled(View)`
  height: 18px;
  padding-top: 4px;
  padding-left: 8px;
`;

const ErrorText = styled(Text)`
  font-size: 12px;
  color: ${({ theme }) => theme.color.warning};
`;

const StyledInput = styled(TextInputMask).attrs((props) => ({
  ...props,
  placeholderTextColor: `${props.theme.color.white}`,
}))`
  height: 47px;
  border: none;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;
