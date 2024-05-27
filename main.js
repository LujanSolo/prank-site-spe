document.addEventListener('DOMContentLoaded', function () {
  const offcanvas = document.getElementById('offcanvasDarkNavbar');
  const links = document.querySelectorAll('.nav-link');
  const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      // Remove active-link class from all links
      links.forEach(l => l.classList.remove('active'));

      // Add active-link class to the clicked link
      event.currentTarget.classList.add('active');

      // Close the offcanvas
      bsOffcanvas.hide();
    });
  });
});
