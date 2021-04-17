import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Label, StorybookWrapper } from '@Components';

storiesOf('Label', module)
  .addDecorator((getStory: any) => (
    <StorybookWrapper>{getStory()}</StorybookWrapper>
  ))
  .add('default', () => <Label label="Default Label" color="default" />)
  .add('primary', () => <Label label="Primary Label" color="primary" />)
  .add('success', () => <Label label="Success Label" color="success" />)
  .add('danger', () => <Label label="Danger Label" color="danger" />)
  .add('warning', () => <Label label="Warning Label" color="warning" />);
