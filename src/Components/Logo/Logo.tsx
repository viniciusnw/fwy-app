import React from 'react';
import * as ASSETS from '@Config/assets';
import styled from 'styled-components/native';
import { View, Text, StyleSheet } from 'react-native';

const StyledContainer = styled(View)`
  flex-direction: row;
`;

const Logo = (props) => {
  const { color, width, height } = props
  const { Logo, LogoWhite } = ASSETS.FASTING.svgs

  const size = {
    width: width ? width : 300,
    height: height ? height : 200
  }

  return (
    <StyledContainer {...props}>
      {
        !color
          ? <Logo width={size.width} height={size.height} />
          : color == 'white' ? <LogoWhite width={size.width} height={size.height} />
            : null
      }
    </StyledContainer>
  )
};

export default Logo;
