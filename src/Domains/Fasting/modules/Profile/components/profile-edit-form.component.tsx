import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Button, Input, InputDate, InputSelect, Icon, InputPhone } from '@Components';
import {
  StyledField,
  StyledH1,
  StyledText1,
  StyledText2,
  FieldTitle,
  StyledText,
} from './../profile.style';
import { languagesEnum, editProfileFieldsEnum } from '@Config/constants';

const FormCustomerUpdate: React.FC<any> = ({
  setFieldValue,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
  loading,
}) => {
  const { t, i18n } = useTranslation('ProfileEdit');
  const tForm: any = t('form');

  const [keyboardOffset, setKeyboardOffset] = useState<number>(-150);

  const handlerUploadLaunchImageLibrary = () => {
    launchImageLibrary(
      {
        quality: 0.1,
        mediaType: 'photo',
        includeBase64: true,
      },
      (res: any) => {
        const { base64 } = res;
        if (base64) setFieldValue(editProfileFieldsEnum.avatar, res);
      },
    );
  };

  const genderOptions = [
    tForm.genderOptions.masculine,
    tForm.genderOptions.feminine,
    tForm.genderOptions.other,
  ];

  const profileEdit = {
    language: {
      placeholder: tForm.language,
      itens: [languagesEnum.EN_US, languagesEnum.PT_BR],
      value: i18n.language,
      placeholderTextColor: '#FFF',
      onChangeValue: (value) => changeLanguage(value),
    },
    name: {
      value: values.name,
      returnKeyType: 'done',
      placeholder: tForm.name,
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(editProfileFieldsEnum.name),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.name && errors.name ? errors.name : null,
      onChangeText: (value) => setFieldValue(editProfileFieldsEnum.name, value),
    },
    phone: {
      placeholder: tForm.phone,
      autoCompleteType: 'tel',
      value: values.phone,
      placeholderTextColor: '#FFF',
      onFocus: () => setKeyboardOffset(-150),
      onBlur: handleBlur(editProfileFieldsEnum.phone),
      onChangeText: (value) =>
        setFieldValue(editProfileFieldsEnum.phone, value),
      error: touched.phone && errors.phone,
    },
    email: {
      value: values.email,
      returnKeyType: 'done',
      placeholder: tForm.email,
      autoCompleteType: 'email',
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(editProfileFieldsEnum.email),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.email && errors.email ? errors.email : null,
      onChangeText: (value) =>
        setFieldValue(editProfileFieldsEnum.email, value),
    },
    birthday: {
      value: values.birthday,
      placeholder: tForm.date,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(editProfileFieldsEnum.birthday),
      onChangeValue: (value) =>
        setFieldValue(editProfileFieldsEnum.birthday, value),
      error: touched.birthday && errors.birthday ? errors.birthday : null,
    },
    gender: {
      itens: genderOptions,
      value: values.gender,
      placeholder: tForm.gender,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(editProfileFieldsEnum.gender),
      onChangeValue: (value) =>
        setFieldValue(editProfileFieldsEnum.gender, value),
      error: touched.gender && errors.gender ? errors.gender : null,
    },
    weight: {
      tag: tForm.weight_uom,
      placeholder: tForm.weight,
      keyboardType: 'numeric',
      returnKeyType: 'done',
      value: `${values.weight}`,
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(editProfileFieldsEnum.weight),
      onFocus: () => setKeyboardOffset(-50),
      error: touched.weight && errors.weight ? errors.weight : null,
      onChangeText: (value) =>
        setFieldValue(editProfileFieldsEnum.weight, value.replace(',', '.')),
    },
    height: {
      tag: tForm.height_uom,
      returnKeyType: 'done',
      keyboardType: 'numeric',
      placeholder: tForm.height,
      value: `${values.height}`,
      placeholderTextColor: '#FFF',
      clearButtonMode: 'while-editing',
      onBlur: handleBlur(editProfileFieldsEnum.height),
      onFocus: () => setKeyboardOffset(25),
      error: touched.height && errors.height ? errors.height : null,
      onChangeText: (value) =>
        setFieldValue(editProfileFieldsEnum.height, value.replace(',', '.')),
    },
  };

  const changeLanguage = (language: languagesEnum) =>
    i18n.changeLanguage(language);

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{ width: '100%' }}
      keyboardVerticalOffset={keyboardOffset}>
      <TouchableOpacity
        onPress={handlerUploadLaunchImageLibrary}
        style={{ alignItems: 'center', marginHorizontal: 20 }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <View>
            <Avatar avatar={values.avatar} />
          </View>

          <View
            style={{
              flex: 1,
              marginLeft: 24,
              height: '100%',
              maxHeight: '70%',
              justifyContent: 'space-around',
            }}>
            <StyledText>{t('hello')}</StyledText>
            <StyledH1>{values.name?.split(' ')[0]}</StyledH1>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 40,
            alignSelf: 'flex-start',
          }}>
          <StyledText1>{tForm.avatar}</StyledText1>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 40, marginHorizontal: 40 }}>
        <StyledField>
          <Input {...profileEdit.name} />
        </StyledField>

        <FieldTitle>
          <StyledText2>{t('privateInfo')}</StyledText2>
        </FieldTitle>

        <StyledField>
          <Input {...profileEdit.email} />
        </StyledField>

        <StyledField>
          <InputPhone {...profileEdit.phone} />
        </StyledField>

        <StyledField>
          <InputDate {...profileEdit.birthday} />
        </StyledField>

        <StyledField>
          <InputSelect {...profileEdit.gender} />
        </StyledField>

        <StyledField>
          <Input {...profileEdit.weight} />
        </StyledField>

        <StyledField>
          <Input {...profileEdit.height} />
        </StyledField>

        <FieldTitle>
          <StyledText2>{tForm.language}</StyledText2>
        </FieldTitle>

        <StyledField>
          <InputSelect {...profileEdit.language} />
        </StyledField>

        <View style={{ marginTop: 15, marginHorizontal: '33%' }}>
          <Button loading={loading} onPress={handleSubmit} color="secondary">
            {tForm.submit}
          </Button>
        </View>

        <View style={{ height: 40 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default FormCustomerUpdate;

const Avatar = (User) => {
  if (!User.avatar)
    return (
      <Icon size={110} icon="user-circle" color={'rgba(255, 255, 255, .5)'} />
    );
  else
    return (
      <Image
        style={{
          width: 110,
          height: 110,
          borderRadius: 110,
          resizeMode: 'cover',
        }}
        source={{
          uri: `data:${User.avatar.type};base64,${
            User.avatar.data || User.avatar.base64
          }`,
        }}
      />
    );
};
