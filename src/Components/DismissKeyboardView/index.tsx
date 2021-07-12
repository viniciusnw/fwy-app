import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboardHOC = () => {
  return ({ children }) => (
    <TouchableWithoutFeedback
      accessible={false}
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC();
export default DismissKeyboardView;
