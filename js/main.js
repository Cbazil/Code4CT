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

// Port Button function ========>>>

function portButton1() {
    let portfolio_but1 =
    document.getElementById("port_gal_grid");
    portfolio_but1.style.display = "grid";
    let portfolio_but2 = 
    document.getElementById("port_gal_grid_2");
    portfolio_but2.style.display = "none";
    let portfolio_but3 = 
    document.getElementById("port_gal_grid_3");
    portfolio_but3.style.display = "none";
    // let portfolio_but4 = 
    // document.getElementById("port_gal_grid_4");
    // portfolio_but4.style.display = "none";
}
function portButton2() {
    let portfolio_but1 =
    document.getElementById("port_gal_grid");
    portfolio_but1.style.display = "none";
    let portfolio_but2 =
    document.getElementById("port_gal_grid_2");
    portfolio_but2.style.display = "grid";
    let portfolio_but3 = 
    document.getElementById("port_gal_grid_3");
    portfolio_but3.style.display = "none";
}

function portButton3() {
    let portfolio_but1 =
    document.getElementById("port_gal_grid");
    portfolio_but1.style.display = "none";
    let portfolio_but2 =
    document.getElementById("port_gal_grid_2");
    portfolio_but2.style.display = "none";
    let portfolio_but3 = 
    document.getElementById("port_gal_grid_3");
    portfolio_but3.style.display = "grid";
}
function grid3_height() {
    let grid_height = 
    document.getElementsByClassName("port_gal_grid3");
    grid_height.style.height = "275px";
}
grid_height();
