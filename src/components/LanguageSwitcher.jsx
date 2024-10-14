import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const languageNames = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiana',
  pr:'Portogues',
};

const LanguageSwitcher = () => {
  const { nextLanguage, changeLanguage } = useContext(LanguageContext);

  return (
    <button onClick={changeLanguage}>
      Switch language
    </button>
  );
};

export default LanguageSwitcher;