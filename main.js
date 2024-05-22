const linksBtn = document.getElementById('all-links-btn');
const hiddenModal = document.getElementById('links');

linksBtn.addEventListener('click', () => {
  console.log('clicked');
  hiddenModal.classList.display = 'flex';
});
