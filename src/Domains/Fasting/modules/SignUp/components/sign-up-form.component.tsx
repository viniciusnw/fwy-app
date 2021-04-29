import * as yup from 'yup';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Button, Icon, Input, InputDate, InputSelect, InputPhone } from '@Components';
import { StyledBox, StyledField, StyledSelect, StyledText } from './sign-up-form.style';

export interface DataUploadType {
  type: string
  base64: string
}

const SignUpForm: React.FC<any> = ({ countriesData, countriesLoading, statesData, statesLoading, registerLoading, dispatchRegister, formChangeField }) => {

  const [dataUpload, setImageUpload] = useState<DataUploadType | null>(null);

  const fields = {
    name: "name",
    email: "email",
    phone: "phone",
    birthday: "birthday",
    country: "country",
    state: "state",
    password: "password",
  };

  const FormRegisterSchema = yup.object().shape({
    name: yup.string().required('Preencha seu nome.'),
    email: yup.string().email('E-mail deve ser um e-mail válido').required('Preencha seu e-mail.'),
    phone: yup.string().length(15, 'deve ter exatamente 15 caracteres').required('Preencha seu telefone.'),
    birthday: yup.date().required('Preencha a data do seu aniversário.'),
    country: yup.string().required('Preencha seu país.'),
    state: yup.string().required('Preencha seu estado.'),
    password: yup.string().required('Preencha sua senha.'),
  });

  const formik = useFormik({
    initialValues: {
      [fields.name]: 'Vinicius Inacio',
      [fields.email]: 'viniciusnw@hotmail.com',
      [fields.phone]: '(31) 98406-5335',
      [fields.birthday]: '1994-03-07T10:20:55.000Z',
      [fields.country]: 'Brazil',
      [fields.state]: 'Sao Paulo',
      [fields.password]: '123456',
    },
    validationSchema: FormRegisterSchema,
    onSubmit: (customer: any) => {
      if (dataUpload?.base64 && dataUpload?.type) {
        dispatchRegister({
          customer: {
            ...customer,
            avatar: {
              type: dataUpload?.type,
              data: dataUpload?.base64
            }
          }
        })
      }
      else dispatchRegister({ customer })
    },
  });

  const signUpForm = {
    name: {
      placeholder: 'Nome',
      autoCompleteType: 'name',
      value: formik.values.name,
      placeholderTextColor: "#FFF",
      onChangeText: value => formik.setFieldValue(fields.name, value),
      error: formik.touched.name && formik.errors.name ? formik.errors.name : null
    },
    email: {
      placeholder: 'E-mail',
      autoCompleteType: 'email',
      value: formik.values.email,
      placeholderTextColor: "#FFF",
      onChangeText: value => formik.setFieldValue(fields.email, value),
      error: formik.touched.email && formik.errors.email ? formik.errors.email : null
    },
    phone: {
      placeholder: 'Telefone',
      autoCompleteType: 'tel',
      value: formik.values.phone,
      placeholderTextColor: "#FFF",
      onChangeText: value => formik.setFieldValue(fields.phone, value),
      error: formik.touched.phone && formik.errors.phone ? formik.errors.phone : null
    },
    country: {
      placeholder: 'País',
      itens: countriesData,
      loading: countriesLoading,
      value: formik.values.country,
      placeholderTextColor: "#FFF",
      error: formik.touched.country && formik.errors.country ? formik.errors.country : null,
      onChangeValue: value => {
        formik.setFieldValue(fields.country, value)
        formChangeField('country', value)
      }
    },
    state: {
      placeholder: 'Estado',
      loading: statesLoading,
      value: formik.values.state,
      itens: formik.values.country ? statesData : [],
      error: formik.touched.state && formik.errors.state ? formik.errors.state : null,
      placeholderTextColor: "#FFF",
      onChangeValue: value => {
        formik.setFieldValue(fields.state, value)
        formChangeField('state', value)
      }
    },
    birthday: {
      value: formik.values.birthday,
      placeholderTextColor: "#FFF",
      placeholder: 'Data de Nascimento',
      onChangeValue: value => formik.setFieldValue(fields.birthday, value),
      error: formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday : null,
    },
    password: {
      secureTextEntry: true,
      placeholder: 'Password',
      value: formik.values.password,
      placeholderTextColor: "#FFF",
      onChangeText: value => formik.setFieldValue(fields.password, value),
      error: formik.touched.password && formik.errors.password ? formik.errors.password : null,
    },
  }

  const handlerUploadLaunchImageLibrary = () => {
    launchImageLibrary({
      quality: 0.1,
      mediaType: 'photo',
      includeBase64: true,
    }, (res: any) => {
      const { base64 } = res;
      if (base64) setImageUpload(res)
    })
  }

  return (
    <>
      <TouchableOpacity onPress={handlerUploadLaunchImageLibrary} style={{ marginHorizontal: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {!dataUpload && (
          <Icon size={60} color={'rgba(255, 255, 255, .4)'} icon="user-circle" />
        ) || dataUpload && (
          <Image style={{ borderRadius: 60, width: 61, height: 61, resizeMode: 'cover', borderWidth: 1 }} source={{ uri: `data:${dataUpload.type};base64,${dataUpload.base64}` }} />
        )}

        <StyledText>
          {!dataUpload && (
            'Carregar Foto'
          ) || dataUpload && (
            'Trocar Foto'
          )}
        </StyledText>
      </TouchableOpacity>

      <StyledBox>
        <StyledField>
          <Input {...signUpForm.name} />
        </StyledField>

        <StyledField>
          <Input {...signUpForm.email} />
        </StyledField>

        <StyledField>
          <InputPhone {...signUpForm.phone} />
        </StyledField>

        <StyledSelect>
          <InputSelect half {...signUpForm.country} />
          <InputSelect half {...signUpForm.state} />
        </StyledSelect>

        <StyledField>
          <InputDate {...signUpForm.birthday} />
        </StyledField>

        <StyledField>
          <Input {...signUpForm.password} />
        </StyledField>

        <View style={{ width: '50%', alignSelf: 'center', marginVertical: 40 }}>
          <Button loading={registerLoading} onPress={formik.handleSubmit} color="secondary">
            Acessar
					</Button>
        </View>
      </StyledBox>
    </>
  );
};

export default SignUpForm;
