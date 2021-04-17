import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View, Text, ScrollView } from 'react-native';
import { Wallet as WalletResume, PaymentResume } from '@Components';

const StyledWrapper = styled(ScrollView)`
  flex: 1;
  padding: ${({ theme: { spacing } }) => `${spacing.medium} ${spacing.regular}`};
`;

class Wallet extends Component<any, any> {
  constructor(props) {
    super(props);
    const { toggleDrawer, goBack } = this.props.navigation;

    props.setTopBar({
      title: 'Carteira',
      back: goBack,
      menu: toggleDrawer,
    });
  }

  render() {
    return (
      <StyledWrapper>
        <WalletResume value="R$1.345,50" qty={8} />
        <PaymentResume />
      </StyledWrapper>
    );
  }
}

export default connect(null, null)(Wallet);
