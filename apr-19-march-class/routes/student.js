const express = require('express'); //commonjs
const StudentController = require('../controllers/student')

const studentRouter = express.Router();

const studentController = new StudentController();

studentRouter.post("/register-school", studentController.signUp);
studentRouter.post("/register", studentController.registerCourse);
studentRouter.get("/see-courses", studentController.listRegisteredCourses);
studentRouter.get('/see-tutor', studentController.seeTutorsForCourse);


module.exports = studentRouter;