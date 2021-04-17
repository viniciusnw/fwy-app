import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { PaymentResume, StorybookWrapper } from '@Components';

storiesOf('Payment Resume', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => (
    <>
      <PaymentResume />
    </>
  ));
