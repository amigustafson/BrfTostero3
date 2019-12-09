
//Image change over the course of the day.______________________________________
function timeImage(){
  var time = new Date().getHours();
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
//______________________________________________________________________________


//toTopButton___________________________________________________________________
window.addEventListener("scroll", ()=>{
  var scrollDistance = window.scrollY;
  if(scrollDistance > 50){
    document.querySelector("#toTopButton").style.opacity=1
  }
})
window.addEventListener("scroll", ()=>{
  var scrollDistance = window.scrollY;
  if(scrollDistance > 50){
    document.querySelector("#toTopButton2").style.opacity=1
  }
})

//OnClick
function uppFunction(){
  window.scrollTo(0,0)
}
//______________________________________________________________________________
