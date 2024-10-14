// src/App.js
import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import TextComponent from './components/TextComponent';
import { LanguageProvider } from './components/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Language Switcher</h1>
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
}

export default App;