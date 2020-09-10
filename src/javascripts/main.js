import '../styles/main.scss';
import _displayMessages from './components/_displayMessages';
import seedArray from './data/_seedMessage';

const init = () => {
  _displayMessages.displayMessages(seedArray.seedData());
};

init();
