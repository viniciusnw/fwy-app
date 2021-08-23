import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';

import { showSnackbar } from '@Config/graphql';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { Icon, Button, Input, InputDate, DismissKeyboard } from '@Components';

import FormCustomerUpdate, {
  fields as FormFields,
} from './components/profile-edit-form.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'ProfileEdit'>;
class ProfileEdit extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
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

  componentDidUpdate(prevProps: ReduxPropsType) {
    this.handleCustomerUpdate(prevProps);
  }

  private handleCustomerUpdate(prevProps: ReduxPropsType) {
    const {
      update: { success },
    } = this.props.useRedux.User;
    const {
      update: { success: prevSuccess },
    } = prevProps.useRedux.User;

    if (success && success != prevSuccess)
      showSnackbar('Your profile was update ✅ ', 'success', 'i');
  }

  private customerUpdate(customerForm) {
    const customerFormClone = JSON.parse(JSON.stringify(customerForm));

    Object.keys(customerFormClone).map((key) => {
      if (this.User && customerForm[key] == this.User[key])
        delete customerFormClone[key];
    });

    const fieldsToUpdate = Object.keys(customerFormClone);

    if (customerFormClone?.weight)
      customerFormClone.weight = parseFloat(customerFormClone.weight);
    if (customerFormClone?.height)
      customerFormClone.height = parseFloat(customerFormClone.height);

    if (customerFormClone?.avatar)
      this.props.useDispatch.update({
        customer: {
          ...customerFormClone,
          avatar: {
            type: customerFormClone.avatar.type,
            data: customerFormClone.avatar.base64,
          },
        },
      });
    else if (fieldsToUpdate.length)
      this.props.useDispatch.update({
        customer: {
          ...customerFormClone,
        },
      });
  }

  render() {
    const User = this.User;
    const tFormErros: any = this.t('formErros');

    const FormCustomerUpdateSchema = yup.object().shape({
      [FormFields.name]: yup.string().required(tFormErros.name),
      [FormFields.email]: yup
        .string()
        .email(tFormErros.email)
        .required(tFormErros.emailNull),
      [FormFields.birthday]: yup.date().required(tFormErros.date),
      [FormFields.gender]: yup.string().required(tFormErros.gender),
      [FormFields.weight]: yup
        .number()
        .required(tFormErros.weightNull)
        .min(1, tFormErros.weight),
      [FormFields.height]: yup
        .number()
        .required(tFormErros.height)
        .min(1, tFormErros.heightNull),
    });

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
            onSubmit={this.customerUpdate.bind(this)}>
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

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
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

export default withTranslation('ProfileEdit')(
  connect(mapStateToProps, mapDispatchToProps)(ProfileEdit),
);
