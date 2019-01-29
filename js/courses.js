let coursesDiv = document.getElementById("course_sec_grid");

// Create an array of objects representing posts.

let courses = [
    {
        courseName : "Intro to Coding: Web Pages",
        courseDiscription : "Code a simple one-page website using HTML and JQuery.",
        courseDuration : " Duration: 3 hours",
        coursePrice : "Price: R250",
        coursePush : "Take Course",
    },
    {
        courseName : "Intro to Coding: Music",
        courseDiscription : "Code a song using SonicPi software on a Raspberry Pi computer.",
        courseDuration : "Duration 3 hours",
        coursePrice : "Price:  R250", 
        coursePush : "Take Course",
    },
    {
        courseName : "Intro to Coding: Animation",
        courseDiscription : "Create a 2D animation using coding language JavaScript.",
        courseDuration : "Duration: 3 hours",
        coursePrice : "Price: R250",
        coursePush : "Take Course",
    },
    {
        courseName : "Create with Code: Web Pages",
        courseDiscription : "Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery.",
        courseDuration : "Duration: 3 days",
        coursePrice : "Price: R960", 
        coursePush : "Take Course",
    },
    {
        courseName : "Create with Code: Music",
        courseDiscription : "Learn computer science principles by coding music with a Raspberry Pi computer.",
        courseDuration : "Duration: 3 days",
        coursePrice : "Price: R960", 
        coursePush : "Take Course",
    },
    {
        courseName : "Create with Code: Animation",
        courseDiscription : "Learn computer science principles by coding animations using JavaScript.",
        courseDuration : "Duration: 3 days",
        coursePrice : "Price: R960",
        coursePush : "Take Course",
    },
    {
        courseName : "Getting started as a developer",
        courseDiscription : "Learn how to set up a development environment and practical skills to start coding.",
        courseDuration : "Duration: 3 hours",
        coursePrice : "Price: R250", 
        coursePush : "Take Course",
    }
];

// Add a Dom Structure for each post.
courses.forEach(function(course) {
    let courseDiv = document.createElement("div");
    let courseNameDiv = document.createElement("div");
    let courseDescriptionDiv = document.createElement("div");
    let courseDurationDiv = document.createElement("div");
    let coursePriceDiv = document.createElement("div");
    let coursePushDiv = document.createElement("button");

    courseNameDiv.innerHTML = course.courseName;
    courseDescriptionDiv.innerHTML = course.courseDiscription;
    courseDurationDiv.innerHTML = course.courseDuration;
    coursePriceDiv.innerHTML = course.coursePrice;
    coursePushDiv.innerHTML = course.coursePush;

    // Set CSS classes on each div so they can be styled.
    courseDiv.setAttribute("class", "course_Grid");
    courseNameDiv.setAttribute("class","course_name");
    courseDescriptionDiv.setAttribute("class", "course_des");
    courseDurationDiv.setAttribute("class", "course_dur");
    coursePriceDiv.setAttribute("class", "course_price");
    coursePushDiv.setAttribute("class", "course_but");

    

    // Assemble the post div
    courseDiv.appendChild(courseNameDiv);
    courseDiv.appendChild(courseDescriptionDiv);
    courseDiv.appendChild(courseDurationDiv);
    courseDiv.appendChild(coursePriceDiv);
    courseDiv.appendChild(coursePushDiv);

    // Add the post div to the container for posts.
    coursesDiv.appendChild(courseDiv);

});

let cartDiv = document.getElementById("cart_sec");


// Add course to cart
let addToCart = {
    addCourseName : "",
    addCoursePrice : ""
};

// courses[0] = "course1";


let courseOne = Object.create(addToCart);
courseOne.addCourseName = courses[0].courseName;
courseOne.addCoursePrice = courses[0].coursePrice;

let courseTwo = Object.create(addToCart);
courseTwo.addCourseName = courses[1].courseName;
courseTwo.addCoursePrice = courses[1].coursePrice;

let courseThree = Object.create(addToCart);
courseThree.addCourseName = courses[2].courseName;
courseThree.addCoursePrice = courses[2].coursePrice;

let courseFour = Object.create(addToCart);
courseFour.addCourseName = courses[3].courseName;
courseFour.addCoursePrice = courses[3].coursePrice;

let courseFive = Object.create(addToCart);
courseFive.addCourseName = courses[4].courseName;
courseFive.addCoursePrice = courses[4].coursePrice;

let courseSix = Object.create(addToCart);
courseSix.addCourseName = courses[5].courseName;
courseSix.addCoursePrice = courses[5].coursePrice;

let courseSeven = Object.create(addToCart);
courseSeven.addCourseName = courses[6].courseName;
courseSeven.addCoursePrice = courses[6].coursePrice;


console.log(courseOne);
console.log(courseTwo);
console.log(courseThree);
console.log(courseFour);
console.log(courseFive);
console.log(courseSix);
console.log(courseSeven);