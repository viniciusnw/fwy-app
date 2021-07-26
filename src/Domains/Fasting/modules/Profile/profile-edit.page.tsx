import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { Icon, Button, Input, InputDate, DismissKeyboard } from '@Components';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import FormCustomerUpdate, {
  FormCustomerUpdateSchema,
  fields as FormFields,
} from './components/profile-edit-form.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'ProfileEdit'>;
class ProfileEdit extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    bottomBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'tertiary' },
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('ProfileEdit=>componentDidMount: ', this.props.useRedux.User);
  }

  private handlerCustomerUpdate(customerForm) {
    Object.keys(customerForm).map((key) => {
      if (this.User && customerForm[key] == this.User[key])
        delete customerForm[key];
    });

    if (customerForm?.weight)
      customerForm.weight = parseFloat(customerForm.weight);
    if (customerForm?.height)
      customerForm.height = parseFloat(customerForm.height);

    if (customerForm?.avatar)
      this.props.useDispatch.update({
        customer: {
          ...customerForm,
          avatar: {
            type: customerForm.avatar.type,
            data: customerForm.avatar.base64,
          },
        },
      });
    else
      this.props.useDispatch.update({
        customer: {
          ...customerForm,
        },
      });
  }

  render() {
    const User = this.User;

    const FormInitialValues = {
      [FormFields.avatar]: User?.avatar || null,
      [FormFields.name]: User?.name || '',
      [FormFields.email]: User?.email || '',
      [FormFields.birthday]: User?.birthday || '',
      [FormFields.gender]: User?.gender || '',
      [FormFields.weight]: User?.weight || '',
      [FormFields.height]: User?.height || '',
    };

    const { loading } = this.props.useRedux.User.update;

    return (
      <DismissKeyboard>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Formik
            enableReinitialize
            initialValues={FormInitialValues}
            validationSchema={FormCustomerUpdateSchema}
            onSubmit={this.handlerCustomerUpdate.bind(this)}>
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <FormCustomerUpdate
                errors={errors}
                values={values}
                loading={loading}
                touched={touched}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
              />
            )}
          </Formik>
        </ScrollView>
      </DismissKeyboard>
    );
  }

  private get User() {
    const { data } = this.props.useRedux.User;
    if (!data) return;
    return data;
  }
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
      update: (_) => dispatch(ReduxActions.update(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
