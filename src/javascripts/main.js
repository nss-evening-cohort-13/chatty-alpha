import '../styles/main.scss';

import navbar from './components/navbar';
import _displayMessages from './components/_displayMessages';
import seedArray from './data/_seedMessage';
import _clearAllMessages from './components/_clearAllMessages';

const init = () => {
  navbar.renderNavbar();
  _displayMessages.displayMessages(seedArray.seedData());
  _clearAllMessages.clearMessages();
};

init();
