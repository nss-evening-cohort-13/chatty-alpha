import moment from 'moment';
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
    timestamp: moment().format('MMMM Do YYYY, h:mm a'),
  };
  seedArray.seedData().push(newMessage);
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
  clearOutInput();
  console.warn('data', seedArray.seedData());
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

const sortMessages = (array) => {
  // if (a > b) {
  //   return -1;
  // }
  // if (a < b) {
  //   return 1;
  // }
  // array.sort((a, b) => b.timestamp - a.timestamp);
  const sortedArray = array.sort((a, b) => moment(a.timestamp).format('YYYYMMDD') - moment(b.timestamp).format('YYYYMMDD'));
  console.warn(sortedArray);
};
console.warn(sortMessages(seedArray.seedData()));

keyEvent();
sortMessages(seedArray.seedData());

export default { addNewMessage, keyEvent };
