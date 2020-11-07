const buttonOn = document.querySelector('#sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

buttonOn.addEventListener('click', (event) => {
    event.preventDefault();
    sidebar.classList.toggle('show');
});