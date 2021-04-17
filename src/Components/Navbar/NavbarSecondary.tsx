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
  border-top-left-radius: ${({ theme, radius }: any) => radius ? `${radius[0]}px` : 0};
  border-top-right-radius: ${({ theme, radius }: any) => radius ? `${radius[1]}px` : 0};
  border-bottom-left-radius: ${({ theme, radius }: any) => radius ? `${radius[2]}px` : 0};
  border-bottom-right-radius: ${({ theme, radius }: any) => radius ? `${radius[3]}px` : 0};
  background-color: ${({ theme, background }: any) => theme.color[!background ? 'default' : background]};
`;

const StyledItem = styled(TouchableOpacity)`
  align-items: center;
`;

export const NavbarSecondary = ({ color, items, ...props }) => {
  return (
    <StyledContainer {...props}>
      {items.map(({ size, icon, ...props }) =>
        <StyledItem {...props}>
          <Icon icon={icon} color={color} size={size ? size : 28} />
        </StyledItem>
      )}
    </StyledContainer>
  );
};