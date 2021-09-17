import React from 'react';
import AppRouter from './Routes/AppRouter';
import AppStoreContainer from './Store/AppStoreContainer';
import AppContextProvider from './Store/AppStore';

/**
 * Recebe recebe quem deve ler os dados da store: Component. Mid-Level-Component
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <React.Fragment>
      <AppStoreContainer
        component={AppRouter}
        provider={AppContextProvider}
      />
    </React.Fragment>
  );
}

export default App;