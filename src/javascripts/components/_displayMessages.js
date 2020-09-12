const displayMessages = (array) => {
  array.forEach((item) => {
    $('#messages').append(
      `<div id="messageContainer">
        <ul id="characterName">${item.character}</ul>
        <ul id="displayMessages">${item.message}</ul>
        <ul id="timestamp">${item.timestamp}</ul>
        <button id="deleteMessage" type="button" class="btn btn-primary btn-lg">Delete Message</button>
    </div>`
    );
  });
};

export default { displayMessages };
