import moment from 'moment';
import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const clearOutInput = () => {
  $('#inputNewMessage').val('');
};

function addNewMessage(e) {
  const messageValue = $('#inputNewMessage').val();
  if (messageValue === '') {
    $('#errorMessage').html('<p>You must enter a message</p>');
    e.preventDefault();
  } else {
    $('#errorMessage').html('');
  }
  const newMessage = {
    id: seedArray.seedData().length + 1,
    character: 'ProfFarn$worth9',
    message: $('#inputNewMessage').val(),
    timestamp: moment().format('MMMM Do YYYY, h:mm a'),
  };
  seedArray.seedData().push(newMessage);
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
  clearOutInput();
}

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
