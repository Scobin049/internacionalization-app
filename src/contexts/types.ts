import { LanguageListDTO, LanguageType } from '../languages/types';

export interface LanguageContextDTO {
  language: LanguageType;
  translationList: LanguageListDTO;
  changeLanguage: (lang: LanguageType) => void;
}
