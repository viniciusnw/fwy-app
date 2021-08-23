import moment from 'moment';
import styled from 'styled-components/native';
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

import { useTranslation } from 'react-i18next';

const InputDate: React.FC<any> = (props) => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const locale = i18n.language.replace('-', '_');

  const setStyledTextInputValue = () => {
    const StringLocaleDate = new Date(props.value).toLocaleDateString(
      i18n.language,
    );
    setValue(StringLocaleDate);
  };

  useEffect(() => {
    if (props.value) setStyledTextInputValue();
  }, [props.value]);
  return (
    <>
      <Container {...props}>
        <StyledTouchableOpacity onPress={() => setVisible(true)} />
        <StyledTextInput {...props} value={value} />

        <ErrorContainer>
          {props.error && <ErrorText>* {props.error}</ErrorText>}
        </ErrorContainer>
      </Container>

      {visible && (
        <DateTimePickerModal
          mode="date"
          locale={locale}
          isVisible={true}
          onCancel={() => setVisible(false)}
          date={props.value ? new Date(props.value) : new Date()}
          onConfirm={(date) => {
            setVisible(false);
            props.onChangeValue(new Date(date));
          }}
        />
      )}
    </>
  );
};

export default InputDate;

const Container = styled(View)`
  position: relative;
  flex: ${({ half }: any) => (half ? '2' : '1')};
  width: ${({ half }: any) => (half ? 'auto' : '100%')};
  margin-left: ${({ half }: any) => (half ? '4px' : '0')};
  margin-right: ${({ half }: any) => (half ? '4px' : '0')};
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  z-index: 9;
  height: 47px;
  width: 100%;
  border: none;
  border-radius: 4px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: ${({ theme }) => theme.color.white};
`;

const StyledTextInput = styled(TextInput)`
  height: 47px;
  border: none;
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.2);
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
  color: ${({ theme }) => theme.color.warning};
`;
