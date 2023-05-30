#! /usr/bin/env node
//! Person
class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//! Student 
class student extends person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
//* Student Object
let std1 = new student("Kazim", 18, "539");
let std2 = new student("Zain", 20, "8646");
//! Instructor
class Insructor extends person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
//* Insructor Object
let Insructor1 = new Insructor("Ali", 40, 50000);
let Insructor2 = new Insructor("Fareed", 35, 70000);
//! Courses
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //* Add Student Method 
    addStudent(std) {
        this.students.push(std);
        std.registerForCourses(course1);
        std.registerForCourses(course2);
    }
    //* Add Instructor Method
    setInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
//* Courses Object 
let course1 = new Course(1, "BlockChain");
let course2 = new Course(2, "Mete-Verse");
//* AddStudent Method Call
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std2);
//* SetInstructor Method Call
course1.setInstructor(Insructor1);
course2.setInstructor(Insructor2);
//* Check Student in Course Class
console.log(course1.students);
console.log(course2.students);
//* Check Courses in Student Class
console.log(std1.courses);
//! Department 
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
//* Department Object
let d1 = new Department("Computer Science");
export {};
// d1.addCourse(course1)
// console.log(d1.courses)
