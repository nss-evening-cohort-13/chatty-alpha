import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const deleteMessage = (array) => {
  $('body').on('click', '.deleteMessage', (e) => {
    const target = e.target.id;
    console.warn(e);
    array.splice(target, 1);
    console.warn(seedArray.seedData());
    $('#messages').html('');
    displayMessages.displayMessages(seedArray.seedData());
  });
};

export default { deleteMessage };
