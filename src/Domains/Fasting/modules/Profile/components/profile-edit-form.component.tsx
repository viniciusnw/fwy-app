import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { Button, Input, InputDate, InputSelect, Icon } from '@Components';
import {
  StyledField,
  StyledH1,
  StyledText1,
  StyledText2,
} from './../profile.style';

export const fields = {
  name: 'name',
  email: 'email',
  birthday: 'birthday',
  gender: 'gender',
  weight: 'weight',
  height: 'height',
  avatar: 'avatar',
};

const FormCustomerUpdate: React.FC<any> = ({
  setFieldValue,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
  loading,
}) => {
  const { t } = useTranslation('ProfileEdit');
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
        if (base64) setFieldValue(fields.avatar, res);
      },
    );
  };

  const genderOptions = [
    tForm.genderOptions.masculine,
    tForm.genderOptions.feminine,
    tForm.genderOptions.other,
  ];

  console.log(genderOptions);

  const profileEdit = {
    name: {
      value: values.name,
      returnKeyType: 'done',
      placeholder: tForm.name,
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.name),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.name && errors.name ? errors.name : null,
      onChangeText: (value) => setFieldValue(fields.name, value),
    },
    email: {
      value: values.email,
      returnKeyType: 'done',
      placeholder: tForm.email,
      autoCompleteType: 'email',
      clearButtonMode: 'while-editing',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.email),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.email && errors.email ? errors.email : null,
      onChangeText: (value) => setFieldValue(fields.email, value),
    },
    birthday: {
      value: values.birthday,
      placeholder: tForm.date,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.birthday),
      onChangeValue: (value) => setFieldValue(fields.birthday, value),
      error: touched.birthday && errors.birthday ? errors.birthday : null,
    },
    gender: {
      itens: genderOptions,
      value: values.gender,
      placeholder: tForm.gender,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.gender),
      onChangeValue: (value) => setFieldValue(fields.gender, value),
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
      onBlur: handleBlur(fields.weight),
      onFocus: () => setKeyboardOffset(-50),
      error: touched.weight && errors.weight ? errors.weight : null,
      onChangeText: (value) =>
        setFieldValue(fields.weight, value.replace(',', '.')),
    },
    height: {
      tag: tForm.height_uom,
      returnKeyType: 'done',
      keyboardType: 'numeric',
      placeholder: tForm.height,
      value: `${values.height}`,
      placeholderTextColor: '#FFF',
      clearButtonMode: 'while-editing',
      onBlur: handleBlur(fields.height),
      onFocus: () => setKeyboardOffset(25),
      error: touched.height && errors.height ? errors.height : null,
      onChangeText: (value) =>
        setFieldValue(fields.height, value.replace(',', '.')),
    },
  };

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

          <View style={{ flex: 1, marginLeft: 24 }}>
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

        <View style={{ marginBottom: 15, paddingHorizontal: 15, opacity: 0.5 }}>
          <StyledText2>{t('privateInfo')}</StyledText2>
        </View>

        <StyledField>
          <Input {...profileEdit.email} />
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
