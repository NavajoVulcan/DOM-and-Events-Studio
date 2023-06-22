// Write your JavaScript code here.
// Remember to pay attention to page loading!
//comment
//kk
window.addEventListener('load', function() {
let takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener('click', function() {
let isReadyToLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
if (isReadyToLaunch){
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerText = "Shuttle in flight.";

    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    shuttleFlightScreen.setAttribute("style", "background-color: blue");

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerText = "10000";
};
});
let landingButton = document.getElementById("landing");
landingButton.addEventListener('click', function(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerText = "The shuttle has landed.";

    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    shuttleFlightScreen.setAttribute("style", "background-color: green");

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerText = "0";
})

let abortMissionButton = this.document.getElementById("missionAbort");
abortMissionButton.addEventListener('click', function(){
   let confirmAbortMission =  window.confirm("Confirm you want to abort the mission.")

   if(confirmAbortMission) {
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerText = "Mission Aborted.";

    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    shuttleFlightScreen.setAttribute("style", "background-color: green");

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.innerText = "0";
   }
});

let rocketIcon = this.document.getElementById("rocket");
let upButton = this.document.getElementById("up");
let top = 0;
let left = 0;

upButton.addEventListener('click', function() {

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeightVariable = Number(shuttleHeight.innerText);
    shuttleHeightVariable += 10000;
    shuttleHeight.innerText = shuttleHeightVariable;
    top -= 10;
    document.getElementById("rocket").style.top = (top - 10) + "px";
});

let downButton = this.document.getElementById("down");
downButton.addEventListener('click', function() {

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleHeightVariable = Number(shuttleHeight.innerText);
    shuttleHeightVariable -= 10000;
    shuttleHeight.innerText = shuttleHeightVariable;
    top += 10;
    document.getElementById("rocket").style.top = (top - 10) + "px";
});

let leftButton = this.document.getElementById("left");
leftButton.addEventListener('click', function() {
    left -= 10;
    document.getElementById("rocket").style.left = (left - 10) + "px";
});

let rightButton = this.document.getElementById("right");
rightButton.addEventListener('click', function() {
    left += 10;
    document.getElementById("rocket").style.left = (left - 10) + "px";
});
});