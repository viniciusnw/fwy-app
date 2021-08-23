import * as yup from 'yup';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity, ScrollView } from 'react-native';

import { FASTING } from '@Config/constants';
import { Button, Input } from '@Components';

import {
  StyledH1,
  StyledH2,
  ColorPick,
  StyledText2,
  StyledText3,
  StyledField,
} from './../fast.style';

export const fields = {
  name: 'name',
  days: 'days',
  hours: 'hours',
  color: 'color',
};

const FastStartForm: React.FC<any> = ({
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  editable = true,
}) => {
  const { t } = useTranslation('Fasting');
  const tForm: any = t('form');

  const scrollViewRef = useRef<ScrollView>(null);

  const { weekDays: days, customHours, fastColors } = FASTING;

  const hours = customHours(168);

  const fastForm = {
    name: {
      editable: editable,
      value: values.name,
      placeholder: tForm.name,
      returnKeyType: 'done',
      placeholderTextColor: '#FFF',
      onBlur: handleBlur(fields.name),
      clearButtonMode: 'while-editing',
      error: touched.name && errors.name ? errors.name : null,
      onChangeText: (value) => setFieldValue(fields.name, value),
    },
  };

  const getWidthToScroll = () => {
    if (values.hours <= 30) return 43;
    else return 45;
  };

  scrollViewRef.current?.scrollTo({
    y: 0,
    animated: true,
    x: getWidthToScroll() * values.hours - 100,
  });

  return (
    <>
      {/* === */}
      <StyledField>
        <Input {...fastForm.name} />
      </StyledField>

      {/* === */}
      <View style={{ padding: 15, width: '100%' }}>
        <StyledH1>{t('duration')}</StyledH1>
        <StyledText2>{t('durationText')}</StyledText2>
      </View>

      <View style={{ width: '100%', padding: 15 }}>
        {/* <View
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
        </View> */}

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <StyledH2>{tForm.hours}</StyledH2>
          <ScrollView
            horizontal
            ref={scrollViewRef}
            scrollEnabled={editable}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            {hours.map((h, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  editable ? setFieldValue(fields.hours, h) : null
                }
                style={[
                  {
                    width: 45,
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingVertical: 6,
                    justifyContent: 'center',
                    borderColor: 'transparent',
                  },
                  h == values.hours && {
                    backgroundColor: values.color ? values.color : '#EC5349',
                  },
                  h == values.hours &&
                    values.color == fastColors[1] && {
                      borderColor: 'black',
                    },
                ]}>
                <StyledText3>{h}</StyledText3>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* === */}
      <View style={{ width: '100%', padding: 15 }}>
        <StyledH1>{tForm.color}</StyledH1>
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
