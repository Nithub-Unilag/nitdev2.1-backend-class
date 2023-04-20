const Course = require("../models/course");


class CoursesController {
    constructor(){}


    async createNewCourse(req, res) {

        const {title, code} = req.body;
        const newCourse = new Course(title, code);
        
        try{

            const result = await Course.createCourse(newCourse);
            const answer = result[0][0];
            return res.status(201).json({
                data: answer
            })

        }catch(err){
            console.log(err);
            res.status(500).json({
                error: err.message,
            })
            return;
        }


    }

    async seeCourses(req, res) {
        const courses = await Course.getCourses();
        return res.status(200).json({
            data: courses[0],
        })
    }

    seeCourse(req, res) {
        
    }

    addTutorToCourse(req, res) {

    }
}

module.exports = CoursesController;