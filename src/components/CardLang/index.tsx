import React from 'react';
import {ListLanguagesDTO} from '../../screens/Inital/types';

import {Container, TextLang} from './styles';

const CardLang: React.FC<ListLanguagesDTO> = props => {
  const {icon, text, onClick} = props;
  return (
    <Container onPress={onClick}>
      {icon}
      <TextLang>{text}</TextLang>
    </Container>
  );
};

export default CardLang;
