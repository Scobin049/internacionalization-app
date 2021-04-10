import styled from 'styled-components/native';
import palette from '../../assets/icons/palette';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Footer = styled.View`
  background-color: ${palette.backgroundLight};
  padding-bottom: 8px;
`;

export const FooterContent = styled.View`
  flex-direction: row;
`;

export const TextFooter = styled.Text`
  padding-left: 8px;
  padding-top: 16px;
`;

export const TextTitle = styled.Text`
  color: ${palette.title};
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
`;
export const TextSubtitle = styled.Text`
  color: ${palette.title};
  font-size: 22px;
  margin-bottom: 16px;
`;
export const TextDescription = styled.Text`
  font-size: 18px;
`;
