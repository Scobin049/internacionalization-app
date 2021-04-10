import {LanguageType} from '../../languages/types';

export interface ListLanguagesDTO {
  icon: JSX.Element;
  text: string;
  abbr: LanguageType;
  onClick: () => void;
}
