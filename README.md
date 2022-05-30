# Clock

- Design using HTML, CSS & JavaScript

## Use css value from html

- On html, `<span style="--i:1;"><b>1</b></span>`

- On css, `transform: rotate(calc(30deg * var(--i)));`

## Analog Clock

- On `index.html`

  - ```html
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Clock</title>
      </head>
      <body>
        <div class="container">
          <div class="clock">
            <div class="circle" id="analog_seconds" style="--clr:#04fc43;">
              <i></i>
            </div>
            <div
              class="circle circle2"
              id="analog_minutes"
              style="--clr:#fee800;"
            >
              <i></i>
            </div>
            <div
              class="circle circle3"
              id="analog_hours"
              style="--clr:#ff2972;"
            >
              <i></i>
            </div>
            <span style="--i:1;"><b>1</b></span>
            <span style="--i:2;"><b>2</b></span>
            <span style="--i:3;"><b>3</b></span>
            <span style="--i:4;"><b>4</b></span>
            <span style="--i:5;"><b>5</b></span>
            <span style="--i:6;"><b>6</b></span>
            <span style="--i:7;"><b>7</b></span>
            <span style="--i:8;"><b>8</b></span>
            <span style="--i:9;"><b>9</b></span>
            <span style="--i:10;"><b>10</b></span>
            <span style="--i:11;"><b>11</b></span>
            <span style="--i:12;"><b>12</b></span>
          </div>
        </div>
        <script src="clock.js"></script>
      </body>
    </html>
    ```

- On `style.css`

  - ```css
    :root {
      --main-bg-color: #2f363e;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: var(--main-bg-color);
    }
    .container {
      position: relative;
      border-radius: 20px;
      border-top-left-radius: 225px;
      border-top-right-radius: 225px;
      background: var(--main-bg-color);
      box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75), 10px 10px 70px rgba(0, 0, 0, 0.25),
        inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2),
        inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .clock {
      position: relative;
      width: 450px;
      height: 450px;
      background: var(--main-bg-color);
      border-radius: 50%;
      box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5),
        inset 5px 5px 20px rgba(255, 255, 255, 0.2), inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }
    .clock::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: var(--main-bg-color);
      border: 3px solid #fff;
      border-radius: 50%;
      z-index: 100000;
    }
    .clock span {
      position: absolute;
      inset: 20px;
      color: #fff;
      text-align: center;
      transform: rotate(calc(30deg * var(--i)));
    }
    .clock span b {
      font-size: 2em;
      opacity: 0.25;
      font-weight: bold;
      display: inline-block;
      transform: rotate(calc(-30deg * var(--i)));
    }
    .circle {
      position: absolute;
      width: 300px;
      height: 300px;
      border: 2px solid rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      z-index: 10;
    }
    .circle i {
      position: absolute;
      width: 6px;
      height: 50%;
      background: var(--clr);
      opacity: 0.75;
      transform-origin: bottom;
      transform: scaleY(0.5);
    }
    .circle:nth-child(1) i {
      width: 2px;
    }
    .circle:nth-child(2) i {
      width: 6px;
    }
    .circle2 {
      width: 240px;
      height: 240px;
      z-index: 9;
    }
    .circle3 {
      width: 180px;
      height: 180px;
      z-index: 8;
    }
    .circle::before {
      content: '';
      position: absolute;
      top: -8.5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--clr);
      box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
    }
    ```

- On `clock.js`

  - ```js
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

    setInterval(() => {
      analog_clock();
    }, 1000);
    ```

## Digital Clock

- On `index.html`

  - ```html
    ...
    <div id="time">
      <div id="digital_hours" style="--clr:#ff2972;">00</div>
      <div id="digital_minutes" style="--clr:#fee800;">00</div>
      <div id="digital_seconds" style="--clr:#04fc43;">00</div>
      <div id="digital_ampm" style="--clr:#fff;">AM</div>
    </div>
    ...
    ```

- On `style.css`

  - ```css
    .container {
      ...
      flex-direction: column;
    }
    ...
    #time {
      margin-bottom: 40px;
      display: flex;
      padding: 10px 20px;
      font-weight: bold;
      border: 2px solid rgba(0,0,0,0.5);
      border-radius: 40px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.5),
      inset 5px 5px 20px rgba(255,255,255,0.2),
      inset -5px -5px 15px rgba(0,0,0,0.75);
    }
    #time div {
      position: relative;
      width: 60px;
      text-align: center;
      font-weight: bold;
      color: var(--clr);
    }
    #time div:nth-child(1)::after,
    #time div:nth-child(2)::after {
      content: ':';
      position: absolute;
      right: -2px;
    }
    #time div:last-child {
      font-size: 0.6em;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @keyframes animate {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
    #time div:nth-child(2)::after {
      animation: animate 1s steps(1) infinite;
    }
    ```

- On `clock.js`

  - ```js
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
      digital_clock();
    }, 1000);
    ```
