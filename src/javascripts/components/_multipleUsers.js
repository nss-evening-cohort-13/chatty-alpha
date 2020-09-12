const buildUserDropdown = () => {
  $('#userSelection').html(`
  <form class="form-inline">
  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select Crew Member</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>Bender B. Rodriguez</option>
    <option value="1">Philip J. Fry</option>
    <option value="2">Turanga Leela</option>
    <option value="3">Dr. John Zoidberg</option>
    <option value="4">Hubert Farnsworth</option>
  </select>

  <button type="submit" class="btn btn-primary my-1">Submit</button>
</form>`);
};

export default { buildUserDropdown };
