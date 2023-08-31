
const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const loginButton = document.querySelector('.nav-list li:last-child a');

loginButton.addEventListener('click', () => {
    // 在這裡處理登入按鈕的行為，例如顯示登入視窗
});
