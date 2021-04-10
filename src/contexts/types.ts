import {LanguageListDTO, LanguageType} from '../languages/types';

export interface LanguageContextDTO {
  translationList: LanguageListDTO;
  changeLanguage: (lang: LanguageType) => void;
}
