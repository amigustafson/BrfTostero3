//HOME PAGE

//Image change over the course of the day.

var time = new Date().getHours();

function timeImage(){
  //morning: 0500-1000
  if (5 <= time && time < 10){
    document.getElementById("front-img").src="imgs/morning.png";
     console.log(time + "morning");
  }
  //day: 1000-1500
  else if (10 <= time && time < 15) {
    document.getElementById("front-img").src="imgs/day.png";
    console.log(time + "day");
  }
  //evening: 1500-2000
  else if (15 <= time && time < 20){
    document.getElementById("front-img").src="imgs/evening.png";
    console.log(time + "evening");

  }
  //night: 2000-2400
  else {
    document.getElementById("front-img").src="imgs/night.png";
    console.log(time + "night");
  }
}
timeImage(time);

//UppKnapp

function uppFunction(){
  document.documentElement.scrollTop = 0;//alla browsers utom Safari
  document.body.scrollTop = 0;//Safari
}
