const express = require('express'); //commonjs
const CoursesController = require("../controllers/courses");

const courseController = new CoursesController();

const courseRouter = express.Router();

courseRouter.post("/newCourse", courseController.createNewCourse);
courseRouter.get("/allCourses", courseController.seeCourses);

module.exports = courseRouter;

