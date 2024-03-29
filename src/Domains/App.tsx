import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator, View } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';

import * as THEME from '@Config/theme';
import { APP_NAME_TYPE } from '@Config/types';
import { Store } from '@Redux/Store';
import { Root as Fasting } from '@Navigation';
import { Root as FastingAdm } from '@ADMNavigation';
import '@Config/locales';


export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { APP_NAME } = Config;
    const { store, persistor } = Store[APP_NAME];

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={THEME[APP_NAME]}>
            <Suspense
              fallback={<ActivityIndicator size="small" color={'#FFF'} />}>
              <RootApp />
            </Suspense>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const RootApp: React.FC<any> = () => {
  const { APP_NAME } = Config;
  switch (APP_NAME) {
    case APP_NAME_TYPE.FASTING:
      return <Fasting />;
    case APP_NAME_TYPE.FASTING_ADM:
      return <FastingAdm />;
    default:
      return <View />;
  }
};
