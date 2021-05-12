import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { FASTING } from '@Config/constants';
import { Button, Input } from '@Components';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {
  StyledH1,
  StyledText2,
  StyledH2,
  StyledText3,
  ColorPick,
} from './../fast.style';

const FastStartForm: React.FC<any> = ({}) => {
  const { days, hours, fastColors } = FASTING;

  const fields = {
    name: 'name',
    days: 'days',
    hours: 'hours',
    color: 'color',
  };

  const FormFastSchema = yup.object().shape({
    name: yup.string().required('Escolha um nome.'),
    hours: yup.number().required('Escolha as horas.'),
  });

  const formik = useFormik({
    initialValues: {
      [fields.name]: null,
      [fields.days]: 0,
      [fields.hours]: 0,
      [fields.color]: '',
    },
    validationSchema: FormFastSchema,
    onSubmit: (fast: any) => {
      console.log(fast);
    },
  });

  const fastForm = {
    name: {
      value: formik.values.name,
      placeholder: 'Fasting name',
      placeholderTextColor: '#FFF',
      onChangeText: (value) => formik.setFieldValue(fields.name, value),
    },
  };

  return (
    <>
      {/* === */}
      <View style={{ paddingBottom: 15, maxHeight: 48 }}>
        <Input {...fastForm.name} />
      </View>

      {/* === */}
      <View style={{ padding: 15, width: '100%' }}>
        <StyledH1>Duration</StyledH1>
        <StyledText2>You can save presets up to 24 hours.</StyledText2>
      </View>

      <View style={{ width: '100%', padding: 15 }}>
        <View
          style={{
            marginBottom: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <StyledH2>Days</StyledH2>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {days.map((d, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => formik.setFieldValue(fields.days, d)}
                style={[
                  {
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 6,
                  },
                  d == formik.values.days && { backgroundColor: '#EC5349' },
                ]}>
                <StyledText3>{d}</StyledText3>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <StyledH2>Hours</StyledH2>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {hours.map((h, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => formik.setFieldValue(fields.hours, h)}
                style={[
                  {
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 6,
                  },
                  h == formik.values.hours && { backgroundColor: '#EC5349' },
                ]}>
                <StyledText3>{h}</StyledText3>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* === */}
      <View style={{ width: '100%', padding: 15 }}>
        <StyledH1>Color</StyledH1>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            marginHorizontal: -6,
          }}>
          {fastColors.map((c, i) => (
            <ColorPick
              key={i}
              color={c}
              active={formik.values.color == c}
              onPress={() => formik.setFieldValue(fields.color, c)}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default FastStartForm;
