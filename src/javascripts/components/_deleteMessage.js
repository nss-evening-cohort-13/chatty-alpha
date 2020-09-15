import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

const deleteMessage = () => {
  $('body').on('click', '.deleteMessage', (e) => {
    const target = e.target.id;
    const splitTarget = target.split('-');
    const mssgId = splitTarget[1];
    $(`#message-${mssgId}`).remove();
  });
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
};

export default { deleteMessage };
