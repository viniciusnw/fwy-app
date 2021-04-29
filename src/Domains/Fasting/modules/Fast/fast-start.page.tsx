import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';

import { Button, Icon, Input } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import {
  StyledText, StyledH1, StyledText2, StyledH2, StyledText3,
  StyledText4, StyledText5, StyledText6, StyledText7, StyledText8
} from './fast.style';


type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastStart'>;
class FastStart extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
      pageConfig: { backgroundSolidColor: 'secondary' },
      bottomBarConfig: { color: '#FFF' }
    })

    this.state = {
      form: {

      }
    }
  }

  goToTimer = () => {
    const { navigation } = this.props;
    navigation.navigate('Timer');
  }

  goToBadgeAll = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeAll');
  }

  render() {
    const { RibbonFull } = ASSETS.FASTING.svgs;
    const inputFasting = {
      value: '',
      onChangeText: () => true,
      placeholder: 'Fasting name',
      placeholderTextColor: "#FFF",
    }

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    return (
      <View style={{ flex: 1 }}>
        {/* === */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 40 }}>

          {/* === */}
          {true && (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 4, paddingHorizontal: 15 }}>
              <StyledText>Custom Plan</StyledText>
              <Icon size={12} color={'#FFF'} icon="info" style={{ marginLeft: 4 }} />
            </View>
          )}

          {/* === */}
          <View style={{ paddingBottom: 15, width: '100%' }}>
            <Input {...inputFasting} />
          </View>

          {/* === */}
          <View style={{ padding: 15, width: '100%' }}>
            <StyledH1>Duration</StyledH1>
            <StyledText2>You can save presets up to 24 hours.</StyledText2>
          </View>

          {/* === */}
          <View style={{ width: '100%', padding: 15 }}>
            <View style={{ flexDirection: 'row', marginBottom: 8, alignItems: 'center' }}>
              <StyledH2>Days</StyledH2>
              <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal>
                {days.map(d => (
                  <TouchableOpacity style={[{
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 4,
                  }, d == 3 && { backgroundColor: '#EC5349' }]}>
                    <StyledText3>{d}</StyledText3>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <StyledH2>Hours</StyledH2>
              <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} horizontal>
                {hours.map(h => (
                  <TouchableOpacity style={[{
                    width: 45,
                    borderRadius: 8,
                    paddingVertical: 4,
                  }, h == 1 && { backgroundColor: '#EC5349' }]}>
                    <StyledText3>{h}</StyledText3>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* === */}
          <View style={{ width: '100%', padding: 15 }}>
            <StyledH1>Color</StyledH1>
            <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: -6 }}>
              <TouchableOpacity style={{ borderWidth: 2, borderColor: '#FFF', height: 25, width: 25, backgroundColor: '#EC5349', borderRadius: 25, marginHorizontal: 6 }} />
              <TouchableOpacity style={{ borderWidth: 2, borderColor: '#FFF', height: 25, width: 25, backgroundColor: '#8B4F9F', borderRadius: 25, marginHorizontal: 6 }} />
              <TouchableOpacity style={{ borderWidth: 2, borderColor: '#FFF', height: 25, width: 25, backgroundColor: '#222842', borderRadius: 25, marginHorizontal: 6 }} />
              <TouchableOpacity style={{ borderWidth: 2, borderColor: '#FFF', height: 25, width: 25, backgroundColor: '#EB334D', borderRadius: 25, marginHorizontal: 6 }} />
            </View>
          </View>

          {/* === */}
          <View style={{ padding: 15 }}>
            <StyledText4>Long 5 Fast Journal</StyledText4>
            <StyledText5>
              A lot happens during a fast. Tracking your moo Will
              Help you understand those changes, and reflecte on
              How you’e feeling at different stages of your fast.
            </StyledText5>
          </View>
        </View>

        {/* === */}
        <View style={{ width: '100%', height: 42, bottom: -62, marginTop: -62, }} />

        {/* === */}
        <View style={{ height: 230, bottom: -62, right: 0, left: 0 }}>
          <ImageBackground resizeMode='cover' style={{ flex: 1, paddingBottom: 62 }} source={ASSETS.FASTING.backgrounds['primary']}>
            <View style={{ marginHorizontal: '23%', top: -20 }}>
              <Button onPress={this.goToTimer} color="primary" icon={{ icon: 'timer', color: '#EC5349', size: 22 }}>
                START YOUR FAST
              </Button>
            </View>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={this.goToBadgeAll}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 22 }}>
                <View style={{ flexDirection: 'row' }}>
                  <RibbonFull width={20} height={30} style={{ marginTop: 5 }} />
                  <View style={{ marginLeft: 10 }}>
                    <StyledText6>JOURNAL</StyledText6>
                    <StyledText7>Long 3 entries</StyledText7>
                    <StyledText8>7 days</StyledText8>
                  </View>
                </View>

                <Button small font={{ size: 10 }} color="transparent">
                  Join to invite Friends
                </Button>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ }: ReduxStateType) {
  return {
    useRedux: {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: _ => dispatch(ReduxActions.logout())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FastStart);
