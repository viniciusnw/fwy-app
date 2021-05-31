import React from 'react';
import styled from 'styled-components/native';
import { TextInput, View, Text } from 'react-native';

const Container = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  flex: ${({ half }: any) => (half ? '2' : '1')};
  width: ${({ half }: any) => (half ? 'auto' : '100%')};
  margin-left: ${({ half }: any) => (half ? '4px' : '0')};
  margin-right: ${({ half }: any) => (half ? '4px' : '0')};
`;

const StyledInput = styled(TextInput)`
  width: 100%;
  border: none;
  height: 47px;
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

const Input = (props) => {
  return (
    <Container {...props}>
      <StyledInput {...props} />

      <ErrorContainer>
        {props.error && (
          <ErrorText
            style={{
              textShadowColor: 'rgba(150, 150, 150, 1)',
              textShadowOffset: { width: -1, height: -1 },
              textShadowRadius: 7,
            }}>
            * {props.error}
          </ErrorText>
        )}
      </ErrorContainer>
    </Container>
  );
};

export default Input;
