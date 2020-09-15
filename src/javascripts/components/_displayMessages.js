const displayMessages = (array) => {
  array.forEach((item, id) => {
    $('#messages').append(
      `<li id="messageContainer" class="card" style="width: 35rem;">
          <ul id="characterName">${item.character}</ul>
          <ul id="displayMessages">${item.message}</ul>
          <ul id="timestamp">${item.timestamp}</ul>
          <button id="deleteMessage-${id}" type="button" class="deleteMessage btn btn-primary btn-lg">Delete Message</button>
    </li>`
    );
  });
};

export default { displayMessages };
