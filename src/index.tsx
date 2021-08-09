import React from 'react';

import { LanguageProvider } from './contexts/language';
import Initial from './screens/Initial';

const App = () => {
  return (
    <LanguageProvider>
      <Initial />
    </LanguageProvider>
  );
};

export default App;
