import { useState } from "react";
import { useTranslation } from "react-i18next";
import spanish from '../../assets/img/spanish.png'
import english from '../../assets/img/english.png'

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    setLanguage(lng)
    i18n.changeLanguage(lng);
  };

  return (
    <button
      id="theme-switch"
      aria-label="Toggle Dark Mode"
      className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:border-white dark:bg-gray-950"
      onClick={() => {
        language === "en" ? changeLanguage("es") : changeLanguage("en");
      }}
    >
      <img className="w-[2rem]" src={language === "es" ? spanish : english} alt="language switch"/>
    </button>
  );
}