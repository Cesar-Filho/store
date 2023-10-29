import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RenderOptions, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {ThemeProvider} from 'styled-components/native';
import {Provider} from 'react-redux';

import {RootState, reducers} from '@store/reducers';
import {TStoreState} from '@store/index';
import {theme} from '@theme/index';
import middleware from '@store/middleware';

interface IRenderOptions {
  preloadedState?: RootState;
  store?: TStoreState;
  options?: RenderOptions;
}

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState = {} as RootState,
    store = configureStore({
      reducer: reducers,
      preloadedState,
      middleware,
    }),
    options,
  } = {} as Partial<IRenderOptions>,
) => {
  const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>{children}</NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
  };
  return render(ui, {wrapper: AllTheProviders, ...options});
};

export * from '@testing-library/react-native';

export {customRender as render};
