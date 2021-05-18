import React from 'react';
import * as yup from 'yup';

import { FASTING } from '@Config/constants';
import { Button, Input } from '@Components';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {
  StyledH1,
  StyledH2,
  ColorPick,
  StyledText2,
  StyledText3,
} from './../fast.style';

export const fields = {
  name: 'name',
  days: 'days',
  hours: 'hours',
  color: 'color',
};

export const FormFastSchema = yup.object().shape({
  name: yup.string().required('Escolha um nome para seu Jejum.'),
  hours: yup.number().min(1, 'Escolha as horas').required('Escolha as horas.'),
});

const FastStartForm: React.FC<any> = ({
  setFieldValue,
  handleBlur,
  values,
  errors,
}) => {
  const { days, hours, fastColors } = FASTING;

  const fastForm = {
    name: {
      value: values.name,
      placeholder: 'Fasting name',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.name),
      onChangeText: (value) => setFieldValue(fields.name, value),
    },
  };

  console.log('FormErros: ', errors);

  // Scroll to select element
  // ref.scrollTo({
  //   x: dataSourceCords[scrollToIndex - 1],
  //   y: 0,
  //   animated: true,
  // });

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
                onPress={() => setFieldValue(fields.days, d)}
                style={[
                  {
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 6,
                  },
                  d == values.days && { backgroundColor: '#EC5349' },
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
                onPress={() => setFieldValue(fields.hours, h)}
                style={[
                  {
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 6,
                  },
                  h == values.hours && { backgroundColor: '#EC5349' },
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
              active={values.color == c}
              onPress={() => setFieldValue(fields.color, c)}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export default FastStartForm;
