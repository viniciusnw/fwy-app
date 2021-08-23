import i18n, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import { FASTING, FASTING_ADM } from '@Config/constants';
import AsyncStorage from '@react-native-community/async-storage';

import pt_br from './pt_BR.json';
import en_us from './en_US.json';

const { languages } = FASTING.enums || FASTING_ADM.enums

const resources = {
  [languages.PT_US]: pt_br,
  [languages.PT_BR]: pt_br,
  [languages.EN_US]: en_us,
  [languages.EN_BR]: en_us,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async callback => {
    const storedLanguage = await AsyncStorage.getItem('language');
    if (storedLanguage) return callback(storedLanguage);

    let phoneLanguage = '';
    if (Platform.OS === 'android') phoneLanguage = NativeModules.I18Manager.localeIdentifier;
    else phoneLanguage = NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] ||
      NativeModules.I18nManager.localeIdentifier;

    phoneLanguage = phoneLanguage.replace('_', '-');
    return callback(phoneLanguage);
  },
  init: () => { },
  cacheUserLanguage: language => {
    AsyncStorage.setItem('language', language);
  },
} as Module;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    keySeparator: '.',
    fallbackLng: languages.EN_US,
    react: { useSuspense: true },
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;