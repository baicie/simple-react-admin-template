import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_US from './en_US'
import zh_CN from './zh_CN'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      'zh-cn': zh_CN,
      en: en_US,
    },
    fallbackLng: "zh-cn",
    interpolation: {
      escapeValue: false
    }
  });
