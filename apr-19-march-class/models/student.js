const rand = require('crypto');
const db = require("../database/connection")

class Student {
    studentCourses = [];

    constructor(firstname, lastname, email){
        this.id = rand.randomInt(100000);
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.matricNo = `19-${rand.randomBytes(10).toString('hex')}`
    }
    
    /**
     * @description creates a new student in the database.
     * @param {Student} student 
     */
    static async register(student) {
        const CREATE_STUDENT_QUERY = 
        `INSERT INTO students (student_id, firstname, lastname, email, matricNo)
         VALUES (?, ?, ?, ?, ?)
        `;

        const values = [student.id, student.firstname, student.lastname, student.email, student.matricNo];

        function createStudentHandler(err, result) {
            if(err){
                console.log(err, "this is the error")
                return "error";
            }

            console.log(result, "this the result")
            return result;
        }
        
        return (await db.connection).query(CREATE_STUDENT_QUERY, values, createStudentHandler)
        .then(() => {
            return Student.getStudent(student.id);
        })
    }

    static async getStudent(id) {
        const GET_USER_QUERY = `SELECT * from students where student_id=?`;
        const value = [id];

        // const b = [1,10,20,2,3,13,31]
        // b[0], b[3]=2, b[5]=13
        return (await db.connection).query(GET_USER_QUERY, value, (err, result)=> {
            if(err){
                console.log(err);
                return err;
            }else{
                console.log(result);
                return result;
            }
        })
    }




    getCourses(){
        return this.studentCourses;
    }

    register(course){
        this.studentCourses.push(course);
    }
}


module.exports = Student;