import React from 'react';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/lib/integration/react';

import * as THEME from '@Config/theme';
import { APP_NAME_TYPE } from '@Config/types';

import { Store } from '@Redux/Store';
import { Root as Fasting } from '@Navigation'
import { Root as FastingAdm } from '@ADMNavigation'

import { SafeAreaView } from 'react-native';

export default class App extends React.Component {
  
  constructor(props: any) {
    super(props);
  }

  loadApp = () => {
    const { APP_NAME } = Config;
    switch (APP_NAME) {
      case APP_NAME_TYPE.FASTING: return <Fasting />
      case APP_NAME_TYPE.FASTING_ADM: return <FastingAdm />
    }
  }

  render() {
    const { APP_NAME } = Config;
    const { store, persistor } = Store[APP_NAME];
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={THEME[APP_NAME]}>
            <SafeAreaView style={{ flex: 1 }}>
              {this.loadApp()}
            </SafeAreaView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}