import React from 'react';
import styled from 'styled-components/native';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { tag } = props;
  return (
    <Container {...props}>
      <InputContent>
        <StyledInput {...props} />

        {tag && (
          <Tag>
            <TagText>{tag}</TagText>
          </Tag>
        )}
      </InputContent>

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

const Container = styled(View)`
  flex-wrap: wrap;
  flex-direction: row;
  flex: ${({ half }: any) => (half ? '2' : '1')};
  width: ${({ half }: any) => (half ? 'auto' : '100%')};
  margin-left: ${({ half }: any) => (half ? '4px' : '0')};
  margin-right: ${({ half }: any) => (half ? '4px' : '0')};
`;

const InputContent = styled(View)`
  flex-direction: row;
`;

const Tag = styled(View)`
  width: 20%;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

const TagText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const StyledInput = styled(TextInput)<any>`
  border: none;
  height: 47px;
  font-size: 17px;
  line-height: 20px;
  border-radius: 4px;
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.color.white};
  width: ${({ tag }) => (tag ? '80%' : '100%')};
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
