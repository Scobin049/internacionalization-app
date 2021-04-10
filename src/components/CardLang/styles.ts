import styled from 'styled-components/native';
import palette from '../../assets/icons/palette';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 8px;
  background-color: ${palette.background};
  border-radius: 8px;
`;

export const TextLang = styled.Text`
  margin-left: 8px;
  font-weight: bold;
  color: ${palette.dark};
`;
