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
import { listCustomers_listCustomers_customers } from '@Config/graphql';

type CustomerItemProps = {
  onClick?: (customerId: string) => void;
  customer: listCustomers_listCustomers_customers;
};

const CustomerItem: React.FC<CustomerItemProps> = ({
  onClick,
  customer,
}: CustomerItemProps) => {
  const { Bagde: CustomerItem } = ASSETS.FASTING_ADM.svgs;

  const handleClick = () => {
    onClick && onClick(customer._id);
  };

  return (
    <Container onPress={handleClick}>
      {customer.avatar ? (
        <AvatarContent>
          <CustomerItemAvatar width="100%" height={100} />
          <Avatar
            resizeMode="cover"
            source={{
              uri: `data:${customer.avatar.type};base64,${customer.avatar.data}`,
            }}
          />
        </AvatarContent>
      ) : (
        <CustomerItem width="100%" height={100} />
      )}

      <NameContainer>
        <Name>{customer.name.split(' ')[0]}</Name>
      </NameContainer>
    </Container>
  );
};

const { BagdeWhite } = ASSETS.FASTING_ADM.svgs;

const Container = styled(TouchableOpacity)`
  width: 33%;
  padding: 8px;
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
  width: 90px;
  height: 90px;
  border-radius: 90px;
`;

const NameContainer = styled(View)`
  margin-top: 8px;
`;

const Name = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export default CustomerItem;
