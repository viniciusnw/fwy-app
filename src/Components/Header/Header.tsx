import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

const StyledContainer = styled(View)`
  width: 100%;
  height: 62px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.regular};
  border-bottom-color: ${({ theme }) => theme.color.border};
`;

const StyledTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: -7px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.bold};
`;

const StyledFake = styled(View)`
  width: 30px;
`;

const StyledBack = styled(TouchableOpacity)``;

const StyledMenu = styled(TouchableOpacity)``;

const Header = ({ back, menu, title, color, goSettings, goBack }) => {

  return (
    <StyledContainer>
      {back ? (
        <StyledBack onPress={goBack}>
          <Icon color={color} icon="left" size={22} />
        </StyledBack>
      ) : (<StyledFake />)}

      <StyledTitle> {title} </StyledTitle>

      {menu ? (
        <StyledMenu onPress={goSettings}>
          <Icon color={color} icon="gear" size={26} />
        </StyledMenu>
      ) : (<StyledFake />)}
    </StyledContainer>
  );
};

export default Header;
