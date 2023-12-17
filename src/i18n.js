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
          aboutMeDescription: 'Backend developer with over 5 years of experience in designing and implementing comprehensive solutions for servers. Solid skills in programming languages such as Java, along with frameworks like SpringBoot. Great ability to collaborate effectively in a team, resulting in the delivery of high-quality projects. Commitment to technical excellence and efficient problem resolution has been a constant differentiator throughout my career.',
          residence: 'Residence',
          age: 'Age',
          mainStack: 'Main stack',
          downloadCV: 'Download CV'
      }
    },
    pt: {
        translation: {
          portuguese: 'Português',
          english: 'English',
          developer: 'Desenvolvedor Backend',
          aboutMe: 'Sobre mim',
          aboutMeDescription: 'Desenvolvedor backend com mais de 5 anos de experiência na concepção e implementação de soluções abrangentes para servidores. Habilidades sólidas em linguagens de programação como Java, além de frameworks como SpringBoot. Grande capacidade de colaborar efetivamente em equipe, resultando na entrega de projetos de alta qualidade. Compromisso com a excelência técnica e a resolução eficiente de problemas tem sido um diferencial constante ao longo da carreira.',
          residence: 'Residência',
          age: 'Idade',
          mainStack: 'Stack principal',
          downloadCV: 'Baixar CV'
        }
    },
    },
});

export default i18n;