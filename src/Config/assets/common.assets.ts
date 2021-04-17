const visa = require('./icons/visa.png');
const mastercard = require('./icons/mastercard.png');
const santander = require('./icons/santander.png');

const primary = require('./img/bg.png');
const secondary = require('./img/bg2.png');
const tertiary = require('./img/bg3.png');

import Logo from './svg/logo.svg';
import LogoWhite from './svg/logo-white.svg';
import Asset9 from './svg/Asset9.svg';
import Asset10 from './svg/Asset10.svg';
import Asset11 from './svg/Asset11.svg';
import Asset12 from './svg/Asset12.svg';
import Asset13 from './svg/Asset13.svg';
import Bagde from './svg/bagde.svg';
import BagdeLocked from './svg/bagde-locked.svg';
import Ribbon from './svg/ribbon.svg';
import RibbonFull from './svg/ribbon_full.svg';

const icons = {
  visa,
  mastercard,
  santander,
};

const svgs = {
  Logo,
  LogoWhite,
  Bagde,
  BagdeLocked,
  Ribbon,
  RibbonFull,
  Emotes: {
    Asset9,
    Asset10,
    Asset11,
    Asset12,
    Asset13,
  }
}

const backgrounds = {
  primary,
  secondary,
  tertiary
}

export { icons, svgs, backgrounds };
