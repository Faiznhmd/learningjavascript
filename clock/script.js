const body = document.querySelector('body');
const hourhand = document.querySelector('.hour');
const minhand = document.querySelector('.min');
const sechand = document.querySelector('.sec');
const modeSwitch = document.querySelector('.mode_switch');

// button--
modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const upDateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
  minToDeg = (date.getMinutes() / 60) * 360;
  hourToDeg = (date.getHours() / 12) * 360;
  console.log(secToDeg);

  sechand.style.transform = `rotate(${secToDeg}deg)`;
  minhand.style.transform = `rotate(${minToDeg}deg)`;
  hourhand.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(upDateTime, 1000);
