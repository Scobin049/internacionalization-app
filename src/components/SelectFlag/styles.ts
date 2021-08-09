import styled from 'styled-components/native';
import palette from '../../assets/palette';

export const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex: 1;
  align-items: center;
  margin: 4px;
  border: solid 2px
    ${props => (props.isSelected ? palette.accent : 'transparent')};
  padding: 12px;
  border-radius: 16px;
`;

export const ContentImage = styled.Image`
  flex: 1;
  width: 156px;
  height: 96px;
  border-radius: 16px;
`;

export const ContentText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: ${palette.light};
`;
