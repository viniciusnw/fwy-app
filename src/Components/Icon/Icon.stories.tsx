import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { storiesOf } from '@storybook/react-native';
import { Icon, StorybookWrapper } from '@Components';
import * as ASSETS from '@Config/assets';


const Wrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconBox = styled(View)`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  width: 110px;
  height: 110px;
  justify-content: center;
  align-items: center;
`;

const IconText = styled(Text)`
  margin: 10px 0 0;
  background-color: #eee;
  border-radius: 3px;
  padding: 2px 6px;
`;

const pack = [
  'left',
  'right',
  'more',
  'menu',
  'list',
  'calendar',
  'plus',
  'wallet',
  'user',
  'security',
  'map',
  'settings',
  'logout',
  'creditcard',
];

storiesOf('Icon', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('default', () => {
    return (
      <Wrapper>
        {pack.map((icon) => (
          <IconBox>
            <Icon size={40} icon={icon} />
            <IconText>{icon}</IconText>
          </IconBox>
        ))}
      </Wrapper>
    );
  })
  .add('images', () => {
    return (
      <Wrapper>
        {Object.keys(ASSETS.FASTING.icons).map((icon) => (
          <IconBox>
            <Image style={{ width: 42, height: 42 }} source={ASSETS.FASTING.icons[icon]} />
            <IconText>{icon}</IconText>
          </IconBox>
        ))}
      </Wrapper>
    );
  });
