import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { Icon, Button, Input } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import {
  StyledField,
  StyledH1,
  StyledText,
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

  render() {
    const profileEdit = {
      name: {
        value: '',
        placeholder: 'Name',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      email: {
        value: '',
        placeholder: 'E-mail',
        onChangeText: () => true,
        autoCompleteType: 'email',
        placeholderTextColor: '#FFF',
      },
      birthday: {
        value: '',
        placeholder: 'Birthday',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      gender: {
        value: '',
        placeholder: 'Gender',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      weight: {
        value: '',
        placeholder: 'Weight',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
      height: {
        value: '',
        placeholder: 'Height',
        onChangeText: () => true,
        placeholderTextColor: '#FFF',
      },
    };

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ alignItems: 'center', marginHorizontal: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 30,
              borderWidth: 1,
            }}>
            <View style={{ borderWidth: 1 }}>
              <Icon
                size={110}
                color={'rgba(255, 255, 255, .5)'}
                icon="user-circle"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 24 }}>
              <StyledH1>Vinicius</StyledH1>
              <StyledText>3 achievements</StyledText>
            </View>
          </View>

          <View
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 30,
              borderWidth: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
