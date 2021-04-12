import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {Platform, NativeModules} from 'react-native';
import Languages from '../languages';
import {LanguageListDTO, LanguageType} from '../languages/types';
import {LanguageContextDTO} from './types';

export const LanguageContext = React.createContext<LanguageContextDTO>(
  {} as LanguageContextDTO,
);

export const LanguageProvider: React.FC = ({children}) => {
  const [language, setLanguage] = useState<LanguageType>('en_US');
  const [
    translationList,
    setTranslationList,
  ] = useState<LanguageListDTO | null>(Languages('en_US'));

  useEffect(() => {
    const verifyLastLanguage = async () => {
      const lastLanguage = await AsyncStorage.getItem('last_language');
      console.log('lastLanguage', lastLanguage);
      if (!lastLanguage) {
        const deviceLanguage =
          Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0]
            : NativeModules.I18nManager.localeIdentifier;

        if (language !== deviceLanguage) {
          setTranslationList(Languages(deviceLanguage));
        }
      } else {
        setLanguage(lastLanguage as LanguageType);
        setTranslationList(Languages(lastLanguage as LanguageType));
      }
    };
    verifyLastLanguage();
  }, []);

  const changeLanguage = async (data: LanguageType) => {
    console.log('changeLanguage', data);
    await AsyncStorage.setItem('last_language', data);
    setLanguage(data);
    setTranslationList(Languages(data));
  };

  if (!translationList) {
    return <></>;
  }

  return (
    <LanguageContext.Provider
      value={{
        translationList,
        changeLanguage,
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  return context;
};
