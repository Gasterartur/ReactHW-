// src/TextComponent.js
import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const TextComponent = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: 'English language was choosen',
    ru: 'Выбран русския язык',
    de: 'Deutsch wurde ausgewählt',
    fr: 'La langue francaise a ete choisie',
    es: 'Se selecciono el idioma espanol',
    it: 'E stata scelta la lingua italiana',
    pr: 'O idioma portugues foi selecionado'
  };

  return <p>{translations[language]}</p>;
};

export default TextComponent;