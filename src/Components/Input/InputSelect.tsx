import styled from 'styled-components/native';
import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

const InputSelect: React.FC<any> = (props: any) => {
  const RNPickerSelectRef: React.RefObject<RNPickerSelect> = React.createRef();

  const mapItens = () => {
    if (props.itens) return props.itens.map((i) => ({ label: i, value: i }));
    return [];
  };

  useEffect(() => {}, [RNPickerSelectRef]);
  return (
    <Container {...props}>
      <ContainerInput>
        <StyledTouchableOpacity
          onPress={() => RNPickerSelectRef.current?.togglePicker()}
        />
        <StyledTextInput
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
        />
        {props.loading && (
          <Loading>
            <ActivityIndicator size="small" color={'#FFF'} />
          </Loading>
        )}
      </ContainerInput>

      <ErrorContainer>
        {props.error && <ErrorText>* {props.error}</ErrorText>}
      </ErrorContainer>

      <RNPickerSelect
        items={mapItens()}
        value={props.value}
        ref={RNPickerSelectRef}
        disabled={props.loading}
        modalProps={{ animated: true }}
        placeholder={{ label: 'Selecione', value: '' }}
        onValueChange={(value) => props.onChangeValue(value)}
        style={{
          inputIOS: {
            display: 'none',
          },
        }}
      />
    </Container>
  );
};

export default InputSelect;

const Container = styled(View)`
  height: 64px;
  flex: ${({ half }: any) => (half ? 2 : 1)};
  width: ${({ half }: any) => (half ? 'auto' : '100%')};
  margin-left: ${({ half }: any) => (half ? '4px' : 0)};
  margin-right: ${({ half }: any) => (half ? '4px' : 0)};
`;

const ContainerInput = styled(View)`
  flex: 1;
  height: 100%;
  height: 47px;
  position: relative;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  z-index: 9;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: ${({ theme }) => theme.color.white};
`;

const StyledTextInput = styled(TextInput)`
  flex: 1;
  border: none;
  height: 47px;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.color.white};
  background-color: rgba(255, 255, 255, 0.2);
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const Loading = styled(View)`
  right: 0;
  height: 100%;
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  justify-content: center;
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
