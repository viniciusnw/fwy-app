import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { Icon, Button, Input } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import {
  StyledField,
  StyledH1,
  StyledText1,
  StyledText2,
} from './profile.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'ProfileEdit'>;
class ProfileEdit extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
    pageConfig: { backgroundImage: 'tertiary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('ProfileEdit=>componentDidMount: ', this.props.useRedux.User);
  }

  render() {
    const User = this.User;

    const profileEdit = {
      name: {
        value: User?.name,
        placeholder: 'Name',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      email: {
        value: User?.email,
        placeholder: 'E-mail',
        onChangeText: () => true,
        autoCompleteType: 'email',
        placeholderTextColor: '#FFF',
      },
      birthday: {
        value: User?.birthday,
        placeholder: 'Birthday',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      gender: {
        value: User?.gender,
        placeholder: 'Gender',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      weight: {
        value: User?.weight,
        placeholder: 'Weight',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      height: {
        value: User?.weight,
        placeholder: 'Height',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
    };

    return (
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{ alignItems: 'center', marginHorizontal: 20 }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 30,
            }}>
            <View>{this.Render_Avatar(User)}</View>

            <View style={{ flex: 1, marginLeft: 24 }}>
              <StyledH1>{User?.name.split(' ')[0]}</StyledH1>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 40,
            }}>
            <StyledText1>Change Profile Picture</StyledText1>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: 40, marginHorizontal: 40 }}>
          <StyledField>
            <Input {...profileEdit.name} />
          </StyledField>

          <View
            style={{ marginBottom: 15, paddingHorizontal: 15, opacity: 0.5 }}>
            <StyledText2> Private Information </StyledText2>
          </View>

          <StyledField>
            <Input {...profileEdit.email} />
          </StyledField>

          <StyledField>
            <Input {...profileEdit.birthday} />
          </StyledField>

          <StyledField>
            <Input {...profileEdit.gender} />
          </StyledField>

          <StyledField>
            <Input {...profileEdit.weight} />
          </StyledField>

          <StyledField>
            <Input {...profileEdit.height} />
          </StyledField>

          <View style={{ marginTop: 15, marginHorizontal: '33%' }}>
            <Button color="secondary"> Save </Button>
          </View>
        </View>
      </ScrollView>
    );
  }

  private get User() {
    const { data } = this.props.useRedux.User;
    if (!data) return;
    return data;
  }

  private Render_Avatar = (User) => {
    if (!User.avatar)
      return (
        <Icon size={110} color={'rgba(255, 255, 255, .5)'} icon="user-circle" />
      );
    else
      return (
        <Image
          style={{
            width: 110,
            height: 110,
            borderRadius: 110,
            resizeMode: 'cover',
          }}
          source={{
            uri: `data:${User.avatar.type};base64,${User.avatar.data}`,
          }}
        />
      );
  };
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: (_) => dispatch(ReduxActions.logout()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
