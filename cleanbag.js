var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
console.log(is_mobile);


if (is_mobile === true) {
  alert(`You're on mobile.`) 
} else {
  alert(`You're not on mobile.`)
}


let timeS = 0;
timeLoop();

function timeLoop () {
  setTimeout(time, 1000);
}

function time () {
  timeS = timeS + 1;
  console.log(timeS);
  timeLoop();

 /* if (timeS === 60) {
  timeS = timeS / 60;
  alert(`you've spent a total of ${timeS} minutes.`);
  
};
*/
};