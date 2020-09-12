import _seedMessage from '../data/_seedMessage';

const clearMessages = () => {
  if (_seedMessage.seedData().length === 0) {
    $('#clearBtn').attr('disabled', true);
  } else {
    $('#clearBtn').on('click', () => $('#messages').remove());
    $('#clearedMssg').html('Bender!');
  }
};

export default { clearMessages };
