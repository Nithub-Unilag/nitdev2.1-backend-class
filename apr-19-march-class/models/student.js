const rand = require('crypto');

class Student {
    studentCourses = [];

    constructor(firstname, lastname, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.matricNo = rand.randomBytes(10);
    }

    getCourses(){
        return this.studentCourses;
    }

    register(course){
        this.studentCourses.push(course);
    }
}


module.exports = Student;