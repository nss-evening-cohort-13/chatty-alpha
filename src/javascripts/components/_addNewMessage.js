import seedArray from '../data/_seedMessage';
import _displayMessages from './_displayMessages';

// const clearOutInput = () => {

// };

const addNewMessage = () => {
  const newMessage = {
    id: seedArray.seedData().length + 1,
    character: 'ProfFarn$worth9',
    message: $('#inputNewMessage').val(),
    // timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
  };
  // clearOutInput();
  seedArray.seedData().push(newMessage);
  _displayMessages.displayMessages(seedArray.seedData());
  console.log('data', seedArray.seedData());
};

const keyEvent = () => {
  $('#btnSubmit').click(addNewMessage);
};

export default { addNewMessage, keyEvent };
