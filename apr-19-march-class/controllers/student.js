const studentDb = require('../database/studentDb');
const StudentModel = require("../models/student");

class StudentController {
    constructor() {}

    async signUp(req, res) {
        // firstname, lastname and email from the request.
        const { firstname, lastname, email } = req.body; // [object destructuring]
        // save the student to the db
        const newStudent = new StudentModel(firstname,lastname, email);

        try{
            const result = await StudentModel.register(newStudent);
            const answer = result[0][0];
            res.status(201).json({ data: answer});
            return
        }catch(err){
            res.json({ error: err.message});
            return
        }
        
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