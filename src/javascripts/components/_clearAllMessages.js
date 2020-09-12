import _seedMessage from '../data/_seedMessage';

const clearMessages = () => {
  if (_seedMessage.seedData().length === 0) {
    $('#clearBtn').attr('disabled', true);
  } else {
    $('#clearBtn').on('click', () => {
      $('#messages').empty();
      _seedMessage.seedData().length = 0;
      $('#clearedMssg').html('Bender!');
    });
  }
};

export default { clearMessages };
