import React from 'react';
import { Profile, List, AccountItem } from '@Components'
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default class Sidebar extends React.Component<DrawerContentComponentProps, any> {

  constructor(props) {
    super(props);
    this.state = {
      dataAccount: [
        {
          icon: 'user',
          label: 'Meus dados',
        },
        {
          icon: 'security',
          label: 'Senha',
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
          label: 'Carteira',
        },
        {
          icon: 'logout',
          label: 'Sair',
        },
      ]
    }
    console.log('Sidebar=>constructor: ', this.props)
  }

  render() {
    const { dataAccount } = this.state
    return (
      <>
        <Profile src={'https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg'} name={'Vinicius'} rule={'Inacio'} />
        <List data={dataAccount} renderItem={({ item }) => <AccountItem {...item} />} />
      </>
    )
  }
}
