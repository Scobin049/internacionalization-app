import React from 'react';
import { SelectFlagProps } from './types';

import { Container, ContentImage, ContentText } from './styles';

const SelectFlag: React.FC<SelectFlagProps> = ({ item, onPress }) => {
  return (
    <Container onPress={onPress}>
      <ContentImage source={item.image} />
      <ContentText>{item.name}</ContentText>
    </Container>
  );
};

export default SelectFlag;
