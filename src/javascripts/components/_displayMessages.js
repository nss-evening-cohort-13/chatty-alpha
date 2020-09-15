const displayMessages = (array) => {
  array.forEach((item) => {
    $('#messages').append(
      `<div id="message-${item.id}">
        <ul id="characterName">${item.character}</ul>
        <ul id="displayMessages">${item.message}</ul>
        <ul id="timestamp">${item.timestamp}</ul>
        <button id="deleteMessage-${item.id}" type="button" class="deleteMessage btn btn-primary btn-lg">Delete Message</button>
      </div>`
    );
  });
};

// const displayNewMessage = (array) => {
//   $('#messages').append(
//     `<div id="message-${item.id}">
//       <ul id="characterName">${item.character}</ul>
//       <ul id="displayMessages">${item.message}</ul>
//       <ul id="timestamp">${item.timestamp}</ul>
//       <button id="deleteMessage-${item.id}" type="button" class="deleteMessage btn btn-primary btn-lg">Delete Message</button>
//     </div>`
// )};

export default { displayMessages };
