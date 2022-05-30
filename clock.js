// Analog Clock
let analog_hours = document.querySelector('#analog_hours');
let analog_minutes = document.querySelector('#analog_minutes');
let analog_seconds = document.querySelector('#analog_seconds');

const analog_clock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  analog_hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  analog_minutes.style.transform = `rotateZ(${mm + ss / 12}deg)`;
  analog_seconds.style.transform = `rotateZ(${ss}deg)`;
};

// Digital Clock
let digital_hours = document.querySelector('#digital_hours');
let digital_minutes = document.querySelector('#digital_minutes');
let digital_seconds = document.querySelector('#digital_seconds');
let digital_ampm = document.querySelector('#digital_ampm');

const digital_clock = () => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  digital_ampm.innerHTML = h < 12 ? 'AM' : 'PM';

  // convert 24hr clock to 12hr clock
  if (h > 12) {
    h = h - 12;
  }

  // add zero before single digit number
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  digital_hours.innerHTML = h;
  digital_minutes.innerHTML = m;
  digital_seconds.innerHTML = s;
};

setInterval(() => {
  analog_clock();
  digital_clock();
}, 1000);
