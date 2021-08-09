import { ListOfLanguagesDTO } from '../../assets/constants/types';

export interface SelectFlagProps {
  item: ListOfLanguagesDTO;
  isSelected: boolean;
  onPress: () => void;
}
