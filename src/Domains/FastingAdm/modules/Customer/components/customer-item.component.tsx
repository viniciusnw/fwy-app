import React from 'react';
import styled from 'styled-components/native';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { Icon } from '@Components';

import * as ASSETS from '@Config/assets';
import { listCustomers_listCustomers_customers, getLastFasting_getLastFasting } from '@Config/graphql';

type CustomerItemProps = {
  customer: listCustomers_listCustomers_customers | null;
  lastFasting: getLastFasting_getLastFasting | null
};

const CustomerItem: React.FC<CustomerItemProps> = ({
  customer,
  lastFasting
}: CustomerItemProps) => {
  const { Bagde: CustomerItem } = ASSETS.FASTING_ADM.svgs;

  console.log('CustomerItem:customer: ', customer);
  console.log('CustomerItem:lastFasting: ', lastFasting);

  return (
    <Container>
      <AvatarContainer>
        {customer?.avatar ? (
          <AvatarContent>
            <CustomerItemAvatar width={100} height={100} />
            <Avatar
              resizeMode="cover"
              source={{
                uri: `data:${customer.avatar.type};base64,${customer.avatar.data}`,
              }}
            />
          </AvatarContent>
        ) : (
          <CustomerItem width={100} height={100} />
        )}
      </AvatarContainer>

      <LastFastContent>
        {customer?.name}
        {lastFasting?.startDate}
        {lastFasting?.startDate}
      </LastFastContent>
    </Container>
  );
};

const { BagdeWhite } = ASSETS.FASTING_ADM.svgs;

const Container = styled(View)`
  flex-direction: row;
`;

const AvatarContainer = styled(View)`
  width: 110px;
  height: 150px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const CustomerItemAvatar = styled(BagdeWhite)`
  z-index: 9;
  position: absolute;
`;

const AvatarContent = styled(View)`
  align-items: center;
  justify-content: center;
`;

const Avatar = styled(Image)`
  width: 95px;
  height: 95px;
  border-radius: 95px;
`;

const LastFastContent = styled(View)``;

export default CustomerItem;
