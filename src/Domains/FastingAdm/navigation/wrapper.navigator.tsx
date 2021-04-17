import React from 'react';
import { Header } from '@Components';
import BottomBar from './bottom.navigator';

export default class Wrapper extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      bottomBar: {
        text: 'Avançar',
        label: false,
        description: false,
        onPress: () => null,
      },
      topBar: {
        title: 'TakeCare',
        back: null,
        menu: null,
      },
    };
  }

  setBottomBar = (config) => this.setState({ bottomBar: config });
  setTopBar = (config) => this.setState({ topBar: config });

  render() {
    const { bottomBarType = null, Page } = this.props;
    const { bottomBar, topBar } = this.state;

    return (
      <>
        <Header back={topBar.back} menu={topBar.menu} title={topBar.title} />

        <Page
          {...this.props}
          setTopBar={this.setTopBar}
          setBottomBar={this.setBottomBar}
        />

        {bottomBarType ? (
          <BottomBar
            navigation={this.props.navigation}
            type={bottomBarType}
            {...bottomBar}
          />
        ) : null}
      </>
    );
  }
}
