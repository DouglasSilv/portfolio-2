import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
          portuguese: 'Português',
          english: 'English',
      }
    },
    pt: {
        translation: {
          portuguese: 'Português',
          english: 'English'
        }
    },
    },
});

export default i18n;