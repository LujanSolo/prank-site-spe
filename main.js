document.addEventListener('DOMContentLoaded', function () {
  const offcanvas = document.getElementById('offcanvasDarkNavbar');
  const links = document.querySelectorAll('.nav-link');
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      // Remove active-link class from all links
      links.forEach(l => l.classList.remove('active-link'));

      // Add active-link class to the clicked link
      event.currentTarget.classList.add('active-link');

      // Close the offcanvas
      bsOffcanvas.hide();
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const offcanvas = document.getElementById('offcanvasDarkNavbar'); // Get the offcanvas element by ID
  const links = document.querySelectorAll('.nav-link'); // Select all nav links with class .nav-link
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvas); // Initialize Bootstrap offcanvas


  links.forEach(link => {
    link.addEventListener('touchend', function(event) {
      links.forEach(l => l.classList.remove('active-link'));

    // Add active-link class to the clicked link
    event.currentTarget.classList.add('active-link');

    // Close the offcanvas
    bsOffcanvas.hide();
    })
  })
  
});
