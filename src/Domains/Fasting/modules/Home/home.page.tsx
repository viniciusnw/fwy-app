import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import { Icon } from '@Components';
import { View, Text } from 'react-native';
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

  componentDidUpdate(prevProps) {
    console.log(this.props);
  }

  componentDidMount() {
    this.props.useDispatch.getPresets();
  }

  goFastStart = (presetId) => {
    const { navigation } = this.props;
    navigation.navigate('FastStart', { presetId });
  };

  goToTimer = (fastingId) => {
    const { navigation } = this.props;
    navigation.navigate('Timer', { fastingId });
  };

  render() {
    const fastItemPlus = [
      {
        name: 'Fasting Iniciante',
        timeNumber: '13',
        timeString: 'H.',
      },
      {
        name: 'Fasting Iniciante',
        timeNumber: '16',
        timeString: 'H.',
      },
      {
        name: 'Personal Fasting Star',
        timeNumber: '60',
        timeString: 'H.',
        tag: 'Fasting',
      },
      {
        name: 'Consultation',
        timeNumber: '30',
        timeString: 'Min.',
      },
      {
        name: 'Consultation',
        timeNumber: '1',
        timeString: 'H.',
      },
      {
        name: 'Consultation',
        timeNumber: '1',
        timeString: '/Week',
      },
    ];

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 35,
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

          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              margin: -8,
            }}>
            {[1, 2, 3].map((i, index) => this.Render_FastItem(index))}
          </View>
        </View>

        {/* === */}
        <View style={{ marginTop: 40, width: '100%' }}>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <StyledH2>Planos</StyledH2>
            <Badges>
              <StyledText>PLUS</StyledText>
            </Badges>
          </View>

          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: -8,
            }}>
            {fastItemPlus.map((item, index) => (
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
    );
  }

  private Render_FastItem = (index) => {
    const Item = this.Render_ItemFast(index);
    if (!Item) return this.Render_EmptyFast(index);
    else return Item;
  };

  private Render_EmptyFast = (index) => {
    return (
      <AddFastItem key={index} onPress={() => this.goFastStart(index)}>
        <Icon size={50} color={'#FFF'} icon="plus" />
      </AddFastItem>
    );
  };

  private Render_ItemFast = (index) => {
    const { presets } = this.props.useRedux.Fastings;
    const preset = presets.find((f) => f.index == index);
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
    const differenceInHours = (preset.days * 24) + preset.hours
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
