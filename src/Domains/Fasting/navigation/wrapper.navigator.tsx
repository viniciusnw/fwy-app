import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import TopBar from './top.navigator';
import BottomBar from './bottom.navigator';
import * as ASSETS from '@Config/assets';

import { ImageBackground } from 'react-native';
import { PageContainer } from './navigation.styles';
import { LoggedStackParamList } from './logged.navigator'
import { UnloogedStackParamList } from './unlogged.navigator'


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
}
export class WrapperPropsType {
  name: any
  Page: any
  topBarType: any
  bottomBarType: any
}

export class PagePropsType extends WrapperPropsType {
  setPageConfigs = (PageConfigType: PageConfigType) => null
}

type RoutePropsType = StackScreenProps<UnloogedStackParamList & LoggedStackParamList, 'Wrapper'>;
export default class Wrapper extends React.PureComponent<RoutePropsType & WrapperPropsType, any> {

  constructor(props) {
    super(props)
    this.state = {
      pageConfig: {
        backgroundImage: 'primary',
        backgroundSolidColor: null,
      },
      bottomBarConfig: {
        color: '#FFF',
      },
      topBarConfig: {
        menu: false,
        back: true,
        color: '#FFF',
        title: 'Fasting',
      }
    }
  }

  componentDidUpdate() {
    // console.log("Wrapper=>componentDidUpdate: ", this.props)
  }

  setPageConfigs = (config: PageConfigType) => {
    const { pageConfig, topBarConfig, bottomBarConfig } = config;
    if (pageConfig) this.setState({ pageConfig });
    if (topBarConfig) this.setState({ topBarConfig });
    if (bottomBarConfig) this.setState({ bottomBarConfig });
  }

  render() {
    const { Page: PageComponent, topBarType = null, bottomBarType = null } = this.props;
    const { bottomBarConfig, topBarConfig, pageConfig } = this.state;
    const { backgroundImage, backgroundSolidColor } = pageConfig;

    const Page = this.renderPage(PageComponent, topBarType, topBarConfig, bottomBarType, bottomBarConfig)
    return (
      <>
        {backgroundSolidColor ? (
          <PageContainer color={backgroundSolidColor}>
            {Page}
          </PageContainer>
        ) : (
            <ImageBackground
              resizeMode='cover'
              style={{ flex: 1 }}
              source={ASSETS.FASTING.backgrounds[backgroundImage ? backgroundImage : 'primary']}>
              {Page}
            </ImageBackground>
          )}
      </>
    )
  }


  private renderPage(Page, topBarType, topBarConfig, bottomBarType, bottomBarConfig) {
    return (
      <>
        {topBarType
          ? <TopBar {...this.props} {...topBarConfig} />
          : null}

        <Page {...this.props} setPageConfigs={this.setPageConfigs} />

        {bottomBarType
          ? <BottomBar {...this.props} {...bottomBarConfig} />
          : null}
      </>
    )
  }
}