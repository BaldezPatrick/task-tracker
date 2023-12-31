import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import pt from "./locales/pt/pt.json";

const resources = {
  en,
  pt,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  iterpolation: {
    escapeValue: false,
  },
});

export default i18n;
