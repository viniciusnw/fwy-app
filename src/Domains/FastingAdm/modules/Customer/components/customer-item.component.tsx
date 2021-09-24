import React from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { View, Image, Text, Linking } from 'react-native';
import { Icon } from '@Components';

import * as ASSETS from '@Config/assets';
import { getCustomer_getCustomer } from '@Config/graphql';
import { TouchableOpacity } from 'react-native-gesture-handler';

type CustomerItemProps = {
  customer: getCustomer_getCustomer | null;
};

const CustomerItem: React.FC<CustomerItemProps> = ({
  customer,
}: CustomerItemProps) => {
  const { t, i18n } = useTranslation('Customer');

  const { Bagde: CustomerItem } = ASSETS.FASTING_ADM.svgs;

  const configs = customer?.configs;

  const imageUri = `data:${customer?.avatar?.type};base64,${customer?.avatar?.data}`;

  const handleOpenWhatsapp = async () => {
    
    const phone = customer?.phone || ''
    const number = phone.replace(/\D/g, '');

    const supported = await Linking.canOpenURL(
      `whatsapp://send?text=Hello&phone=${number}`,
      // 'https://api.whatsapp.com/send?phone=5531984065335&text=Hello'
      // `https://wa.me/5531984065335`,
    );
    if (supported)
      await Linking.openURL(`whatsapp://send?text=Hello&phone=${phone}`);
    else
      await Linking.openURL(
        `https://api.whatsapp.com/send?phone=${number}&text=Hello`,
      );
  };

  return (
    <Container>
      <AvatarContainer>
        {customer?.avatar ? (
          <AvatarContent>
            <CustomerItemAvatar width={100} height={100} />
            <Avatar resizeMode="cover" source={{ uri: imageUri }} />
          </AvatarContent>
        ) : (
          <CustomerItem width={100} height={100} />
        )}
      </AvatarContainer>

      <InfosContent>
        <CustomerName>{customer?.name}</CustomerName>
        <CustomerValue>
          <CustomerValueDesc>Altura: </CustomerValueDesc>
          {customer?.height ? customer.height : '-'}{' '}
          {configs?.height ? configs?.height : '-'}
        </CustomerValue>
        <CustomerValue>
          <CustomerValueDesc>Peso: </CustomerValueDesc>
          {customer?.weight ? customer.weight : '-'}{' '}
          {configs?.weight ? configs?.weight : '-'}
        </CustomerValue>
        <TouchableOpacity onPress={handleOpenWhatsapp}>
          <CustomerValueSmall>
            <CustomerValueDesc>Phone: </CustomerValueDesc>
            {customer?.phone}
          </CustomerValueSmall>
        </TouchableOpacity>
        <CustomerValueSmall>
          <CustomerValueDesc>Email: </CustomerValueDesc>
          {customer?.email}
        </CustomerValueSmall>
      </InfosContent>
    </Container>
  );
};

const { BagdeWhite } = ASSETS.FASTING_ADM.svgs;

const Container = styled(View)`
  flex: 1;
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

const InfosContent = styled(View)`
  display: flex;
  padding-left: 16px;
  justify-content: space-around;
`;

const CustomerName = styled(Text)`
  font-size: 21px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const CustomerValueDesc = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkBlue};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const CustomerValue = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

const CustomerValueSmall = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.fonts.AdobeClean.regular};
`;

export default CustomerItem;
