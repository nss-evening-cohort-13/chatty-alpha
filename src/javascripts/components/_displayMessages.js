const displayMessages = (array) => {
  array.forEach((item, id) => {
    $('#messages').append(
      `<div id="messageContainer">
        <ul id="characterName">${item.name}</ul>
        <ul id="displayMessages">${item.message}</ul>
        <ul id="timestamp">${item.timestamp}</ul>
        <button id="deleteMessage-${id}" type="button" class="deleteMessage btn btn-primary btn-lg">Delete Message</button>
    </div>`
    );
  });
};

export default { displayMessages };
