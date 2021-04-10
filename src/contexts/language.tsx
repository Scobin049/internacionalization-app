import React, {useContext, useState} from 'react';
import Languages from '../languages';
import {LanguageListDTO, LanguageType} from '../languages/types';
import {LanguageContextDTO} from './types';

export const LanguageContext = React.createContext<LanguageContextDTO>(
  {} as LanguageContextDTO,
);

export const LanguageProvider: React.FC = ({children}) => {
  const [language, setLanguage] = useState<LanguageType>('pt-BR');
  const [translationList, setTranslationList] = useState<LanguageListDTO>(
    Languages('pt-BR'),
  );

  const changeLanguage = (data: LanguageType) => {
    setLanguage(data);
    setTranslationList(Languages(data));
  };

  console.log('language', language);
  console.log('translationList', translationList);

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
