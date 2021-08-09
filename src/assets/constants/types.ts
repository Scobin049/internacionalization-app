import { ImageSourcePropType } from 'react-native';
import { LanguageType } from '../../languages/types';

export interface ListOfLanguagesDTO {
  code: LanguageType;
  name: string;
  image: ImageSourcePropType;
}
