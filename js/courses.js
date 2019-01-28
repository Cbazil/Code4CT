let coursesDiv = document.getElelmentById("courses_sec");

// Create an array of objects representing posts.

let courses = [
    {
        "courseName" : "Intro to Coding: Web Pages",
        "discription" : "Code a simple one-page website using HTML and JQuery.",
        "duration" : " Duration: 3 hours",
        "price" : "Price: R250", 
    },
    {
        "courseName" : "Intro to Coding: Music",
        "discription" : "Code a song using SonicPi software on a Raspberry Pi computer.",
        "duration" : "Duration 3 hours",
        "price" : "Price:  R250", 
    },
    {
        "courseName" : "Intro to Coding: Animation",
        "discription" : "Create a 2D animation using coding language JavaScript.",
        "duration" : "Duration: 3 hours",
        "price" : "Price: R250", 
    },
    {
        "courseName" : "Create with Code: Web Pages",
        "discription" : "Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery.",
        "duration" : "Duration: 3 days",
        "price" : "Price: R960", 
    },
    {
        "courseName" : "Create with Code: Music",
        "discription" : "Learn computer science principles by coding music with a Raspberry Pi computer.",
        "duration" : "Duration: 3 days",
        "price" : "Price: R960", 
    },
    {
        "courseName" : "Create with Code: Animation",
        "discription" : "Learn computer science principles by coding animations using JavaScript.",
        "duration" : "Duration: 3 days",
        "price" : "Price: R960", 
    },
    {
        "courseName" : "Getting started as a developer",
        "discription" : "Learn how to set up a development environment and practical skills to start coding.",
        "duration" : "Duration: 3 hours",
        "price" : "Price: R250", 
    }
];

// Add a Dom Structure for each post.
courses.forEach(function(course) {
    let courseDiv = document.createElement("div");
    let courseNameDiv = document.createElement("div");
    let courseDescriptionDiv = document.createElement("div");
    let courseDurationDiv = document.createElement("div");
    let coursePriceDiv = document.createElement("div");

    courseNameDiv.innerHTML = course.courseName;
    courseDescriptionDiv.innerHTML = course.discription;
    courseDurationDiv.innerHTML = course.duration;
    coursePriceDiv.innerHTML = course.price;

    // Set CSS classes on each div so they can be styled.
    courseDiv.setAttribute("class", "courseGrid");
    courseNameDiv.setAttribute("class","course_name");
    courseDescriptionDiv.setAttribute("class", "course_dis");
    courseDurationDiv.setAttribute("class", "course_dur");
    coursePriceDiv.setAttribute("class", "course_price");

    

    // Assemble the post div
    courseDiv.appendChild(courseNameDiv);
    courseDiv.appendChild(courseDurationDiv);
    courseDiv.appendChild(courseDurationDiv);
    courseDiv.appendChild(coursePriceDiv);

    // Add the post div to the container for posts.
    coursesDiv.appendChild(courseDiv);
});