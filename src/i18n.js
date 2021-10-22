import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from './assets/locales/en.json';
import common_ar from './assets/locales/ar.json';
 
 
// the translations
const resources = {
  en: {
    translation: common_en
  },
  ar: {
    translation: common_ar
  }
};
 
i18n
 
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:'en',
    keySeparator :false,
 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
 
  export default i18n;