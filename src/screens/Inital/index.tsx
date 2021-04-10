import React from 'react';
import {StatusBar} from 'react-native';
import {FlagBrazil, FlagUsa} from '../../assets/icons';
import palette from '../../assets/icons/palette';
import CardLang from '../../components/CardLang';

import {useLanguage} from '../../contexts/language';
import {
  Container,
  Footer,
  FooterContent,
  Content,
  TextTitle,
  TextFooter,
  TextSubtitle,
  TextDescription,
} from './styles';
import {ListLanguagesDTO} from './types';

const Inital: React.FC = () => {
  const {translationList, changeLanguage} = useLanguage();
  const listOfLanguages: ListLanguagesDTO[] = [
    {
      icon: <FlagBrazil size={24} />,
      text: 'Português',
      abbr: 'pt-BR',
      onClick: () => changeLanguage('pt-BR'),
    },
    {
      icon: <FlagUsa size={24} />,
      text: 'English',
      abbr: 'en-US',
      onClick: () => changeLanguage('en-US'),
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={palette.background} />
      <Container>
        <Content>
          <TextTitle>{translationList.hello}</TextTitle>
          <TextSubtitle>{translationList.subtitle}</TextSubtitle>
          <TextDescription>{translationList.description}</TextDescription>
        </Content>
        <Footer>
          <TextFooter>{translationList.changeLang}</TextFooter>
          <FooterContent>
            {listOfLanguages.map(item => (
              <CardLang key={item.abbr} {...item} />
            ))}
          </FooterContent>
        </Footer>
      </Container>
    </>
  );
};

export default Inital;
