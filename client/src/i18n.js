import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";
import alTranslations from "./locales/al/translation.json";
import deTranslations from "./locales/de/translation.json";
import esTranslations from "./locales/es/translation.json";
import ptTranslations from "./locales/pt/translation.json";
import itTranslations from "./locales/it/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        fr: { translation: frTranslations },
        al: { translation: alTranslations },
        de: { translation: deTranslations },
        es: { translation: esTranslations },
        pt: { translation: ptTranslations },
        it: { translation: itTranslations },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
