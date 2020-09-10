const renderNavbar = () => {
  const domString = $('#navbarContainer').html(`
    <div class="fixed-top">
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
            <img src="https://i.ibb.co/jWYxkc9/futurama.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            Planet Express Chat
            </a>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Enter message..." aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Enter Message</button>
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Clear</button>
            </form>
        </nav>
    </div>
    `);

  return domString;
};

export default { renderNavbar };
