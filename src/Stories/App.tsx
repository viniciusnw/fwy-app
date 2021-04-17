import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, configure } from '@storybook/react-native';
import * as THEME from '@Config/theme';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  onDeviceUI: true,
});

export default class StoriesApp extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={THEME.FASTING}>
        <StorybookUIRoot />
      </ThemeProvider>
    );
  }
}
