import React from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import { listOfLanguages } from '../../assets/constants';

import palette from '../../assets/palette';
import SelectFlag from '../../components/SelectFlag';
import { useLanguage } from '../../contexts/language';
import { Container, Content, Illustration, Title, Subtitle } from './styles';

const Inital: React.FC = () => {
  const { translationList, language, changeLanguage } = useLanguage();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={palette.primary} />
      <Container>
        <Illustration />
        <Content>
          <View>
            <Title>{translationList.hello}</Title>
            <Subtitle>{translationList.subtitle}</Subtitle>
          </View>
          <FlatList
            data={listOfLanguages}
            renderItem={({ item }) => (
              <SelectFlag
                item={item}
                isSelected={language === item.code}
                key={item.code}
                onPress={() => {
                  changeLanguage(item.code);
                }}
              />
            )}
            keyExtractor={item => item.code}
            numColumns={2}
          />
          <Subtitle>{translationList.description}</Subtitle>
        </Content>
      </Container>
    </>
  );
};

export default Inital;
