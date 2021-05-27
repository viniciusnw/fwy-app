import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { Icon, Button } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  StyledH2,
  StyledText2,
  StyledText3,
  StyledText4,
} from './profile.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Profile'>;
class Profile extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    pageConfig: { backgroundImage: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 20 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 30, width: '100%', paddingRight: 7 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: '100%',
              paddingHorizontal: 30,
            }}>
            <Icon
              size={64}
              color={'rgba(255, 255, 255, .9)'}
              icon="user-circle"
            />
            <View style={{ flex: 1, marginLeft: 24 }}>
              <StyledH2>Vinicius Inacio</StyledH2>
              <StyledText3>3 achievements</StyledText3>
            </View>
          </TouchableOpacity>

          <View
            style={{
              height: 210,
              width: '100%',
              marginTop: 34,
              flexWrap: 'wrap',
              borderRadius: 10,
              marginBottom: 40,
              paddingVertical: 10,
              flexDirection: 'row',
              paddingHorizontal: 30,
              alignContent: 'space-around',
              backgroundColor: 'rgba(0, 0, 0, .1)',
            }}>
            {/* Row 1 */}
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>Total fasts</StyledText2>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>7-fasts avg</StyledText2>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>Logests fast</StyledText2>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
                0
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
                0<Text style={{ fontSize: 21 }}>h</Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
                0<Text style={{ fontSize: 21 }}>h</Text>
              </Text>
            </View>

            {/* Row 2 */}
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>Logests{`\n`}streak</StyledText2>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>Current{`\n`}streak</StyledText2>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33.33%',
              }}>
              <StyledText2>Weight</StyledText2>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 52,
                width: '33.33%',
              }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
                0
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 52,
                width: '33.33%',
              }}>
              <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>
                0
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: 52,
                width: '33.33%',
              }}>
              <View style={{ width: '100%', alignSelf: 'center' }}>
                <Button small font={{ size: 13 }} color="secondary">
                  Weight in
                </Button>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 30,
            }}>
            <StyledText2>RECENT FASTS</StyledText2>
            <TouchableOpacity>
              <StyledText4>SEE MORE</StyledText4>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, .1)',
              width: '100%',
              height: 222,
              marginTop: 16,
              marginBottom: 40,
            }}
          />

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 30,
            }}>
            <StyledText2>Total Fasting Hours</StyledText2>
            <TouchableOpacity>
              <StyledText4>SEE MORE</StyledText4>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, .1)',
              width: '100%',
              height: 197,
              marginTop: 16,
              marginBottom: 40,
            }}
          />

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 30,
            }}>
            <StyledText2>Weight</StyledText2>
            <TouchableOpacity>
              <StyledText4>SEE MORE</StyledText4>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, .1)',
              width: '100%',
              height: 197,
              marginTop: 16,
              marginBottom: 40,
            }}
          />
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
