const displayMessages = () => {
  const domString = $('#messages').html(
    `<div id="messageContainer">
        <ul id="displayMessages"></ul>
        <button id="deleteMessage" type="button" class="btn btn-primary btn-lg">Delete Message</button>
    </div>`
  );
  return domString;
};

export default { displayMessages };
