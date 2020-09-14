import '../styles/main.scss';

import navbar from './components/navbar';
import seedArray from './data/_seedMessage';
import displayMessages from './components/_displayMessages';
import addMessage from './components/_addNewMessage';
import deleteMessage from './components/_deleteMessage';
import clearAllMessages from './components/_clearAllMessages';
import userSelection from './components/_multipleUsers';

const init = () => {
  navbar.renderNavbar();
  displayMessages.displayMessages(seedArray.seedData());
  userSelection.buildUserDropdown();
  addMessage.keyEvent();
  clearAllMessages.clearMessages();
  deleteMessage.deleteMessage(seedArray.seedData());
  userSelection.userSelection();
};

init();
