import React from 'react';

import {LanguageProvider} from './contexts/language';
import Inital from './screens/Inital';

const App = () => {
  return (
    <LanguageProvider>
      <Inital />
    </LanguageProvider>
  );
};

export default App;
