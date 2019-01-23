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
1);


// /* =========== JQuery | Start =========== */
// $('.counter').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

// $('.counter').counterUp({
//     delay: 10,
//     time: 2000
//   });
//   $('.counter').addClass('animated fadeInDownBig');
//   $('h3').addClass('animatedfadeIn');

/* =========== JQuery | End =========== */
// Smooth scroll up =====>>>
const btn = document.getElementById('scroll_up');

btn.addEventListener('click', () => window.scrollTo({
  top: 10,
  behavior: 'smooth',
}));

// <<========================

    // document.getElementById('searchBar').onsubmit = function() {
    //     window.location = 'http://www.google.com/search?q=site:yoursitename.com ' + document.getElementById('txtSearch').value;
    //     return false;
    // }

