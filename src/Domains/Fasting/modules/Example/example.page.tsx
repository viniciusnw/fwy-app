
import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

// const fontStyle = StyleSheet.create({
//   FredokaOneRegular: {
//     fontFamily: 'FredokaOne-Regular'
//   },
// });
// <Text style={fontStyle.FredokaOneRegular} />

class Details extends React.Component<any, any> {

  constructor(props) {
    super(props)
    const { toggleDrawer, goBack } = this.props.navigation
    // props.setBottomBar({
    //   onPress: () => console.log('onNextBottomPress'),
    //   text: `Agendar`,
    //   label: `3x de R$99,99`,
    //   description: `ou R$299,90`,
    // })
    // props.setTopBar({
    //   title: 'Details',
    //   back: goBack,
    //   menu: toggleDrawer
    // })
  }

  render() {
    const { route } = this.props;
    const { param1, param2 } = route.params

    return (
      <>
        {/* 
          <Button onPress={() => this.props.toggleSidebar()}>
            <Text> Redux Test </Text>
            <Text />
            <Icon icon={'right'} />
          </Button>

          <Text />
          <Text> Redux: {JSON.stringify(base)} </Text>
          <Text />

          <Button onPress={() => this.goDetails()}>
            Go to Details
          </Button>
          <Text />

          <Button onPress={this.props.logout}>
            <Text> Logout </Text>
          </Button> 
        */}

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Route Param: </Text>
          <Text>{JSON.stringify({ param1, param2 })}</Text>
        </View>
      </>
    );
  }
}

export default connect(
  null,
  null
)(Details);