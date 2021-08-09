import React from 'react';
import { SelectFlagProps } from './types';

import { Container, ContentImage, ContentText } from './styles';

const SelectFlag: React.FC<SelectFlagProps> = ({
  item,
  onPress,
  isSelected,
}) => {
  return (
    <Container onPress={onPress} isSelected={isSelected}>
      <ContentImage source={item.image} />
      <ContentText>{item.name}</ContentText>
    </Container>
  );
};

export default SelectFlag;
