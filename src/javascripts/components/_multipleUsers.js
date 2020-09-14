import seedData from '../data/_seedMessage';
// import userData from '../data/_userData';

const buildUserDropdown = () => {
  // const user = userData.userData();
  const user = seedData.seedData();
  $('#userSelection').html(`
  <form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select Crew Member</label>
  <select class="custom-select my-1 mr-sm-2" id="selectionUserCrewMember">
    <option value="1">${user[0].name}</option>
    <option value="2">${user[1].name}</option>
    <option value="3">${user[2].name}</option>
    <option value="4">${user[3].name}</option>
    <option value="5">${user[4].name}</option>
  </select>
  <button type="button" id="btnUserSelection" class="btn btn-primary my-1">Submit</button>
</form>`);
};

const userSelection = () => {
  const v = $('option:selected', $('#selectionUserCrewMember')).text();
  console.warn(v);
  return v;
};

// const userValue = () => {
//   $('#btnUserSelection').click(() => {
//     console.warn('clicked');
//     userSelection();
//   });
//   // $('#selectionUserCrewMember option:selected').val();
// };

// userSelection();
// const userName = () => {

// };

export default { buildUserDropdown, userSelection };
