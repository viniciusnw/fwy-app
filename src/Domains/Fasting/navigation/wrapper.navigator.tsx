import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { withNavigationFocus } from '@react-navigation/compat';

import TopBar from './top.navigator';
import BottomBar from './bottom.navigator';
import * as ASSETS from '@Config/assets';

import { ImageBackground } from 'react-native';
import { PageContainer } from './navigation.styles';
import { LoggedStackParamList } from './logged.navigator';
import { UnloogedStackParamList } from './unlogged.navigator';

type PageConfigType = {
  pageConfig?: {
    backgroundImage?: string;
    backgroundSolidColor?: any;
  };
  topBarConfig?: {
    menu?: any;
    back?: any;
    color?: any;
    title?: any;
  };
  bottomBarConfig?: {
    color?: string;
  };
};
export class WrapperPropsType {
  name: any;
  Page: any;
  topBarType: any;
  bottomBarType: any;
}

export class PagePropsType extends WrapperPropsType {
  isFocused: boolean = false;
}

type RoutePropsType = StackScreenProps<
  UnloogedStackParamList & LoggedStackParamList,
  'Wrapper'
>;
class Wrapper extends React.PureComponent<
  RoutePropsType & WrapperPropsType,
  any
> {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // console.log("Wrapper=>componentDidUpdate: ", this.props)
  }

  render() {
    const {
      topBarType = null,
      Page: PageComponent,
      bottomBarType = null,
    } = this.props;

    const { setPageConfigs } = PageComponent.WrappedComponent || {};

    const {
      bottomBarConfig = { color: '#FFF' },
      topBarConfig = {
        menu: false,
        back: true,
        color: '#FFF',
        title: 'Fasting',
      },
      pageConfig = { backgroundImage: 'primary' },
    } = setPageConfigs;
    const { backgroundImage, backgroundSolidColor } = pageConfig;

    const Page = this.renderPage(
      PageComponent,
      topBarType,
      topBarConfig,
      bottomBarType,
      bottomBarConfig,
    );

    if (backgroundSolidColor)
      return <PageContainer color={backgroundSolidColor}>{Page}</PageContainer>;

    return (
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={
          ASSETS.FASTING.backgrounds[
            backgroundImage ? backgroundImage : 'primary'
          ]
        }>
        {Page}
      </ImageBackground>
    );
  }

  private renderPage(
    Page: any,
    topBarType: any,
    topBarConfig: any,
    bottomBarType: any,
    bottomBarConfig: any,
  ) {
    return (
      <>
        {topBarType ? <TopBar {...this.props} {...topBarConfig} /> : null}

        <Page {...this.props} />

        {bottomBarType ? (
          <BottomBar {...this.props} {...bottomBarConfig} />
        ) : null}
      </>
    );
  }
}

export default withNavigationFocus(connect(null, null)(Wrapper));
