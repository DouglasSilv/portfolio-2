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
          developer: 'Backend Developer',
          aboutMe: 'About me',
          aboutMeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, augue vitae sollicitudin feugiat, tortor augue convallis ante, vel laoreet risus justo et quam. Donec ut lacus at nisi pulvinar pharetra pharetra vel nibh. Nunc euismod purus a tellus blandit, vitae rutrum dui viverra. Donec lobortis imperdiet',
          residence: 'Residence',
          age: 'Age',
          mainStack: 'Main stack'
      }
    },
    pt: {
        translation: {
          portuguese: 'Português',
          english: 'English',
          developer: 'Desenvolvedor Backend',
          aboutMe: 'Sobre mim',
          aboutMeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, augue vitae sollicitudin feugiat, tortor augue convallis ante, vel laoreet risus justo et quam. Donec ut lacus at nisi pulvinar pharetra pharetra vel nibh. Nunc euismod purus a tellus blandit, vitae rutrum dui viverra. Donec lobortis imperdiet',
          residence: 'Residência',
          age: 'Idade',
          mainStack: 'Stack principal'
        }
    },
    },
});

export default i18n;