import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { View } from 'react-native';
import { Button, Input } from '@Components';
import { StyledBox, StyledField } from './login-form.style';

import { FASTING } from '@Config/constants';
import { useTranslation } from 'react-i18next';

const { loginFields } = FASTING.enums;

const LoginForm: React.FC<any> = ({
  loginLoading,
  dispatchLogin,
  lastUser,
}) => {
  const { t } = useTranslation('SignUp');
  const tFormErros: any = t('formErros');
  const tForm: any = t('form');

  const FormLoginSchema = yup.object().shape({
    password: yup.string().required(tFormErros.password),
    email: yup.string().email(tFormErros.email).required(tFormErros.emailNull),
  });

  const formik = useFormik({
    initialValues: {
      // [fields.email]: 'viniciusnw@hotmail.com',
      // [fields.password]: '123456',
      [loginFields.email]: lastUser?.email,
      [loginFields.password]: lastUser?.password,
    },
    validationSchema: FormLoginSchema,
    onSubmit: (login: any) => {
      // console.log(login)
      dispatchLogin(login);
    },
  });

  const loginForm = {
    email: {
      placeholder: tForm.email,
      autoCompleteType: 'email',
      value: formik.values.email,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(loginFields.email),
      onChangeText: (value) => formik.setFieldValue(loginFields.email, value),
      error: formik.touched.email && formik.errors.email,
    },
    password: {
      placeholder: tForm.password,
      secureTextEntry: true,
      autoCompleteType: 'password',
      value: formik.values.password,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(loginFields.password),
      onChangeText: (value) =>
        formik.setFieldValue(loginFields.password, value),
      error: formik.touched.password && formik.errors.password,
    },
  };

  return (
    <>
      <StyledBox>
        <StyledField>
          <Input {...loginForm.email} />
        </StyledField>
        <StyledField>
          <Input {...loginForm.password} />
        </StyledField>

        <View
          style={{
            width: '50%',
            marginTop: 60,
            marginBottom: 20,
            alignSelf: 'center',
          }}>
          <Button
            loading={loginLoading}
            color="secondary"
            onPress={formik.handleSubmit}>
            {tForm.submit}
          </Button>
        </View>
      </StyledBox>
    </>
  );
};

export default LoginForm;
