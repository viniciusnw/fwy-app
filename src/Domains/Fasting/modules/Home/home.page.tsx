import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Icon } from '@Components';
import { StackScreenProps } from '@react-navigation/stack';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  AddFastItem,
  Badges,
  FastItem,
  StyledH1,
  StyledH2,
  StyledText,
  StyledText2,
  StyledText3,
  StyledText4,
  StyledText5,
} from './home.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Home'>;
class Home extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.handlerClearFasting();
    this.props.useDispatch.getPresets();
  }

  private handlerClearFasting() {
    const { clearFasting } = this.props.useDispatch;
    const { isFocused } = this.props;
    isFocused && clearFasting();
  }

  render() {
    const fastItemPlus = [
      // {
      //   name: 'Fasting Iniciante',
      //   timeNumber: '13',
      //   timeString: 'H.',
      // },
      // {
      //   name: 'Fasting Iniciante',
      //   timeNumber: '16',
      //   timeString: 'H.',
      // },
      // {
      //   name: 'Personal Fasting Star',
      //   timeNumber: '60',
      //   timeString: 'H.',
      //   tag: 'Fasting',
      // },
      // {
      //   name: 'Consultation',
      //   timeNumber: '30',
      //   timeString: 'Min.',
      // },
      // {
      //   name: 'Consultation',
      //   timeNumber: '1',
      //   timeString: 'H.',
      // },
      // {
      //   name: 'Consultation',
      //   timeNumber: '1',
      //   timeString: '/Week',
      // },
    ];

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginHorizontal: 35,
          justifyContent: 'flex-start',
        }}>
        {/* === */}
        <View style={{ marginHorizontal: 20 }}>
          <StyledH1>Escolha como começar o seu Jejum</StyledH1>
        </View>

        {/* === */}
        <View style={{ marginTop: 40, width: '100%' }}>
          <View style={{ marginBottom: 12 }}>
            <StyledH2>Iniciar Jejum</StyledH2>
          </View>

          <View>
            <View
              style={{
                margin: -8,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              {[1, 2, 3].map((i, index) => this.Render_FastItem(index))}
            </View>
          </View>
        </View>

        {/* === */}
        <View style={{ marginTop: 40, width: '100%' }}>
          <View
            style={{
              marginBottom: 12,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <StyledH2>Planos</StyledH2>
            <Badges>
              <StyledText>PLUS</StyledText>
            </Badges>
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                margin: -8,
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              {fastItemPlus.map((item: any, index) => (
                <FastItem key={index}>
                  <View style={{ width: '100%', alignItems: 'flex-start' }}>
                    <StyledText2>{item.name}</StyledText2>
                  </View>

                  <View style={{ width: '100%', alignItems: 'flex-start' }}>
                    <View style={{ marginBottom: 6 }}>
                      <StyledText3>
                        {item.timeNumber}{' '}
                        <StyledText4>{item.timeString}</StyledText4>
                      </StyledText3>
                    </View>
                    {item.tag && <StyledText5>{item.tag}</StyledText5>}
                  </View>

                  <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <Icon size={12} color={'#FFF'} icon="info" />
                  </View>
                </FastItem>
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }

  goFastStart = (presetId) => {
    const { navigation } = this.props;
    navigation.navigate('FastStart', { presetId });
  };

  goToTimer = (fastingId) => {
    const { navigation } = this.props;
    navigation.navigate('Timer', { fastingId });
  };

  private Render_FastItem = (index) => {
    const Item = this.Render_ItemFast(index);
    if (!Item) return this.Render_EmptyFast(index);
    else return Item;
  };

  private Render_EmptyFast = (index) => {
    return (
      <AddFastItem key={index} onPress={() => this.goFastStart(index + 1)}>
        <Icon size={50} color={'#FFF'} icon="plus" />
      </AddFastItem>
    );
  };

  private Render_ItemFast = (index) => {
    const { presets } = this.props.useRedux.Fastings;
    const preset = presets.find((f) => f.index - 1 == index);
    if (preset)
      return (
        <FastItem key={index} onPress={() => this.goFastStart(preset._id)}>
          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <StyledText2>{preset.name}</StyledText2>
          </View>

          <View style={{ width: '100%', alignItems: 'flex-start' }}>
            <StyledText3>
              {this.getDuration(preset)} <StyledText4>H.</StyledText4>
            </StyledText3>
          </View>

          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <Icon size={12} color={'#FFF'} icon="info" />
          </View>
        </FastItem>
      );
    return null;
  };

  private getDuration(preset) {
    if (!preset) return;
    const differenceInHours = preset.days * 24 + preset.hours;
    return differenceInHours.toFixed();
  }
}

function mapStateToProps({ User, Fastings }: ReduxStateType) {
  return {
    useRedux: {
      User,
      Fastings,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      getPresets: () => dispatch(ReduxActions.getPresets()),
      clearFasting: (_) => dispatch(ReduxActions.clearFasting()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
