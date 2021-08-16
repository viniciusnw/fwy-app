import * as yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components/native';

import {
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {
  Button,
  Icon,
  Input,
  InputDate,
  InputSelect,
  InputPhone,
} from '@Components';

import { FASTING } from '@Config/constants';
import * as ASSETS from '@Config/assets';
import { useTranslation } from 'react-i18next';
import { listCustomers_listCustomers_customers } from '@Config/graphql';

const { languages } = FASTING.enums;

type CustomerItemProps = {
  customer: listCustomers_listCustomers_customers;
};

const CustomerItem: React.FC<CustomerItemProps> = ({
  customer,
}: CustomerItemProps) => {
  const {
    BagdeWhite: CustomerItem,
    Bagde: CustomerItemAvatar,
  } = ASSETS.FASTING_ADM.svgs;

  return (
    <TouchableOpacity>
      {customer.avatar ? (
        <CustomerItemAvatar width={100} height={100} />
      ) : (
        <CustomerItem width={100} height={100} />
      )}
    </TouchableOpacity>
  );
};

export default CustomerItem;
