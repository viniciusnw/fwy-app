import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const StyledList = styled(FlatList)`
  width: 100%;
`;

const List = (props) => {
  return <StyledList {...props} />;
};

export default List;
