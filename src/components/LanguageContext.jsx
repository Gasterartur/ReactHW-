
import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const languages = ['en', 'ru', 'de', 'fr', 'es','it','pr'];

export const LanguageProvider = ({ children }) => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const changeLanguage = () => {
    setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
  };

  const language = languages[languageIndex];
  const nextLanguage = languages[(languageIndex + 1) % languages.length];

  return (
    <LanguageContext.Provider value={{ language, nextLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;