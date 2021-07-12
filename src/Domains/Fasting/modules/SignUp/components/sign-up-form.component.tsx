import * as yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components/native';

import {
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  Button,
  Icon,
  Input,
  InputDate,
  InputSelect,
  InputPhone,
} from '@Components';
import {
  StyledBox,
  StyledField,
  StyledSelect,
  StyledText,
} from './sign-up-form.style';

import { FASTING } from '@Config/constants';
import { useTranslation } from 'react-i18next';

const { languages, registerFields } = FASTING.enums;
export interface DataUploadType {
  type: string;
  base64: string;
}

const SignUpForm: React.FC<any> = ({
  countriesData,
  countriesLoading,
  statesData,
  statesLoading,
  registerLoading,
  dispatchRegister,
  formChangeField,
}) => {
  const [dataUpload, setImageUpload] = useState<DataUploadType | null>(null);

  const { t, i18n } = useTranslation('SignUp');
  const tFormErros: any = t('formErros');
  const tForm: any = t('form');

  const FormRegisterSchemaPhonelength = {
    [languages.PT_BR]: 15, // (11) 11111-1111
    [languages.EN_US]: 17, // +1 (732) 581-7296
  };

  const FormRegisterSchema = yup.object().shape({
    name: yup.string().required(tFormErros.name),
    email: yup.string().email(tFormErros.email).required(tFormErros.emailNull),
    phone: yup
      .string()
      .length(FormRegisterSchemaPhonelength[i18n.language], tFormErros.phone)
      .required(tFormErros.phoneNull),
    birthday: yup.date().required(tFormErros.birthday),
    country: yup.string().required(tFormErros.country),
    state: yup.string().required(tFormErros.state),
    password: yup.string().required(tFormErros.password),
  });

  const formik = useFormik({
    // initialValues: {
    //   [fields.name]: 'Vinicius Inacio',
    //   [fields.email]: 'viniciusnw@hotmail.com.br',
    //   [fields.phone]: '(31) 98406-5335',
    //   [fields.birthday]: '1994-03-07T10:20:55.000Z',
    //   [fields.country]: 'Brazil',
    //   [fields.state]: 'Sao Paulo',
    //   [fields.password]: '123456',
    // },
    initialValues: {
      [registerFields.name]: '',
      [registerFields.email]: '',
      [registerFields.phone]: '',
      [registerFields.birthday]: '',
      [registerFields.country]: '',
      [registerFields.state]: '',
      [registerFields.password]: '',
    },
    validationSchema: FormRegisterSchema,
    onSubmit: (customer: any) => {
      if (dataUpload?.base64 && dataUpload?.type) {
        dispatchRegister({
          customer: {
            ...customer,
            avatar: {
              type: dataUpload?.type,
              data: dataUpload?.base64,
            },
          },
        });
      } else dispatchRegister({ customer });
    },
  });

  const signUpForm = {
    name: {
      placeholder: tForm.name,
      autoCompleteType: 'name',
      value: formik.values.name,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFields.name),
      onChangeText: (value) => formik.setFieldValue(registerFields.name, value),
      error: formik.touched.name && formik.errors.name,
    },
    email: {
      placeholder: tForm.email,
      autoCompleteType: 'email',
      value: formik.values.email,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFields.email),
      onChangeText: (value) =>
        formik.setFieldValue(registerFields.email, value),
      error: formik.touched.email && formik.errors.email,
    },
    phone: {
      placeholder: tForm.phone,
      autoCompleteType: 'tel',
      value: formik.values.phone,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFields.phone),
      onChangeText: (value) =>
        formik.setFieldValue(registerFields.phone, value),
      error: formik.touched.phone && formik.errors.phone,
    },
    country: {
      placeholder: tForm.country,
      itens: countriesData,
      loading: countriesLoading,
      value: formik.values.country,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFields.country),
      error: formik.touched.country && formik.errors.country,
      onChangeValue: (value) => {
        formik.setFieldValue(registerFields.country, value);
        formChangeField('country', value);
      },
    },
    state: {
      placeholder: tForm.state,
      loading: statesLoading,
      value: formik.values.state,
      onBlur: formik.handleBlur(registerFields.state),
      itens: formik.values.country ? statesData : [],
      error: formik.touched.state && formik.errors.state,
      placeholderTextColor: '#FFF',
      onChangeValue: (value) => {
        formik.setFieldValue(registerFields.state, value);
        formChangeField('state', value);
      },
    },
    birthday: {
      value: formik.values.birthday,
      placeholderTextColor: '#FFF',
      placeholder: tForm.birthday,
      error: formik.touched.birthday && formik.errors.birthday,
      onChangeValue: (value) =>
        formik.setFieldValue(registerFields.birthday, value),
    },
    password: {
      secureTextEntry: true,
      placeholder: tForm.password,
      value: formik.values.password,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFields.password),
      error: formik.touched.password && formik.errors.password,
      onChangeText: (value) =>
        formik.setFieldValue(registerFields.password, value),
    },
  };

  const handlerUploadLaunchImageLibrary = () => {
    launchImageLibrary(
      {
        quality: 0.1,
        mediaType: 'photo',
        includeBase64: true,
      },
      (res: any) => {
        const { base64 } = res;
        if (base64) setImageUpload(res);
      },
    );
  };

  return (
    <StyledBox>
      <KeyboardAvoidingView style={{ width: '100%' }} behavior="position">
        <TouchableOpacityStyled onPress={handlerUploadLaunchImageLibrary}>
          {(dataUpload && (
            <ImageStyled
              resizeMode={'cover'}
              source={{
                uri: `data:${dataUpload.type};base64,${dataUpload.base64}`,
              }}
            />
          )) || (
            <Icon
              size={60}
              color={'rgba(255, 255, 255, .4)'}
              icon="user-circle"
            />
          )}

          <StyledText>
            {(!dataUpload && tForm.avatar) ||
              (dataUpload && tForm.avatarRemove)}
          </StyledText>
        </TouchableOpacityStyled>

        <View style={{ marginTop: 30 }}>
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

          <SubmitContainer>
            <Button
              color="secondary"
              loading={registerLoading}
              onPress={formik.handleSubmit}>
              {tForm.submit}
            </Button>
          </SubmitContainer>
        </View>
      </KeyboardAvoidingView>
    </StyledBox>
  );
};

export default SignUpForm;

const TouchableOpacityStyled = styled(TouchableOpacity)`
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled(Image)`
  width: 61px;
  height: 61px;
  border-radius: 60px;
`;

const SubmitContainer = styled(View)`
  width: 50%;
  margin: 40px 0;
  align-self: center;
`;
