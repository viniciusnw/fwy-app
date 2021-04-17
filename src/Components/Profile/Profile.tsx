import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image'
import { View, Text, Image } from 'react-native';

const StyledContainer = styled(View)`
  width: 100%;
  align-items: center;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  padding: 42px 0;
`;

const Picture = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  margin-bottom: 20px;
`;

const StyledName = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;

const StyledRule = styled(Text)`
  margin-top: 5px;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
`;

const Profile = ({ src, name, rule, ...props }) => {
  return (
    <StyledContainer {...props}>
      <Picture source={{ uri: src }} />
      {/* <FastImage
        style={{ width: 90, height: 90 }}
        source={{
          uri: src,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
      <StyledName>{name}</StyledName>
      <StyledRule>{rule}</StyledRule>
    </StyledContainer>
  );
};

Profile.propTypes = {
  src: string,
  name: string,
  rule: string,
};

export default Profile;
