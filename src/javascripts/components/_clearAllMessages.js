const clearMessages = () => {
  $('#clearMssg').on('click', () => $('#messages').remove());
  $('#clearedMssg').html('Bender!');
};

export default { clearMessages };
