import React from 'react';
import { Icon } from '@Components';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { StyledH1, StyledText } from './settings.style';
import { StackScreenProps } from '@react-navigation/stack';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import {
  View,
  Text,
  Share,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as StoreReview from 'react-native-store-review';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

const packageJson = require('../../../../../package.json');

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Settings'>;
class Settings extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
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
      console.log(error.message);
    }
  };

  private handleStoreReview = () => {
    if (StoreReview.isAvailable) StoreReview.requestReview();
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
        label: 'Rate us on App Store',
        callback: () => this.handleStoreReview(),
      },
      {
        label: 'Find Us Online',
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
      {
        label: 'Share',
        callback: () => this.handleShared(),
      },
    ];

    const support = [
      {
        label: 'Contacts Support',
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
      {
        label: 'Help',
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
      {
        label: 'Terms of Use',
        callback: () =>
          this.handleOpenLink(
            'https://www.fastingwithyara.com/specifications-1',
          ),
      },
    ];

    const social = [
      {
        label: 'Follow on Instagram',
        callback: () =>
          this.handleOpenLink('https://www.instagram.com/fastingwithyarainc/'),
      },
      {
        label: 'Follow on Facebook',
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
            <StyledH1>Community</StyledH1>
          </View>

          {commu.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <StyledText>{item.label}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != commu.length && <Strike />}
            </MenuItem>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Support</StyledH1>
          </View>
          {support.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <StyledText>{item.label}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != support.length && <Strike />}
            </MenuItem>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Social</StyledH1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
