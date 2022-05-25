Telegram.WebApp.ready();

const initData = Telegram.WebApp.initData || '';
const initDataUnsafe = Telegram.WebApp.initDataUnsafe || {};

document.querySelector('#greeting').innerHTML = `Hi, ${initDataUnsafe.user.first_name}!`;
document.querySelector('#command').addEventListener('click', () => {
  Telegram.WebApp.sendData('!!!')
})
