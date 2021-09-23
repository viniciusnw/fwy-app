import * as yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';

import {
  Button,
  Icon,
  Input,
  InputDate,
  InputSelect,
  InputPhone,
} from '@Components';
import { customerRegisterVariables } from '@Config/graphql';
import { languagesEnum, registerFieldsEnum } from '@Config/constants';
export interface DataUploadType {
  type: string;
  base64: string;
}

type SignUpFormProps = {
  countriesData: any;
  countriesLoading: any;
  statesData: any;
  statesLoading: any;
  registerLoading: any;
  formChangeField: any;
  dispatchRegister: (register: customerRegisterVariables) => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({
  countriesData,
  countriesLoading,
  statesData,
  statesLoading,
  registerLoading,
  dispatchRegister,
  formChangeField,
}) => {
  const [keyboardOffset, setKeyboardOffset] = useState<number>(-150);
  const [dataUpload, setImageUpload] = useState<DataUploadType | null>(null);

  const { t, i18n } = useTranslation('SignUp');
  const tFormErros: any = t('formErros');
  const tForm: any = t('form');
  const tUOM: any = t('UOM');

  const FormRegisterSchemaPhonelength = {
    [languagesEnum.PT_BR]: 15,
    [languagesEnum.EN_US]: 17,
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
    //   [registerFieldsEnum.name]: 'Vinicius Inacio',
    //   [registerFieldsEnum.email]: 'viniciusnw@hotmail.com.br',
    //   [registerFieldsEnum.phone]: '(31) 98406-5335',
    //   [registerFieldsEnum.birthday]: '1994-03-07T10:20:55.000Z',
    //   [registerFieldsEnum.country]: 'Brazil',
    //   [registerFieldsEnum.state]: 'Sao Paulo',
    //   [registerFieldsEnum.password]: '123456',
    // },
    initialValues: {
      [registerFieldsEnum.name]: '',
      [registerFieldsEnum.email]: '',
      [registerFieldsEnum.phone]: '',
      [registerFieldsEnum.birthday]: '',
      [registerFieldsEnum.country]: '',
      [registerFieldsEnum.state]: '',
      [registerFieldsEnum.password]: '',
    },
    validationSchema: FormRegisterSchema,
    onSubmit: (customer: any) => {
      const configs: customerRegisterVariables['configs'] = {
        chat: false,
        height: tUOM.height_uom,
        weight: tUOM.weight_uom,
        language: i18n.language,
      };

      if (dataUpload?.base64 && dataUpload?.type) {
        dispatchRegister({
          customer: {
            ...customer,
            avatar: {
              type: dataUpload?.type,
              data: dataUpload?.base64,
            },
          },
          configs,
        });
      } else dispatchRegister({ customer, configs });
    },
  });

  const signUpForm = {
    language: {
      value: i18n.language,
      placeholder: tForm.language,
      itens: [languagesEnum.EN_US, languagesEnum.PT_BR],
      placeholderTextColor: '#FFF',
      onChangeValue: (value) => changeLanguage(value),
    },
    name: {
      returnKeyType: 'done',
      placeholder: tForm.name,
      autoCompleteType: 'name',
      value: formik.values.name,
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onFocus: () => setKeyboardOffset(-150),
      onBlur: formik.handleBlur(registerFieldsEnum.name),
      error: formik.touched.name && formik.errors.name,
      onChangeText: (value) =>
        formik.setFieldValue(registerFieldsEnum.name, value),
    },
    email: {
      returnKeyType: 'done',
      placeholder: tForm.email,
      autoCompleteType: 'email',
      value: formik.values.email,
      placeholderTextColor: '#FFF',
      clearButtonMode: 'while-editing',
      onFocus: () => setKeyboardOffset(-150),
      onBlur: formik.handleBlur(registerFieldsEnum.email),
      onChangeText: (value) =>
        formik.setFieldValue(registerFieldsEnum.email, value),
      error: formik.touched.email && formik.errors.email,
    },
    phone: {
      placeholder: tForm.phone,
      autoCompleteType: 'tel',
      value: formik.values.phone,
      placeholderTextColor: '#FFF',
      onFocus: () => setKeyboardOffset(-150),
      onBlur: formik.handleBlur(registerFieldsEnum.phone),
      onChangeText: (value) =>
        formik.setFieldValue(registerFieldsEnum.phone, value),
      error: formik.touched.phone && formik.errors.phone,
    },
    country: {
      placeholder: tForm.country,
      itens: countriesData,
      loading: countriesLoading,
      value: formik.values.country,
      placeholderTextColor: '#FFF',
      onBlur: formik.handleBlur(registerFieldsEnum.country),
      error: formik.touched.country && formik.errors.country,
      onChangeValue: (value) => {
        formik.setFieldValue(registerFieldsEnum.country, value);
        formChangeField('country', value);
      },
    },
    state: {
      placeholder: tForm.state,
      loading: statesLoading,
      value: formik.values.state,
      onBlur: formik.handleBlur(registerFieldsEnum.state),
      itens: formik.values.country ? statesData : [],
      error: formik.touched.state && formik.errors.state,
      placeholderTextColor: '#FFF',
      onChangeValue: (value) => {
        formik.setFieldValue(registerFieldsEnum.state, value);
        formChangeField('state', value);
      },
    },
    birthday: {
      value: formik.values.birthday,
      placeholderTextColor: '#FFF',
      placeholder: tForm.birthday,
      error: formik.touched.birthday && formik.errors.birthday,
      onChangeValue: (value) =>
        formik.setFieldValue(registerFieldsEnum.birthday, value),
    },
    password: {
      secureTextEntry: true,
      returnKeyType: 'done',
      placeholder: tForm.password,
      value: formik.values.password,
      placeholderTextColor: '#FFF',
      clearButtonMode: 'while-editing',
      onFocus: () => setKeyboardOffset(0),
      onBlur: formik.handleBlur(registerFieldsEnum.password),
      error: formik.touched.password && formik.errors.password,
      onChangeText: (value) =>
        formik.setFieldValue(registerFieldsEnum.password, value),
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

  const changeLanguage = (language: languagesEnum) =>
    i18n.changeLanguage(language);

  return (
    <ContainerScroll
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        keyboardVerticalOffset={keyboardOffset}
        behavior="position">
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
              icon="user-circle"
              color={'rgba(255, 255, 255, .4)'}
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

          <LanguageContainer>
            <LanguageText>{tForm.language}</LanguageText>
          </LanguageContainer>

          <StyledField>
            <InputSelect {...signUpForm.language} />
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
    </ContainerScroll>
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

const StyledText = styled(Text)`
  font-size: 18px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const StyledField = styled(View)`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledSelect = styled(View)`
  margin-right: -4px;
  margin-left: -4px;
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const LanguageContainer = styled(View)`
  margin-bottom: 15px;
  padding: 0 15px;
  opacity: 0.5;
`;

const LanguageText = styled(Text)`
  font-size: 15px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const ContainerScroll = styled(ScrollView)`
  width: 100%;
`;
