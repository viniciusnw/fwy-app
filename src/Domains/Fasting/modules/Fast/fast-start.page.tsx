import { Formik } from 'formik';
import { connect } from 'react-redux';
import React, { createRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Button, Icon } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import {
  StyledText,
  StyledText4,
  StyledText5,
  StyledText6,
  StyledText7,
  StyledText8,
} from './fast.style';

import FastStartForm from './components/fast-start-form.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastStart'>;
class FastStart extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & any,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
    pageConfig: { backgroundSolidColor: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {
      form: {
        startDate: null,
        endDate: null,
      },
    };
  }

  goToTimer = () => {
    const { reset } = this.props.navigation;
    const {
      form: { days, hours },
    } = this.state;

    // const endDate = new Date();
    // endDate.setDate(endDate.getDate() + days);
    // endDate.setTime(endDate.getTime() + hours * 60 * 60 * 1000);
    // this.setState({
    //   form: {
    //     startDate: new Date(),
    //     endDate: endDate,
    //   },
    // });
    // console.log(this.state.form);

    console.log(this.props);
    console.log(this.props.handleSubmit());

    // reset({
    //   index: 2,
    //   routes: [{ name: 'Home' }, { name: 'Timer' }],
    // });
  };

  goToBadgeAll = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeAll');
  };

  render() {
    const { RibbonFull } = ASSETS.FASTING.svgs;
    return (
      <Formik
        validationSchema={{}}
        initialValues={{}}
        onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={{ flex: 1 }}>
            
            {/* === */}
            <View
              style={{
                flex: 1,
                marginHorizontal: 40,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              {/* === */}
              {true && (
                <View
                  style={{
                    width: '100%',
                    marginBottom: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                  }}>
                  <StyledText>Custom Plan</StyledText>
                  <Icon
                    size={12}
                    icon="info"
                    color={'#FFF'}
                    style={{ marginLeft: 4 }}
                  />
                </View>
              )}

              {/* === */}
              <FastStartForm />

              {/* === */}
              <View style={{ padding: 15 }}>
                <StyledText4>Long 5 Fast Journal</StyledText4>
                <StyledText5>
                  A lot happens during a fast. Tracking your moo Will Help you
                  understand those changes, and reflecte on How you’e feeling at
                  different stages of your fast.
                </StyledText5>
              </View>
            </View>

            {/* === */}
            <View
              style={{ width: '100%', height: 42, bottom: -62, marginTop: -62 }}
            />

            {/* === */}
            <View style={{ height: 230, bottom: -62, right: 0, left: 0 }}>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingBottom: 62 }}
                source={ASSETS.FASTING.backgrounds['primary']}>
                <View style={{ marginHorizontal: '23%', top: -20 }}>
                  <Button
                    onPress={this.goToTimer}
                    color="primary"
                    icon={{ icon: 'timer', color: '#EC5349', size: 22 }}>
                    START YOUR FAST
                  </Button>
                </View>

                <TouchableOpacity
                  style={{ flex: 1, justifyContent: 'center' }}
                  onPress={this.goToBadgeAll}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 22,
                      justifyContent: 'space-around',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <RibbonFull
                        width={20}
                        height={30}
                        style={{ marginTop: 5 }}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <StyledText6>JOURNAL</StyledText6>
                        <StyledText7>Long 3 entries</StyledText7>
                        <StyledText8>7 days</StyledText8>
                      </View>
                    </View>

                    <Button small color="transparent">
                      Invite Friends
                    </Button>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        )}
      </Formik>
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

export default connect(mapStateToProps, mapDispatchToProps)(FastStart);


// Formik x React Native example
// import React from 'react';
// import { Button, TextInput, View } from 'react-native';
// import { Formik } from 'formik';

// export const MyReactNativeForm = props => (
//   <Formik
//     initialValues={{ email: '' }}
//     onSubmit={values => console.log(values)}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View>
//         <TextInput
//           onChangeText={handleChange('email')}
//           onBlur={handleBlur('email')}
//           value={values.email}
//         />
//         <Button onPress={handleSubmit} title="Submit" />
//       </View>
//     )}
//   </Formik>
// );