const dot = document.querySelector('.dot');
const alertBox = document.querySelector('.alert-box');
const alertButton = document.querySelector('.alert-button');


// close alert box
function displayNone() {
  alertBox.style.display = 'none';
}

alertButton.addEventListener('click', (e) => {
  alertBox.style.opacity = '0';
  setTimeout(displayNone, 1000);
  dot.style.display = 'none';
});
