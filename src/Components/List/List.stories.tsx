import React from 'react';
import { storiesOf } from '@storybook/react-native';

import {
  List,
  Item,
  AdressItem,
  SwitchItem,
  StatusItem,
  AccountItem,
  BoxItem,
  ServiceItem,
  StorybookWrapper,
} from '@Components';

const dataSimple = [
  {
    id: 1,
    label: 'First Item',
    action: () => true,
  },
  {
    id: 2,
    label: 'Second Item',
    action: () => true,
  },
  {
    id: 2,
    label: 'Third Item',
  },
];

const dataAddress = dataSimple.map((item) => {
  return {
    ...item,
    line1: 'Endereço linha 1',
    line2: 'Endereço linha 2',
  };
});

const dataSwitch = dataSimple.map((item) => {
  return {
    ...item,
    description: 'Lorem ipsum sit dolor',
    active: true,
    toggle: () => true,
  };
});

const dataStatus = dataSimple.map((item) => {
  return {
    ...item,
    status: 'success',
    line1: '24 de Abril, 2020',
    line2: 'Em, conta Santander 222934-4',
  };
});

const dataAccount = [
  {
    icon: 'user',
    label: 'Meus dados',
  },
  {
    icon: 'security',
    label: 'Senha',
  },
  {
    icon: 'list',
    label: 'Especialidades',
  },
  {
    icon: 'map',
    label: 'Localização',
  },
  {
    icon: 'settings',
    label: 'Configurações',
  },
  {
    icon: 'wallet',
    label: 'Recebimentos',
  },
  {
    icon: 'logout',
    label: 'Sair',
  },
];

const dataBox = [
  {
    label: 'Depilação de axilas',
    description: 'Lorem ipsum sit dolor',
  },
  {
    label: 'Depilação de virilia',
    description: 'Amet sir conquetur amen',
  },
];

const dataService = [
  {
    label: 'Depilação de axilas',
    description: 'Lorem ipsum sit dolor',
    qty: 1,
  },
  {
    label: 'Depilação de virilia',
    description: 'Amet sir conquetur amen',
    qty: 2,
  },
];

storiesOf('List', module)
  .addDecorator((getStory) => <StorybookWrapper>{getStory()}</StorybookWrapper>)
  .add('simple item', () => {
    return (
      <List data={dataSimple} renderItem={({ item }) => <Item {...item} />} />
    );
  })
  .add('address item', () => {
    return (
      <List
        data={dataAddress}
        renderItem={({ item }) => <AdressItem {...item} />}
      />
    );
  })
  .add('switch item', () => {
    return (
      <List
        data={dataSwitch}
        renderItem={({ item }) => <SwitchItem {...item} />}
      />
    );
  })
  .add('status item', () => {
    return (
      <List
        data={dataStatus}
        renderItem={({ item }) => <StatusItem {...item} />}
      />
    );
  })
  .add('account item', () => {
    return (
      <List
        data={dataAccount}
        renderItem={({ item }) => <AccountItem {...item} />}
      />
    );
  })
  .add('box item', () => {
    return (
      <List data={dataBox} renderItem={({ item }) => <BoxItem {...item} />} />
    );
  })
  .add('service item', () => {
    return (
      <List
        data={dataService}
        renderItem={({ item }) => <ServiceItem {...item} />}
      />
    );
  });
