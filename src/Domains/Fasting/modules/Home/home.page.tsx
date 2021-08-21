import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { Icon } from '@Components';
import { FASTING } from '@Config/constants';
import { StackScreenProps } from '@react-navigation/stack';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  AddFastItem,
  FastItem,
  StyledH1,
  StyledH2,
  StyledText2,
  StyledText3,
  StyledText4,
  EmptyFastItem,
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
  }

  private handlerClearFasting() {
    const { clearFasting } = this.props.useDispatch;
    const { isFocused } = this.props;
    isFocused && clearFasting();
  }

  render() {
    const fastItemPlus = [
      {
        name: 'Circadian Rhythm TRF',
        timeNumber: '13',
        timeString: 'H.',
      },
      {
        name: '16:8 TRF',
        timeNumber: '16',
        timeString: 'H.',
      },
      {
        name: '18:6 TRF',
        timeNumber: '18',
        timeString: 'H.',
      },
      {
        name: '20:4 TRF',
        timeNumber: '20',
        timeString: 'H.',
      },
      {
        name: '36-Hour Fast',
        timeNumber: '36',
        timeString: 'H.',
      },
      {},
    ];

    return (
      <Container
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {/* === */}
        <View style={{ marginHorizontal: 20 }}>
          <StyledH1>Escolha como começar o seu Jejum</StyledH1>
        </View>

        {/* === */}
        <View style={{ marginTop: 40, width: '100%' }}>
          <FastPresetListHeader>
            <StyledH2>Iniciar Jejum</StyledH2>
          </FastPresetListHeader>

          <View>
            <FastPresetContent>
              {[1, 2, 3].map((i, index) => this.Render_FastItem(index))}
            </FastPresetContent>
          </View>
        </View>

        {/* === */}
        <View style={{ marginTop: 40, width: '100%' }}>
          <FastPresetListHeader>
            <StyledH2>Most popular</StyledH2>
            {/* <Badges>
              <StyledText>PLUS</StyledText>
            </Badges> */}
          </FastPresetListHeader>

          <View>
            <FastPresetContent>
              {fastItemPlus.map((item, index) => (
                <>
                  {item.name ? (
                    <FastItem
                      onPress={() =>
                        this.goFastStart(
                          undefined,
                          parseInt(item.timeNumber),
                          item.name,
                        )
                      }
                      key={index}>
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
                        {/* {item.tag && <StyledText5>{item.tag}</StyledText5>} */}
                      </View>

                      <View style={{ width: '100%', alignItems: 'flex-end' }}>
                        <Icon size={12} color={'#FFF'} icon="info" />
                      </View>
                    </FastItem>
                  ) : (
                    <EmptyFastItem />
                  )}
                </>
              ))}
            </FastPresetContent>
          </View>
        </View>
      </Container>
    );
  }

  private Render_FastItem = (index) => {
    const presetItem = this.Render_PresetFast(index);
    if (!presetItem) return this.Render_EmptyFast(index);
    else return presetItem;
  };

  private Render_EmptyFast = (index) => {
    return (
      <AddFastItem key={index} onPress={() => this.goFastStart(index + 1)}>
        <Icon size={50} color={'#FFF'} icon="plus" />
      </AddFastItem>
    );
  };

  private Render_PresetFast = (index) => {
    const { presets } = this.props.useRedux.Fastings;
    const preset = presets.find((p) => p.index - 1 == index);
    const { fastColors, fastColorsRgb } = FASTING;
    const colorIndex = fastColors.indexOf(preset ? preset.color : '');

    if (preset)
      return (
        <View key={index}>
          {preset.color ? <PresetBackdrop /> : null}

          <FastItem
            key={index}
            style={[
              fastColorsRgb[colorIndex] != undefined && {
                backgroundColor: `rgba(${fastColorsRgb[colorIndex]}, .7)`,
              },
            ]}
            onPress={() => this.goFastStart(preset._id)}>
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
        </View>
      );
    return null;
  };

  private getDuration(preset) {
    if (!preset) return;
    const differenceInHours = preset.days * 24 + preset.hours;
    return differenceInHours.toFixed();
  }

  private goFastStart = (
    presetId?: string | number,
    defaultHour?: number,
    defaultName?: string,
  ) => {
    const { navigation } = this.props;
    navigation.navigate('FastStart', { presetId, defaultHour, defaultName });
  };
}

const Container = styled(ScrollView)`
  flex: 1;
  margin: 0 6%;
  /* align-items: center;
  justify-content: flex-start; */
`;

const FastPresetContent = styled(View)`
  margin: -8px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const FastPresetListHeader = styled(View)`
  margin-bottom: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

const PresetBackdrop = styled(View)`
  margin: 8px;
  flex-grow: 1;
  height: 140px;
  flex-basis: 103px;
  border-radius: 20px;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
`;

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
      clearFasting: (_) => dispatch(ReduxActions.clearFasting()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
