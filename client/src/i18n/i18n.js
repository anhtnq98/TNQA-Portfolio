import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./eng.json";
import Vietnamese from "./vie.json";
import Japanese from "./ja.json";

const resources = {
  vie: {
    translation: Vietnamese,
  },
  eng: {
    translation: English,
  },
  ja: {
    translation: Japanese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "eng", //Ngôn ngữ mặc định là tiếng Anh
  debug: true,
});

export default i18n;
