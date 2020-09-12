import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const clearOutInput = () => {
  $('#inputNewMessage').val('');
};

const addNewMessage = () => {
  const newMessage = {
    id: seedArray.seedData().length + 1,
    character: 'ProfFarn$worth9',
    message: $('#inputNewMessage').val(),
    // timestamp: currentTime.toString,
  };
  seedArray.seedData().push(newMessage);
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
  clearOutInput();
  console.warn('data', seedArray.seedData());
};

const keyEvent = () => {
  // $('#btnSubmit').click(addNewMessage);
  $('#inputNewMessage').on('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('enter clicked');
      addNewMessage();
    }
  });
};

const m = moment();
console.warn(m.toString());

keyEvent();

export default { addNewMessage, keyEvent };
