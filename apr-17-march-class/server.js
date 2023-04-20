const express = require('express');

const app = express();

app.use(express.json()) // middlewares.

const courses = [
    { id: 1, title: "Introductory Physics", code: "PHS 121" },
    { id: 2, title: "Introductory chemistry", code: "CHM 111" },
    { id: 3, title: "Introductory yoruba", code: "YOR 123" },
    { id: 4, title: "Introductory english", code: "ESD 221" },
    { id: 5, title: "Computer studies", code: "CMP 222" },
    { id: 6, title: "Basic Tech", code: "BCH 121" },
    { id: 7, title: "Home Economics", code: "EC2 100" },
    { id: 8, title: "Physical and Health Education", code: "EDU 500" },
    { id: 9, title: "Biology", code: "BIO 432" },
    { id: 10, title: "Biochem", code: "BCM 171" },
]

function coursesHandler (req, res) {
    res.send(courses)

}
app.get("/courses", coursesHandler);

// get a particular course.
app.get("/courses/:courseId", (req, res) => {
    // get the course id from the request parameters
    const requestedCourseId = req.params.courseId;

    // check for the course in the course database
    const course = courses.find((course) => course.id === parseInt(requestedCourseId));
    console.log(course);
    // if the course does not exist then say course does not exist
    if(!course){
        return res.send("Course does not exist")
    }else {
        // if the course exist return the course.
        res.send(course)
    }
})

// create a new course.
app.post("/courses", (req, res) => {
    const courseTitle = req.body.title;
    const courseCode = req.body.code;

    const newCourse = {
        id: courses.length + 1,
        title: courseTitle,
        code: courseCode,
    }
    courses.push(newCourse);

    res.send(courses);
});


app.put("/courses/:course_id", (request, response) => {
    const courseId = request.params.course_id;
    const course = courses.find((course) => course.id === +courseId)
    if (!course){
        response.send("You cannot update a course that doesn't exists.")
    }else {
        const newTitle = request.body.newTitle;
        course.title = newTitle
        response.send(courses)
    }
})


app.delete("/courses/:course_id", (req, res) => {
    const courseId = req.params.course_id;

    const course = courses.find((course) => course.id === +courseId)
    if (!course){
        res.send("You cannot delete a course that doesn't exists.");
        return;
    }

    courses.splice(courseId-1, 1);
    res.send(courses)
})


app.listen(3000, () => {
    console.log(`Server running on port 3000`)
});
