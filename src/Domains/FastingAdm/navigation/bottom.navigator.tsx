import React from 'react';
import { Text } from 'react-native';
import {
  Navbar,
  ActionBar,
  ActionBarWrapperSingle,
  ActionBarWrapperDouble,
  PriceResume,
  Button,
} from '@Components';

export default class BottomBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          icon: 'calendar',
          label: 'Agenda',
          onPress: this.goCalendar.bind(this),
          primary: false,
        },
        {
          icon: 'wallet',
          label: 'Carteira',
          onPress: this.goWallet.bind(this),
          primary: true,
        },
        {
          icon: 'list',
          label: 'Histórico',
          onPress: this.goHistory.bind(this),
          primary: false,
        },
      ],
    };
  }

  goCalendar() {
    const { navigation } = this.props;
    navigation.navigate('calendar', {});
  }

  goWallet() {
    const { navigation } = this.props;
    navigation.navigate('wallet', {});
  }

  goHistory() {
    const { navigation } = this.props;
    navigation.navigate('history', {});
  }

  render() {
    const { menu } = this.state;
    const { type, text = 'Avançar', label, description, onPress } = this.props;

    if (type == 'action-bar')
      return (
        <ActionBar>
          {label && description ? (
            <ActionBarWrapperDouble>
              <PriceResume label={label} description={description} />
              <Button onPress={onPress} color="black">
                <Text>{text}</Text>
              </Button>
            </ActionBarWrapperDouble>
          ) : (
            <ActionBarWrapperSingle>
              <Button onPress={onPress} color="black">
                <Text>{text}</Text>
              </Button>
            </ActionBarWrapperSingle>
          )}
        </ActionBar>
      );

    if (type == 'nav-bar') return <Navbar items={menu} />;

    return null;
  }
}
