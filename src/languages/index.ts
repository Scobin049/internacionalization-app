import en from './en-US';
import pt from './pt-BR';
import {LanguageListDTO, LanguageType} from './types';

const Languages = (language: LanguageType): LanguageListDTO => {
  const setLanguage = {
    pt_BR: pt,
    en_US: en,
  };
  return setLanguage[language] || setLanguage.pt_BR;
};

export default Languages;
