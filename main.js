function displayDate() {
  var currentDate = new Date();
  var day = currentDate.getDay(); //numerical weekdays
  var date = currentDate.getDate(); //numerical date
  var month = currentDate.getMonth(); //numerical month
  var year = currentDate.getFullYear(); //full year

  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var name_of_months = ["January", "February", "March",
                        "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
                      ];

  var dayDiv = document.getElementById("day");
  dayDiv.innerText = weekdays[day];

  var dateDiv = document.getElementById("date");
  dateDiv.innerText = name_of_months[month] +" "+ date +" "+ year;
}

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if(hours < 10) {
    hours = "0" + hours;
  }
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  if(seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockDiv = document.getElementById("clock");
  if(hours >= 12) {
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " p.m." ;
  }
  else {
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " a.m." ;
  }
}

function generateNum(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor() {
  document.body.style.color = "rgb(" + generateNum(0,255) + "," + generateNum(0,250) + "," + generateNum(0,255) + ")";
  document.body.style.transition = "all 2s";
  document.body.style.MozTransition = "all 2s";
  document.body.style.WebkitTransition = "all 2s";
}

displayDate();  //display the first time

setInterval(displayTime,1000);
setInterval(generateColor,3000);
setInterval(displayDate,(60*60*24)*1000);
