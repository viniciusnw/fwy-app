const stories = [
  '../Components/Icon/Icon.stories',
  '../Components/Button/Button.stories',
  '../Components/Input/Input.stories',
  '../Components/List/List.stories',
  '../Components/Header/Header.stories',
  '../Components/Label/Label.stories',
  '../Components/Card/Card.stories',
  '../Components/Profile/Profile.stories',
  '../Components/Navbar/Navbar.stories',
  '../Components/ActionBar/ActionBar.stories',
  '../Components/UserCard/UserCard.stories',
  '../Components/OrderInfo/OrderInfo.stories',
  '../Components/CreditCard/CreditCard.stories',
  '../Components/Wallet/Wallet.stories',
  '../Components/PaymentResume/PaymentResume.stories',
  '../Components/Logo/Logo.stories',
  '../Components/LoginBox/LoginBox.stories',
  '../Components/Fieldset/Fieldset.stories',
  '../Components/Carousel/Carousel.stories',
  '../Components/Specialty/Specialty.stories',
  '../Components/Slider/Slider.stories',
];

function loadStories() {
  require('../Components/Icon/Icon.stories');
  require('../Components/Button/Button.stories');
  require('../Components/Input/Input.stories');
  require('../Components/List/List.stories');
  require('../Components/Header/Header.stories');
  require('../Components/Label/Label.stories');
  require('../Components/Card/Card.stories');
  require('../Components/Profile/Profile.stories');
  require('../Components/Navbar/Navbar.stories');
  require('../Components/ActionBar/ActionBar.stories');
  require('../Components/UserCard/UserCard.stories');
  require('../Components/OrderInfo/OrderInfo.stories');
  require('../Components/CreditCard/CreditCard.stories');
  require('../Components/Wallet/Wallet.stories');
  require('../Components/PaymentResume/PaymentResume.stories');
  require('../Components/Logo/Logo.stories');
  require('../Components/LoginBox/LoginBox.stories');
  require('../Components/Carousel/Carousel.stories');
  require('../Components/Specialty/Specialty.stories');
  require('../Components/Slider/Slider.stories');
}

module.exports = {
  loadStories,
  stories,
};
