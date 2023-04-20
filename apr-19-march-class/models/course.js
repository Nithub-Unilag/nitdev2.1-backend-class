const rand = require('crypto');
const db = require('../database/connection');

class Course {
    tutors = [];

    constructor(title, code){
        this.id = rand.randomInt(1000000);
        this.title = title;
        this.code = code;
    }

    /**
     * @description Creates new course
     * @param {Course} course 
     */
    static async createCourse(course) {
        const CREATE_COURSE_QUERY = 
            `INSERT INTO courses (title, code, course_id) VALUES (?,?,?)`;
        const values = [course.title, course.code, course.id];

        return (await db.connection).query(CREATE_COURSE_QUERY, values)
            .then(async () => {
                return await Course.getCourse(course.id);
            })
    }


    static async getCourse(id) {
        const GET_COURSE_QUERY = `SELECT * from courses where course_id = ?`;
        const value = [id];

        return (await db.connection).query(GET_COURSE_QUERY, value, (err, result) => {
            if(err){
                console.log(err);
                return err;
            }else{
                return result;
            }
        })
    }

    static async getCourses() {
        const GET_ALL_COURSES_QUERY = `SELECT * from courses`;

        return (await db.connection).query(GET_ALL_COURSES_QUERY);
    }


    // add tutor for the particular course.
    addTutor(tutor){
        this.tutors.push(tutor);
    }
}


module.exports = Course;