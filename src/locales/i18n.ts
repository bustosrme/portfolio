import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './en/translation.json';
import translationES from './es/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

i18n
    .use(LanguageDetector) // Detecta el lenguaje del navegador
    .use(initReactI18next) // Pasa i18n al react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Lenguaje por defecto si no se encuentra uno adecuado
        interpolation: {
            escapeValue: false // React ya hace escaping de por sí
        }
    });

export default i18n;
