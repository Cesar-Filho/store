import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {persistor, store} from './store';

import {ErrorBoundary} from '@components/ErrorBoundary';
import {Navigator} from './navigators';
import {theme} from './theme';

function App() {
  const Theme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, primary: theme.colors.primary},
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <NavigationContainer theme={Theme}>
              <StatusBar barStyle="default" />
              <Navigator />
            </NavigationContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
