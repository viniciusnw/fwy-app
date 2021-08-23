import React from 'react';
import styled from 'styled-components/native';

import Icon from '../Icon';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

const StyledContainer = styled(View)`
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: ${({ theme }) => theme.height.navbar};
`;

const StyledItem = styled(TouchableOpacity)`
  align-items: center;
`;

export const Navbar = ({ color, items, ...props }) => {
  return (
    <StyledContainer {...props}>
      {items.map(({ size, icon, ...props }, index) => (
        <StyledItem key={index} {...props}>
          <Icon
            icon={icon}
            color={color}
            size={size ? size : 28}
            style={{ opacity: props.disabled ? 0.4 : 1 }}
          />
        </StyledItem>
      ))}
    </StyledContainer>
  );
};
