import 'reflect-metadata';
import 'es6-symbol/implement';

import * as Sentry from '@sentry/react-native';
import { AppRegistry, YellowBox } from 'react-native';
import Config from 'react-native-config';

import App from './Domains/App';
import StoriesApp from './Stories/App';
import { name as AppName } from '../app.json';

Sentry.init({
  dsn: Config.SENTRY_URL,
});

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  "Module RCTImageLoader requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.",
  'Could not find image',
  'RCTBridge required dispatch_sync',
  'Required dispatch_sync to load constants',
  'Remote',
  "Looks like you're passing an inline function for 'component' prop for the screen",
  'Require cycle',
  'Require cycle:',
  'componentWillReceiveProps',
  'componentWillMount',
]);

if (Config.APP_NAME == 'STORYBOOK')
  AppRegistry.registerComponent(AppName, () => StoriesApp);
else AppRegistry.registerComponent(AppName, () => Sentry.wrap(App));
