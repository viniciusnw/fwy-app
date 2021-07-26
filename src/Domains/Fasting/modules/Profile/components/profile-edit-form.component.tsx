import * as yup from 'yup';
import React, { useState } from 'react';
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

export const FormCustomerUpdateSchema = yup.object().shape({
  [fields.name]: yup.string().required('Preencha seu nome.'),
  [fields.email]: yup
    .string()
    .email('E-mail inválido.')
    .required('Preencha seu email.'),
  [fields.birthday]: yup.date().required('Preencha sua data de nascimento.'),
  [fields.gender]: yup.string().required('Preencha seu gênero'),
  [fields.weight]: yup
    .number()
    .required('Preencha seu peso')
    .min(1, 'Peso inválido.'),
  [fields.height]: yup
    .number()
    .required('Preencha sua altura')
    .min(1, 'Altura inválido.'),
});

const FormCustomerUpdate: React.FC<any> = ({
  setFieldValue,
  handleBlur,
  handleSubmit,
  values,
  errors,
  touched,
  loading,
}) => {
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

  const profileEdit = {
    name: {
      value: values.name,
      placeholder: 'Name',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.name),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.name && errors.name ? errors.name : null,
      onChangeText: (value) => setFieldValue(fields.name, value),
    },
    email: {
      value: values.email,
      placeholder: 'E-mail',
      autoCompleteType: 'email',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.email),
      onFocus: () => setKeyboardOffset(-200),
      error: touched.email && errors.email ? errors.email : null,
      onChangeText: (value) => setFieldValue(fields.email, value),
    },
    birthday: {
      value: values.birthday,
      placeholder: 'Birthday',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.birthday),
      onChangeValue: (value) => setFieldValue(fields.birthday, value),
      error: touched.birthday && errors.birthday ? errors.birthday : null,
    },
    gender: {
      value: values.gender,
      placeholder: 'Gender',
      placeholderTextColor: '#FFF',
      itens: ['Masculino', 'Feminino'],
      onBlur: handleBlur(fields.gender),
      onChangeValue: (value) => setFieldValue(fields.gender, value),
      error: touched.gender && errors.gender ? errors.gender : null,
    },
    weight: {
      tag: 'lb',
      placeholder: 'Weight',
      keyboardType: 'numeric',
      value: `${values.weight}`,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.weight),
      onFocus: () => setKeyboardOffset(-50),
      error: touched.weight && errors.weight ? errors.weight : null,
      onChangeText: (value) => setFieldValue(fields.weight, value),
    },
    height: {
      tag: 'In',
      placeholder: 'Height',
      keyboardType: 'numeric',
      value: `${values.height}`,
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.height),
      onFocus: () => setKeyboardOffset(25),
      error: touched.height && errors.height ? errors.height : null,
      onChangeText: (value) => setFieldValue(fields.height, value),
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
          <StyledText1>Change Profile Picture</StyledText1>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 40, marginHorizontal: 40 }}>
        <StyledField>
          <Input {...profileEdit.name} />
        </StyledField>

        <View style={{ marginBottom: 15, paddingHorizontal: 15, opacity: 0.5 }}>
          <StyledText2> Private Information </StyledText2>
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
            Save
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