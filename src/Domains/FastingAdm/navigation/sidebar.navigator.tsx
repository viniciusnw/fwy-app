import React from 'react';
import { Profile, List, AccountItem } from '@Components';

export default class Sidebar extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  render() {
    return (
      <>
        <Profile
          src={'https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg'}
          name="Frecos Beauty"
          rule="Clínica"
        />
        <List
          data={this.state.data}
          renderItem={({ item }) => <AccountItem {...item} />}
        />
      </>
    );
  }
}
