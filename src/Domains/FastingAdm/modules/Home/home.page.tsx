import { connect } from 'react-redux';
import React, { Component } from 'react';
import Config from 'react-native-config';
import { View, Text, ActivityIndicator } from 'react-native';

import Redux from '@Redux/FastingAdm';
import { Button, Icon, Logo } from '@Components';

class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    const { toggleDrawer } = this.props.navigation;
    props.setTopBar({
      title: 'Home',
      menu: toggleDrawer,
    });
  }

  goDetails() {
    const { navigation } = this.props;
    navigation.navigate('Details', {
      param1: 86,
      param2: 'From Home',
    });
  }

  render() {
    const {
      base,
      user: { login },
      calendar,
    } = this.props;
    const { data, loading } = login;

    console.log(calendar);

    return (
      <>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Logo />

          <Text />
          <Text>{Config.APP_NAME}</Text>
          <Text />

          <Button onPress={() => this.props.toggleSidebar()}>
            <Text> Redux Test </Text>
            <Text> </Text>
            <Icon icon={'right'} />
          </Button>

          <Text />
          <Text> Redux: {JSON.stringify(base)} </Text>
          <Text />

          <Button onPress={() => this.goDetails()}>
            <Text> Go to Details </Text>
          </Button>
          <Text />
          {loading ? (
            <ActivityIndicator size="small" color={'red'} />
          ) : (
              <Button
                onPress={data.logged ? this.props.logout : this.props.login}>
                <Text> Loggin/Logout </Text>
              </Button>
            )}
        </View>
      </>
    );
  }
}

function mapStateToProps({ base, user, calendar }) {
  return {
    base,
    user,
    calendar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSidebar: () => dispatch(Redux.actions.toggleSidebar()),
    login: _ => dispatch(Redux.actions.login(_)),
    logout: () => dispatch(Redux.actions.logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
