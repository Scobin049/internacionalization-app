import styled from 'styled-components/native';
import palette from '../../assets/palette';
import illustration from '../../assets/images/illustration.png';
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.primary};
  padding-bottom: 12px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: space-between;
`;

export const Illustration = styled.Image.attrs({
  source: illustration,
  resizeMode: 'center',
})`
  height: ${height * 0.25}px;
`;

export const Title = styled.Text`
  color: ${palette.light};
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${palette.light};
  text-align: center;
  font-size: 18px;
`;

export const ButtonAction = styled.TouchableOpacity`
  background-color: ${palette.light};
  padding: 16px;
  border-radius: 16px;
`;

export const TextAction = styled.Text`
  color: ${palette.primary};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
