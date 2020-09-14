import moment from 'moment';
import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';
import userSelection from './_multipleUsers';

const clearOutInput = () => {
  $('#inputNewMessage').val('');
};

const addNewMessage = () => {
  const newMessage = {
    id: seedArray.seedData().length + 1,
    // character: userSelection.userSelection(),
    name: userSelection.userSelection(),
    message: $('#inputNewMessage').val(),
    timestamp: moment().format('MMMM Do YYYY, h:mm a'),
  };
  seedArray.seedData().push(newMessage);
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
  clearOutInput();
};

const keyEvent = () => {
  $('#btnSubmit').click(addNewMessage);
  $('#inputNewMessage').on('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addNewMessage();
    }
  });
};

keyEvent();

export default { addNewMessage, keyEvent };
