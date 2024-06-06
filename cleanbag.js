var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
console.log(is_mobile);


if (is_mobile === true) {
  alert(`You're on mobile.`); 
  window.location.href = "menu.html";
} else {
  //alert(`You're not on mobile.`);
}


let timeS = {
  second: 0,
  seconds: 0,
  minute: 0,
  minutes: 0
};

let co2 = 416;

timeLoop();

function timeLoop () {
  setTimeout(time, 1000);
}

function time () {
  timeS.second = timeS.second + 1;
  console.log(timeS)

  if (timeS.second === 10) {
    timeS.second = 0;
    timeS.seconds = timeS.seconds + 1;
  
  } else if (timeS.seconds === 6) {
    timeS.seconds = 0;
    timeS.minute = timeS.minute +1;
  } else if (timeS.minute === 10) {
    timeS.minute = 0;
    timeS.minutes = timeS.minutes +1;
  };

  document.getElementById("second").innerHTML = `${timeS.second}`;
  document.getElementById("seconds").innerHTML = `${timeS.seconds}`;
  document.getElementById("minute").innerHTML = `${timeS.minute}:`;
  document.getElementById("minutes").innerHTML = `${timeS.minutes}`;

  co2 = co2 + 416;
  document.getElementById("co2").innerHTML = `${co2 / 1000}`;

  timeLoop();

 /* if (timeS === 60) {
  timeS = timeS / 60;
  alert(`you've spent a total of ${timeS} minutes.`);
  
};
*/
};