const studentDb = require('../database/studentDb');
const StudentModel = require("../models/student");

class StudentController {
    constructor() {}

    signUp(req, res) {
        // firstname, lastname and email from the request.
        const { firstname, lastname, email } = req.body; // [object destructuring]
        // save the student to the db
        const newStudent = new StudentModel(firstname,lastname, email);

        studentDb.push(newStudent);

        // return all registered students.
        res.status(201).send(studentDb);
    }

    registerCourse(req, res) {
        return res.send("We've seen your request")
    }


    listRegisteredCourses(req, res) {

    }

    seeTutorsForCourse(req, res) {

    }
}


module.exports = StudentController;