import '../styles/main.scss';

import navbar from './components/navbar';
import seedArray from './data/_seedMessage';
import _displayMessages from './components/_displayMessages';
import addMessage from './components/_addNewMessage';

const init = () => {
  navbar.renderNavbar();
  _displayMessages.displayMessages(seedArray.seedData());
  addMessage.keyEvent();
};

init();
