import React from 'react';
import { string, object } from 'prop-types';
import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';

const StyledContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => theme.spacing.regular};
`;

const Picture = styled(Image)`
  width: 62px;
  height: 62px;
  border-radius: 100px;
  margin-right: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)``;

const StyledName = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;

const StyledDescription = styled(Text)`
  margin-top: 5px;
  color: ${({ theme }) => theme.color.gray};
`;

const UserCard = ({ src, name, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <Picture source={{ uri: src }} />
      <StyledWrapper>
        <StyledName>{name}</StyledName>
        <StyledDescription>{description}</StyledDescription>
      </StyledWrapper>
    </StyledContainer>
  );
};

UserCard.propTypes = {
  src: object,
  label: string,
  description: string,
};

export default UserCard;
