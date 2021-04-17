import React, { useState } from 'react';
import MultiSlider from 'react-native-multi-slider';
import { View, Text } from 'react-native';
import styled, { withTheme } from 'styled-components/native';

const StyledContainer = styled(View)`
  width: 100%;
`;

const Slider = ({ theme, label, color, ...props }) => {
  const [value, setValue] = useState(2);
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);

  const nonCollidingMultiSliderValuesChange = (values) =>
    setNonCollidingMultiSliderValue(values);

  return (
    <StyledContainer>
      
    </StyledContainer>
  );
};

export default withTheme(Slider);
