import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';


const StyledContainer = styled(View)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled(View)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const StyledTitle = styled(Text)`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  margin: 20px 0 25px;
`;

const StyledSocial = styled(View)`
  width: 100%;
  flex-direction: row;
`;

const StyledSocialItem = styled(View)`
  flex-basis: 50%;
  padding: 0 10px;
`;

const StyledOr = styled(View)`
  margin: 30px 20px 20px;
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.color.border};
  align-items: center;
`;

const StyledOrText = styled(Text)`
  text-align: center;
  width: 40px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.white};
  margin-top: -10px;
`;

const StyledForm = styled(View)`
  padding: 0 20px 20px;
`;

const StyledField = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledActions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledForgotPassword = styled(TouchableOpacity)``;

const StyledRegister = styled(View)`
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const StyledRegisterText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const LoginBox = ({
  facebook,
  google,
  email,
  password,
  forgotPassword,
  submit,
  register,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <Logo />
      <StyledBox>
        <StyledTitle>Login</StyledTitle>

        <StyledSocial>
          {!!facebook && (
            <StyledSocialItem style={{ paddingLeft: 20 }}>
              <Button {...facebook} color="black">
                Facebook
              </Button>
            </StyledSocialItem>
          )}
          {!!google && (
            <StyledSocialItem style={{ paddingRight: 20 }}>
              <Button {...google} color="black">
                Google
              </Button>
            </StyledSocialItem>
          )}
        </StyledSocial>

        <StyledOr>
          <StyledOrText>ou</StyledOrText>
        </StyledOr>

        <StyledForm>
          <StyledField>
            <Input {...email} />
          </StyledField>
          <StyledField>
            <Input {...password} />
          </StyledField>
          <StyledActions>
            <Button>Entrar</Button>
            {!!forgotPassword && (
              <StyledForgotPassword {...forgotPassword}>
                <Text>Recuperar senha</Text>
              </StyledForgotPassword>
            )}
          </StyledActions>
        </StyledForm>
      </StyledBox>

      {!!register && (
        <StyledRegister>
          <StyledRegisterText>Ainda não possui uma conta?</StyledRegisterText>
          <Button {...register}>Cadastre-se</Button>
        </StyledRegister>
      )}
    </StyledContainer>
  );
};

export default LoginBox;
