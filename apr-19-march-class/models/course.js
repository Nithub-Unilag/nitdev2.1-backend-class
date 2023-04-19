

class Course {
    tutors = [];

    constructor(title, code){
        this.title = title;
        this.code = code;
    }

    // add tutor for the particular course.
    addTutor(tutor){
        this.tutors.push(tutor);
    }
}


module.exports = Course;