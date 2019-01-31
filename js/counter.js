/* ========= Counter functionality | Start ======== */
'use strict'
var countOfCoffee=0;
var countOfGirls=0;
var countOfProjects=0;
var countOfHours=0;


var cupsOfCoffee=document.getElementById("cupsOfCoffee");
var numberOfGirls=document.getElementById("numberOfGirls");
var projectsCompleted=document.getElementById("projectsCompleted");
var hoursOfCode=document.getElementById("hoursOfCode");

var timer = setInterval (function(){
    cupsOfCoffee.innerHTML=countOfCoffee;
    numberOfGirls.innerHTML=countOfGirls;
    projectsCompleted.innerHTML=countOfProjects;
    hoursOfCode.innerHTML=countOfHours;

    if (countOfCoffee===3000) {
        clearInterval (timer);
        cupsOfCoffee.innerHTML="3000+";
        numberOfGirls.innerHTML="780+";
        projectsCompleted.innerHTML="3120+";
        hoursOfCode.innerHTML="8765+";
    }
    countOfCoffee+=10;
    countOfGirls+=2;
    countOfProjects+=10;
    countOfHours+=30;
    },
);