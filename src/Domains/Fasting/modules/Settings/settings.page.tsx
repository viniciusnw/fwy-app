import React from 'react';
import { Icon } from '@Components';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { StyledH1, StyledText } from './settings.style';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import {
  View,
  Text,
  Share,
  Linking,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as StoreReview from 'react-native-store-review';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

const packageJson = require('../../../../../package.json');

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Settings'>;
class Settings extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  static setPageConfigs = {
    bottomBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'secondary' },
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
  };

  constructor(props) {
    super(props);
  }

  private handleShared = async () => {
    try {
      const result = await Share.share({
        title: 'Fasting with Yara',
        url: 'https://www.fastingwithyara.com/',
      });

      if (result.action === Share.sharedAction) {
        // shared with activity type of result.activityType
        if (result.activityType) return null;
        else return null; // shared
      } else if (result.action === Share.dismissedAction) return null; // dismissed
    } catch (error) {
      Alert.alert('Shared', error.message);
    }
  };

  private handleStoreReview = () => {
    if (StoreReview.isAvailable) StoreReview.requestReview();
    else Alert.alert('Store Review', 'Temporarily unavailable');
  };

  private handleOpenLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
  };

  render() {
    const prefs = ['Weight Units', 'Notification', 'Emails'];
    const account = ['Account', 'My Data', 'Plus', 'Log Out'];

    const commu = [
      {
        label: this.t('rate'),
        callback: () => this.handleStoreReview(),
      },
      {
        label: this.t('find'),
        callback: () => this.handleOpenLink('https://www.fastingwithyara.com/'),
      },
      {
        label: this.t('share'),
        callback: () => this.handleShared(),
      },
    ];

    const support = [
      {
        label: this.t('contact'),
        callback: () =>
          this.handleOpenLink('https://www.fastingwithyara.com/#comp-k59n4fqz'),
      },
      {
        label: this.t('help'),
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
      {
        label: this.t('terms'),
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
    ];

    const social = [
      {
        label: this.t('insta'),
        callback: () =>
          this.handleOpenLink('https://www.instagram.com/fastingwithyarainc/'),
      },
      {
        label: this.t('face'),
        callback: () =>
          this.handleOpenLink('https://www.facebook.com/fastingwithYara'),
      },
      {
        label: 'Website',
        callback: () => this.handleOpenLink('https://www.fastingwithyara.com/'),
      },
      {
        label: 'WhatsApp',
        callback: () =>
          this.handleOpenLink(
            'https://api.whatsapp.com/send?phone=19734125712',
          ),
      },
    ];

    return (
      <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 20 }}>
        {/* === */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ width: '100%' }}>
          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>{this.t('community')}</StyledH1>
          </View>

          {commu.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <StyledText>{item.label}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != commu.length && <Strike />}
            </MenuItem>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>{this.t('support')}</StyledH1>
          </View>
          {support.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <StyledText>{item.label}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != support.length && <Strike />}
            </MenuItem>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>{this.t('social')}</StyledH1>
          </View>
          {social.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <StyledText>{item.label}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != social.length && <Strike />}
            </MenuItem>
          ))}
        </ScrollView>
        <View style={{ paddingVertical: 60 }}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>
            <Text style={{ fontSize: 18 }}>Version {packageJson.version}</Text>
            {`\n`}
            <Text style={{ fontSize: 14 }}>
              Design by <Text style={{ fontWeight: 'bold' }}>eview</Text> design
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
}

const MenuItem = styled(TouchableOpacity)`
  padding: 20px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Strike = styled(View)`
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
`;

function mapStateToProps({}: ReduxStateType) {
  return {
    useRedux: {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: (_) => dispatch(ReduxActions.logout()),
    },
  };
}

export default withTranslation('Settings')(
  connect(mapStateToProps, mapDispatchToProps)(Settings),
);
