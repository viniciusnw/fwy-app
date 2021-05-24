import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const setIcon = (icon, props) => {
  switch (icon) {
    case 'left':
      return <AntDesign name="left" {...props} />;
    case 'right':
      return <AntDesign name="right" {...props} />;
    case 'more':
      return <Entypo name="dots-three-vertical" {...props} />;
    case 'menu':
      return <Feather name="menu" {...props} />;
    case 'list':
      return <Ionicons name="ios-list" {...props} />;
    case 'calendar':
      return <AntDesign name="calendar" {...props} />;
    case 'plus':
      return <Entypo name="plus" {...props} />;
    case 'wallet':
      return <MaterialIcons name="attach-money" {...props} />;
    case 'user':
      return <Feather name="user" {...props} />;
    case 'security':
      return <Feather name="lock" {...props} />;
    case 'map':
      return <Feather name="map-pin" {...props} />;
    case 'settings':
      return <Feather name="settings" {...props} />;
    case 'logout':
      return <AntDesign name="logout" {...props} />;
    case 'creditcard':
      return <MaterialIcons name="credit-card" {...props} />;
    case 'facebook-square':
      return <AntDesign name="facebook-square" {...props} />;
    case 'googleplus':
      return <AntDesign name="googleplus" {...props} />;
    case 'instagram':
      return <AntDesign name="instagram" {...props} />;
    case 'user-circle':
      return <FontAwesome name="user-circle" {...props} />;
    case 'info':
      return <MaterialIcons name="info" {...props} />;
    case 'timer':
      return <MaterialIcons name="timer" {...props} />;
    case 'pencil':
      return <MaterialCommunityIcons name="pencil-minus-outline" {...props} />;
    case 'gear':
      return <EvilIcons name="gear" {...props} />;
    case 'upload':
      return <AntDesign name="upload" {...props} />;
    case 'camera':
      return <AntDesign name="camera" {...props} />;
    case 'chat':
      return <Ionicons name="md-chatbubbles-outline" {...props} />;
    case 'home':
      return <Entypo name="home" {...props} />;
    case 'send':
      return <Feather name="send" {...props} />;
    default:
      return null;
  }
};

const Icon = ({ icon, ...props }) => {
  return setIcon(icon, props);
};

export default Icon;
