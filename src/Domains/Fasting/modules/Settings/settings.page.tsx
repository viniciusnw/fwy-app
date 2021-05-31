import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

const packageJson = require('../../../../../package.json');

import { Icon, Button } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { StyledH1, StyledText } from './settings.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Settings'>;
class Settings extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
    pageConfig: { backgroundImage: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  render() {
    const prefs = ['Weight Units', 'Notification', 'Emails'];
    const account = ['Account', 'My Data', 'Plus', 'Log Out'];
    const commu = ['Rate us on App Store', 'Find Us Online', 'Share'];
    const support = ['Contacts Support', 'Help', 'Terms of Use'];
    const social = [
      'Follow on Instagram',
      'Follow on Facebook',
      'Website',
      'WhatsApp',
    ];

    return (
      <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 20 }}>
        {/* === */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ width: '100%' }}>
          <View style={{ paddingHorizontal: 10, paddingBottom: 25 }}>
            <StyledH1>Preferences</StyledH1>
          </View>
          {prefs.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <StyledText>{item}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != prefs.length && (
                <View
                  style={{
                    bottom: 0,
                    height: 1,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Account</StyledH1>
          </View>
          {account.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <StyledText>{item}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != account.length && (
                <View
                  style={{
                    bottom: 0,
                    height: 1,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Community</StyledH1>
          </View>
          {commu.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <StyledText>{item}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != commu.length && (
                <View
                  style={{
                    bottom: 0,
                    height: 1,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Support</StyledH1>
          </View>
          {support.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <StyledText>{item}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != support.length && (
                <View
                  style={{
                    bottom: 0,
                    height: 1,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}

          <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
            <StyledH1>Social</StyledH1>
          </View>
          {social.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 20,
              }}>
              <StyledText>{item}</StyledText>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != social.length && (
                <View
                  style={{
                    bottom: 0,
                    height: 1,
                    right: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* === */}
        <View style={{ paddingVertical: 60 }}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>
            <Text style={{ fontSize: 18 }}>Version {packageJson.version} beta</Text>
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
