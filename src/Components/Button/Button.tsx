import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

import Icon from '../Icon';

const StyledButton = styled.TouchableOpacity`
  display: flex;
  padding: 0px 15px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: ${({ small }: any) => (small ? '34px' : '42.5px')};
  background-color: ${({ theme, color }: any) =>
    theme.color[!color ? 'default' : color]};
`;

const StyledView = styled.View<any>`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  justify-content: ${({ single }: any) => (single ? 'center' : 'space-around')};
`;

const StyledText = styled.Text<any>`
  line-height: 20px;
  color: ${({ theme }: any) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
  font-size: ${({ fontSize }: any) => (fontSize ? fontSize : '16px')};
  font-weight: ${({ fontWeight }: any) => (fontWeight ? fontWeight : '700')};
`;

const Button = ({ icon, loading, color, children, font, ...props }: any) => {
  const { size: fontSize, weight: fontWeight } = font || {};
  return (
    <StyledButton disabled={loading} color={color} {...props}>
      {loading ? (
        <ActivityIndicator size="small" color={'#FFF'} />
      ) : icon ? (
        <StyledView single={!(children && icon)}>
          <Icon icon={icon.icon} color={icon.color} size={icon.size} />
          <StyledText fontWeight={fontWeight} fontSize={fontSize}>
            {children}
          </StyledText>
        </StyledView>
      ) : (
        <StyledText fontWeight={fontWeight} fontSize={fontSize}>
          {children}
        </StyledText>
      )}
    </StyledButton>
  );
};

export default Button;
