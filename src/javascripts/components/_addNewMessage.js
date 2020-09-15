import moment from 'moment';
// import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const clearOutInput = () => {
  $('#inputNewMessage').val('');
};

const randomId = (min, max) => Math.round(Math.random() * (max - min) + min);

const addNewMessage = () => {
  const newMessage = {
    id: randomId(5, 50000000),
    character: 'ProfFarn$worth9',
    message: $('#inputNewMessage').val(),
    timestamp: moment().format('MMMM Do YYYY, h:mm a'),
  };
  console.warn(randomId(5, 50000000));
  const printNewMessage = [];
  printNewMessage.push(newMessage);
  console.warn(printNewMessage);
  // const printNewMessage = seedArray.seedData().pop;
  $('#messages').append(displayMessages.displayMessages(printNewMessage));
  clearOutInput();
};

const keyEvent = () => {
  // $('#btnSubmit').click(addNewMessage);
  $('#inputNewMessage').on('keypress', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // const printNewMessage = seedArray.seedData().pop;
      // $('#messages').append(displayMessages.displayMessages(printNewMessage));
      addNewMessage();
    }
  });
};

keyEvent();

export default { addNewMessage, keyEvent };
