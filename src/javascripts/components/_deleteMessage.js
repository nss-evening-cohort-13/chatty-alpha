import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const deleteMessage = (array) => {
  $('body').on('click', '.deleteMessage', (e) => {
    const target = e.target.id;
    array.splice(target, 1);
    $('#messages').html('');
    displayMessages.displayMessages(seedArray.seedData());
  });
};

export default { deleteMessage };
