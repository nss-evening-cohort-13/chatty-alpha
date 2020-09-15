import seedArray from '../data/_seedMessage';
import displayMessages from './_displayMessages';

// const removeMessage = (id) => {
//   seedArray.seedData().splice(id - 1, 1);
// };

// const deleteMessage = () => {
//   $('body').on('click', 'button', (e) => {
//     const arr = e.target.id.split('-');
//     if (arr[0] === 'deleteMessage') {
//       const index = seedArray.seedData().findIndex(
//         (message) => message.id === arr[1]
//       );
//       removeMessage(index);
//       $(`#message-${arr[1]}`).remove();
//     }
//   });
// };

// const deleteMessage = (array, item) => {
//   $('.deleteMessage').on('click', (e) => {
//     $(`.message-${item.id}`).remove(e.target.id);
//   });
//   // $(`#deleteMessage-${item.id}`).on('click', () => {
//   //   $(`#message-${item.id}`).remove();
//   //   array.splice(`#message-${item.id}`, 1);
//   // });
// };

// const deleteMessage = (id) => {
//   $('body').on('click', '.deleteMessage', (e) => {
//     console.warn('e', e);
//     const target = e.target.id;
//     const splitTarget = target.split('-');
//     const mssgId = splitTarget[1];
//     seedArray.seedData().splice(id.mssgId, 1);
//     // $(`#message-${mssgId}`).remove();
//     console.warn('target', target);
//     // seedArray.seedData().splice(mssgId, 1);
//     console.warn(seedArray.seedData());
//     $('#messages').html('');
//     displayMessages.displayMessages(seedArray.seedData());
//   });
// };

// const deleteMessage = () => {
//   $('body').on('click', '.deleteMessage', (e) => {
//     const target = e.target.id;
//     for (let i = 0; i < seedArray.seedData().length; i += 1) {
//       if (target === `deleteMessage-${[i]}`) {
//         seedArray.seedData().splice(target, 1);
//       }
//     }
//   });
// };

const deleteMessage = () => {
  $('body').on('click', '.deleteMessage', (e) => {
    console.warn('e', e);
    const target = e.target.id;
    const splitTarget = target.split('-');
    const mssgId = splitTarget[1];
    $(`#message-${mssgId}`).remove();
    console.warn('target', target);
    // seedArray.seedData().splice(target, 1);
    console.warn(seedArray.seedData());
  });
  $('#messages').html('');
  displayMessages.displayMessages(seedArray.seedData());
};

// const deleteMessage = (array) => {
//   $('body').on('click', '.deleteMessage', (e) => {
//     console.warn('e', e);
//     const target = e.target.id;
//     console.warn('target', target);
//     array.splice(target, 1);
//     $('#messages').html('');
//     displayMessages.displayMessages(seedArray.seedData());
//   });
// };

// const deleteFunction = (e) => {
//   const target = e.target.id;
//   console.warn('target', target);
//   for (let i = 0; i < seedArray.seedData().length; i += 1) {
//     if (target === `deleteMessage-${[i]}`) {
//       seedArray.seedData().splice(target, 1);
//     }
//     $('#messages').html('');
//     displayMessages.displayMessages(seedArray.seedData());
//   // seedArray.seedData().forEach((id) => {
//   //   if (target === `deleteMessage-${[id]}`) {
//   //     seedArray.seedData().splice(target, 1);
//   //     console.warn('array', seedArray.seedData());
//   //     $('#messages').html('');
//   //     displayMessages.displayMessages(seedArray.seedData());
//   //   }
//   // });
//   }
// };

// const deleteMessage = (array) => {
//   $('body').on('click', '.deleteMessage', (e) => {
//     console.warn('e', e);
//     const target = e.target.id;
//     console.warn('target', target);
//     for (let i = 0; i < array.length; i += 1) {
//       if (target === `deleteMessage-${[i]}`) {
//         // array.splice(`message-${i}`, 1);
//         $(`#message-${i.id}`).remove();
//         console.warn(seedArray.seedData());
//       }
//     // array.splice(target, 1);
//     }
//     $('#messages').html('');
//     displayMessages.displayMessages(seedArray.seedData());
//   });
// };

export default { deleteMessage };
