#! /usr/bin/env node
//! Person
class person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

//! Student 
class student extends person {
    rollNumber: string;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: string){
        super(name, age)
        this.rollNumber = rollNumber;
    }
    registerForCourses(course: Course){
        this.courses.push(course);
    }
}

//* Student Object
let std1 = new student("Kazim", 18, "539")
let std2 = new student("Zain", 20, "8646")

//! Instructor
class Insructor extends person {
    salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number){
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: Course){
        this.courses.push(course);
    }
}
//* Insructor Object
let Insructor1 = new Insructor("Ali", 40, 50000)
let Insructor2 = new Insructor("Fareed", 35, 70000)

//! Courses
class Course {
    id: number;
    name: string;
    students: student[] = []
    instructor: Insructor[] = []

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
//* Add Student Method 
    addStudent(std: student){
        this.students.push(std)
        std.registerForCourses(course1)
        std.registerForCourses(course2)
    }
//* Add Instructor Method
    setInstructor(instructor: Insructor){
        this.instructor.push(instructor)
    }
}
//* Courses Object 
let course1 = new Course(1, "BlockChain")
let course2 = new Course(2, "Mete-Verse")

//* AddStudent Method Call
course1.addStudent(std1)
course1.addStudent(std2)
course2.addStudent(std2)

//* SetInstructor Method Call
course1.setInstructor(Insructor1)
course2.setInstructor(Insructor2)

//* Check Student in Course Class
console.log(course1.students);
console.log(course2.students);

//* Check Courses in Student Class
console.log(std1.courses);

//! Department 
class Department {
    name: string;
    courses: Course[] = []

    constructor(name: string){
        this.name = name
    }
    addCourse(course: Course){
        this.courses.push(course)
    }
}

//* Department Object
let d1 = new Department("Computer Science")
// d1.addCourse(course1)
// console.log(d1.courses)









