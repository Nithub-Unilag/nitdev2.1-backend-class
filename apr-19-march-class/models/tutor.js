class Tutors {
    coursesTaking = [];

    constructor(firstname, lastname, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.matricNo = random.randomBytes(10);
    }

    takeCourse(course){
        this.coursesTaking.push(course);
    }

    listCourses() {
        return this.coursesTaking;
    }
}