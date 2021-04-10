import en from './en-US';
import pt from './pt-BR';
import {LanguageListDTO, LanguageType} from './types';

const Languages = (language: LanguageType): LanguageListDTO => {
  const setLanguage = {
    'pt-BR': pt,
    'en-US': en,
  };
  return setLanguage[language] || setLanguage['pt-BR'];
};

export default Languages;
