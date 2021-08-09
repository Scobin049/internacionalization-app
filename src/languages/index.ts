import en from './en';
import br from './br';
import fr from './fr';
import it from './it';

import { LanguageListDTO, LanguageType } from './types';

const Languages = (language: LanguageType): LanguageListDTO => {
  const setLanguage = {
    br: br,
    en: en,
    it: it,
    fr: fr,
  };
  return setLanguage[language] || setLanguage.br;
};

export default Languages;
