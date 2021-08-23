import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components/native';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { launchCamera, ImagePickerResponse } from 'react-native-image-picker';

import * as ASSETS from '@Config/assets';
import { showSnackbar } from '@Config/graphql';
import { Button, Icon, DismissKeyboard } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import {
  View,
  Text,
  Share,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {
  StyledTextInput,
  StyledText16,
  StyledText17,
  StyledText18,
  StyledText19,
  StyledText20,
  StyledText21,
  StyledText22,
  StyledText23,
  StyledText9,
} from './fast.style';

type FastEndState = {
  pictureUpload: ImagePickerResponse | null;
  saved: boolean;
  customEndDate: Date;
  fastingNotes: string;
  howFellingSelected: number | null;
  visibleStartDateTimePickerModal: boolean;
  visibleEndDateTimePickerModal: boolean;
};

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastEnd'>;
class FastEnd extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  FastEndState
> {
  static setPageConfigs = {
    topBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'tertiary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);

    this.state = {
      pictureUpload: null,
      saved: false,
      fastingNotes: '',
      howFellingSelected: null,
      customEndDate: new Date(),
      visibleStartDateTimePickerModal: false,
      visibleEndDateTimePickerModal: false,
    };
  }

  componentDidUpdate(prevProps) {
    this.handlerEndFasting(prevProps);
  }

  private endFasting = (save: boolean) => {
    this.setState({ saved: save }, () => {
      const {
        fasting,
        createFasting: { data: cFastingId },
      } = this.props.useRedux.Fastings;

      const {
        customEndDate,
        pictureUpload,
        howFellingSelected,
        fastingNotes,
      } = this.state;

      const fastingId = fasting?._id
        ? fasting._id
        : cFastingId
        ? cFastingId
        : '';

      const hasPictureUpload = pictureUpload?.type && pictureUpload?.base64;
      const endFasting = (hasPictureUpload && {
        save,
        fastingId,
        customEndDate,
        howFelling: howFellingSelected,
        notes: fastingNotes,
        picture: {
          type: (pictureUpload && pictureUpload.type) || '',
          data: (pictureUpload && pictureUpload.base64) || '',
        },
      }) || {
        save,
        fastingId,
        customEndDate,
        howFelling: howFellingSelected,
        notes: fastingNotes,
      };

      this.props.useDispatch.endFasting({
        endFasting,
      });
    });
  };

  private handlerEndFasting = (prevProps: ReduxPropsType) => {
    const { reset } = this.props.navigation;
    const { isFocused } = this.props;
    const { saved } = this.state;

    const text = saved
      ? 'Your fast was saved ✅ '
      : 'Your fast was dropped ⛔️';

    const {
      endFasting: { success },
    } = this.props.useRedux.Fastings;

    const {
      endFasting: { success: prevSuccess },
    } = prevProps.useRedux.Fastings;

    if (isFocused && prevSuccess != success) {
      showSnackbar(text, 'success', 'i', () => {
        reset({
          index: 1,
          routes: [{ name: 'Home' }],
        });
      });
    }
  };

  private handlerShared = async () => {
    try {
      const result = await Share.share({
        title: 'Nice effort! ',
        url: 'https://www.fastingwithyara.com/',
        message: `You completed a fast for a total ${this.Duration}`,
      });
      if (result.action === Share.sharedAction) {
        // shared with activity type of result.activityType
        if (result.activityType) return;
        else return; // shared
      } else if (result.action === Share.dismissedAction) return; // dismissed
    } catch (error) {
      console.log(error.message);
    }
  };

  private handlerEditStartDate = (date: Date) => {
    this.setVisibleDateTimePickerModal(false, true);
    const fastingId = this.FastingId;

    if (fastingId) {
      this.props.useDispatch.editFasting({
        id: fastingId,
        editStartEnd: true,
        fasting: {
          startDate: date,
        },
      });
    }
  };

  private handlerEditEndDate = (date: Date) => {
    this.setVisibleDateTimePickerModal(false);
    this.setState({
      customEndDate: date,
    });
  };

  private handlerLaunchCameraLibrary = () => {
    launchCamera(
      {
        quality: 0.1,
        mediaType: 'photo',
        includeBase64: true,
      },
      (res: ImagePickerResponse) => {
        const { base64 } = res;
        if (base64) this.setState({ pictureUpload: res });
      },
    );
  };

  render() {
    const phoneLanguage = this.props.i18n.language.replace('-', '_');

    const { backgrounds } = ASSETS.FASTING;

    const howFelling = [
      {
        value: 0,
        label: '😡',
      },
      {
        value: 1,
        label: '😢',
      },
      {
        value: 2,
        label: '🙂',
      },
      {
        value: 3,
        label: '😄',
      },
      {
        value: 4,
        label: '😍',
      },
    ];

    const endFastItens = [
      {
        title: this.t('start'),
        subtitle: this.StartDate,
      },
      {
        title: this.t('end'),
        subtitle: this.CurrentDate,
      },
    ];

    const {
      endFasting: { loading, success },
    } = this.props.useRedux.Fastings;

    const {
      saved,
      pictureUpload,
      visibleStartDateTimePickerModal,
      visibleEndDateTimePickerModal,
    } = this.state;

    const disabled = success || loading;

    return (
      <DismissKeyboard>
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
            {/* === */}
            <View style={{ height: 200 }}>
              <ImageBackground
                resizeMode="cover"
                style={{
                  flex: 1,
                  paddingVertical: 30,
                  paddingHorizontal: 40,
                  justifyContent: 'flex-end',
                }}
                source={backgrounds['tertiary']}>
                <TouchableOpacity
                  disabled={disabled}
                  onPress={this.props.navigation.goBack}
                  style={{
                    top: -30,
                    alignSelf: 'flex-end',
                  }}>
                  <Icon size={25} color={'#FFF'} icon="close" />
                </TouchableOpacity>

                <View>
                  <StyledText16>{this.t('title')}</StyledText16>
                  <StyledText17>{this.t('description')}</StyledText17>
                  <StyledText17>
                    {this.t('descriptionLine2')}{' '}
                    <StyledText18>{this.Duration}</StyledText18>
                  </StyledText17>
                </View>

                <TouchableOpacity
                  disabled={disabled}
                  onPress={this.handlerShared}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                  }}>
                  <StyledText19>{this.t('btnShare')}</StyledText19>
                  <Icon size={25} color={'#FFF'} icon="upload" />
                </TouchableOpacity>
              </ImageBackground>
            </View>

            {/* === */}
            <View
              style={{
                flex: 1,
                paddingTop: 30,
                alignItems: 'center',
                marginHorizontal: 40,
                justifyContent: 'flex-start',
              }}>
              <View style={{ width: '100%' }}>
                <TouchableOpacity
                  disabled={disabled}
                  onPress={
                    pictureUpload
                      ? () => this.setState({ pictureUpload: null })
                      : this.handlerLaunchCameraLibrary
                  }
                  style={{
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {pictureUpload ? (
                    <>
                      <Icon size={25} color={'#FFF'} icon="close" />
                      <StyledText20>{this.t('btnDeletePhoto')}</StyledText20>
                    </>
                  ) : (
                    <>
                      <Icon size={25} color={'#FFF'} icon="camera" />
                      <StyledText20>{this.t('btnAddPhoto')}</StyledText20>
                    </>
                  )}
                </TouchableOpacity>

                {endFastItens.map((item, idx) => (
                  <View
                    key={idx}
                    style={{
                      marginVertical: 16,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <StyledText21> {item.title} </StyledText21>
                      <StyledText22> {item.subtitle && item.subtitle[0]} </StyledText22>
                      <StyledText22> {item.subtitle && item.subtitle[1]} </StyledText22>
                    </View>

                    <TouchableOpacity
                      disabled={disabled}
                      onPress={() =>
                        this.setVisibleDateTimePickerModal(true, !idx)
                      }
                      style={{
                        marginLeft: 8,
                        borderRadius: 40,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, .4)',
                      }}>
                      <StyledText23>{this.t('edit')}</StyledText23>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <View style={{ marginTop: 40, width: '100%' }}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                  <StyledText9>{this.t('feel')}</StyledText9>
                  <View
                    style={{
                      marginTop: 12,
                      minHeight: 50,
                      flexDirection: 'row',
                    }}>
                    {howFelling.map((hFItem, index) => (
                      <EmojiTouchable
                        disabled={disabled}
                        key={index}
                        onPress={() => {
                          const { howFellingSelected } = this.state;
                          if (howFellingSelected == hFItem.value)
                            return this.setState({ howFellingSelected: null });
                          this.setState({ howFellingSelected: hFItem.value });
                        }}>
                        <Emoji
                          selected={
                            this.state.howFellingSelected == hFItem.value
                          }>
                          {hFItem.label}
                        </Emoji>
                      </EmojiTouchable>
                    ))}
                  </View>
                </View>

                <StyledTextInput
                  editable={!disabled}
                  multiline={true}
                  placeholder={this.t('textAreaPlaceholder')}
                  placeholderTextColor="#FFF"
                  value={this.state.fastingNotes}
                  onChangeText={(value) =>
                    this.setState({ fastingNotes: value })
                  }
                />

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Button
                    color="secondary"
                    disabled={disabled}
                    loading={saved && loading}
                    style={{ flex: 1, marginRight: 8 }}
                    onPress={() => this.endFasting(true)}>
                    {this.t('save')}
                  </Button>
                  <Button
                    color={'transparent'}
                    disabled={disabled}
                    loading={!saved && loading}
                    style={{ flex: 1, marginLeft: 8 }}
                    onPress={() => this.endFasting(false)}>
                    {this.t('delete')}
                  </Button>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>

          {visibleStartDateTimePickerModal && (
            <DateTimePickerModal
              mode="datetime"
              isVisible={true}
              locale={phoneLanguage}
              maximumDate={new Date()}
              onConfirm={this.handlerEditStartDate}
              date={this.InitialStartDateTimePickerModal}
              onCancel={() => this.setVisibleDateTimePickerModal(false, true)}
            />
          )}

          {visibleEndDateTimePickerModal && (
            <DateTimePickerModal
              mode="datetime"
              isVisible={true}
              locale={phoneLanguage}
              maximumDate={new Date()}
              date={this.state.customEndDate}
              onConfirm={this.handlerEditEndDate}
              minimumDate={this.InitialStartDateTimePickerModal}
              onCancel={() => this.setVisibleDateTimePickerModal(false)}
            />
          )}
        </ScrollView>
      </DismissKeyboard>
    );
  }

  private setVisibleDateTimePickerModal = (
    visible: boolean,
    start?: boolean,
  ) => {
    if (start)
      return this.setState({
        visibleStartDateTimePickerModal: visible,
      });

    this.setState({
      visibleEndDateTimePickerModal: visible,
    });
  };

  private get InitialStartDateTimePickerModal() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return new Date();
    return fasting.startDate;
  }

  private get StartDate() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;
    const phoneLanguage = this.props.i18n.language;
    const time = fasting.startDate.toLocaleTimeString(phoneLanguage).split(':');
    const timeAux = time[2].split(' ')[1] || '';
    const date = fasting.startDate.toLocaleDateString(phoneLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return [
      `${date}`,
      `${time[0]}:${time[1]}${timeAux}`
    ]
  }

  private get CurrentDate() {
    const phoneLanguage = this.props.i18n.language;
    const endDate = this.state.customEndDate;
    const time = endDate.toLocaleTimeString(phoneLanguage).split(':');
    const timeAux = time[2].split(' ')[1] || '';
    const date = endDate.toLocaleDateString(phoneLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return [
      `${date}`,
      `${time[0]}:${time[1]}${timeAux}`
    ]
  }

  private get Duration() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;

    const differenceInTime =
      new Date(this.state.customEndDate).getTime() -
      fasting.startDate.getTime();
    const differenceInHours = differenceInTime / 1000 / 3600;
    const differenceInMinutes = differenceInTime / 1000 / 60;

    if (differenceInHours >= 1)
      return this.t('timeH', { count: parseInt(differenceInHours.toFixed()) });
    else if (differenceInMinutes >= 1)
      return this.t('timeM', {
        count: parseInt(differenceInMinutes.toFixed()),
      });
    else return this.t('timeM', { count: 1 });
  }

  private get FastingId() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return false;
    return fasting._id;
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
}

const EmojiTouchable = styled(TouchableOpacity)`
  padding: 0 4px;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled(Text)<{ selected: boolean }>`
  font-size: 30px;
  ${(props) =>
    props.selected &&
    css`
      font-size: 40px;
    `}
`;

function mapStateToProps({ Fastings }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      endFasting: (_) => dispatch(ReduxActions.endFasting(_)),
      editFasting: (_) => dispatch(ReduxActions.editFasting(_)),
    },
  };
}

export default withTranslation('EndFasting')(
  connect(mapStateToProps, mapDispatchToProps)(FastEnd),
);
