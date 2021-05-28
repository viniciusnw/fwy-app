import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { View } from 'react-native';
import { Button, Input } from '@Components';
import { StyledBox, StyledField } from './login-form.style';


const LoginForm: React.FC<any> = ({ loginLoading, dispatchLogin }) => {

  const fields = {
    email: "email",
    password: "password",
  };

  const FormLoginSchema = yup.object().shape({
    email: yup.string().email('E-mail deve ser um e-mail válido').required('Preencha seu e-mail.'),
    password: yup.string().required('Preencha sua senha.'),
  });

  const formik = useFormik({
    initialValues: {
      [fields.email]: 'viniciusnw@hotmail.com',
      [fields.password]: '123456',
      // [fields.email]: '',
      // [fields.password]: '',
    },
    validationSchema: FormLoginSchema,
    onSubmit: (login: any) => {
      // console.log(login)
      dispatchLogin(login)
    },
  });

  const loginForm = {
    email: {
      placeholder: 'E-mail',
      autoCompleteType: 'email',
      value: formik.values.email,
      placeholderTextColor: "#FFF",
      onBlur: formik.handleBlur(fields.email),
      onChangeText: (value) => formik.setFieldValue(fields.email, value),
      error: formik.touched.email && formik.errors.email ? formik.errors.email : null
    },
    password: {
      placeholder: 'Senha',
      secureTextEntry: true,
      autoCompleteType: 'password',
      value: formik.values.password,
      placeholderTextColor: "#FFF",
      onBlur: formik.handleBlur(fields.password),
      onChangeText: (value) => formik.setFieldValue(fields.password, value),
      error: formik.touched.password && formik.errors.password ? formik.errors.password : null
    },
  }

  return (
    <>
      <StyledBox>
        <StyledField>
          <Input {...loginForm.email} />
        </StyledField>
        <StyledField>
          <Input {...loginForm.password} />
        </StyledField>

        <View style={{ width: '50%', alignSelf: 'center', marginTop: 60, marginBottom: 20 }}>
          <Button loading={loginLoading} color="secondary" onPress={formik.handleSubmit}>
            Login
          </Button>
        </View>
      </StyledBox>
    </>
  );
};

export default LoginForm;
