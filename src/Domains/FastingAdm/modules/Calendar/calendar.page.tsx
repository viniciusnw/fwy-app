import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import { List, Card } from '@Components';
import styled from 'styled-components/native';

const StyledWrapper = styled(ScrollView)`
  flex: 1;
  padding: ${({ theme: { spacing } }) =>
    `${spacing.medium} ${spacing.regular}`};
`;

const StyledTitle = styled(Text)`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.regular};
  color: ${({ theme }) => theme.color.gray};
`;

const StyledDescription = styled(Text)`
  font-size: 18px;
  max-width: 80%;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledFake = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing.xxLarge};
`;

class Wallet extends Component<any, any> {
  constructor(props) {
    super(props);
    const { toggleDrawer, goBack } = this.props.navigation;

    props.setTopBar({
      title: 'Consultas',
      menu: toggleDrawer,
    });
  }

  render() {
    const {
      calendar: { data },
    } = this.props;

    return (
      <StyledWrapper>
        {data.length > 0 ? (
          <>
            <StyledTitle>Próximas consultas</StyledTitle>
            <List data={data} renderItem={({ item }) => <Card {...item} />} />
            <StyledFake />
          </>
        ) : (
          <>
            <StyledTitle>Próximas consultas</StyledTitle>
            <StyledDescription>você não possui nenhuma</StyledDescription>
            <StyledDescription>consulta agendada</StyledDescription>
          </>
        )}
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({ calendar });

export default connect(mapStateToProps, null)(Wallet);
