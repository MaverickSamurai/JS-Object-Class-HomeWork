// let stu1 = {
//     name: "Mirsamir",
//     surname: "Azimzada",
//     Age: 22,
//     phoneNumbers:[444455,36127548],
//     groups:[{
//         name: "P130",
//         room: "Sirius",
//         teachers:[{
//             name:"Cavid",
//             age:28;
//         },
//         {
//             name:"Rovsen",
//             age:22;
//         }

//         ]
//     },
//     {
//         name: "DL210",
//         room: "Pluton",
//         teachers:["Aysel;","Ulker"]
//     }]

// }

// for (const item of stu1.groups) {
//     if (item.name == "P130") {
//         for (const teacher of item.teachers) {   
//             if (teacher.name == "Cavid") {
//                 console.log(`${teacher.name}-${teacher.age}`)
//             }
//         }
//     }
// }

// let teacherFullData = ()=>{
//     for (const item of stu1.groups) {
//         if (item.name == "p130") {
//             for (const teacher of item.teachers) {
//                 if (teacher.name == "Cavid") {
//                     return (`${teacher.name}-${teacher.age}`)
//                 }
//             }
//         }
//     }
// }

// //console.log(teacherFullData());

// let setGroupTeacher = (groupName)=>{
//     let teacherData = teacherFullData();

//     return `${teacherData} ${groupName}`;
// }

// let group = "P130";

// console.log(setGroupTeacher(group))

// for (const item of stu1.groups) {
//     if (item.name == "P130") {
//         console.log(item.teachers);
//     }
// }



// for (const item of stu1.groups) {
//     if (item.room == "Sirius") {
//         console.log(item.name);
//     }
// }


// console.log(stu1.phoneNumbers);

// for (const item of stu1.phoneNumbers) {
//     if (item == 334455) {
//         console.log(stu1.name);
//     }
// }

// let isExcist = stu1.phoneNumbers.includes(541951);

// if (isExcist) {
//     console.log("Excist");
// }else{
//     console.log("No excist");
// }


// let stu1 = {
//     name: "Mirsamir",
//     surname: "Azimzada",
//     Age: 22;
// }



// let stu2 = {
//     name: "Sadiq",
//     surname: "Nahmetov",
//     Age: 22;
// }


// let stu3 = {
//     name: "Fidan",
//     surname: "Mardanli",
//     Age: 17;
// }


// let students = [stu1, stu2 ,stu3];

// for (const item of students) {
//     console.log(item);
//     console.log(item.name + " " + item.surname + "-" + item.Age);
// }


// let stu1 = {
//     id:1,
//     name:"Orxan",
//     surname: "Akberov",
// }


// let stu2 = {
//     id:2,
//     name:"Azer",
//     surname: "Humbetov",
// }


// let stu3 = {
//     id:3,
//     name:"Ayxan",
//     surname: "Nabatov"
// }


// let stu4 = {
//     id:4,
//     name:"Nermin",
//     surname: "Memmedova"
// }

// let stu4 = {
//         id:4,
//         name:"Nermin",
//         surname: "Memmedova"
//     }


// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {

//         let student = this.students.filter(m=>m.id == stu.id);
//         if (student.length != 0) {
//             return console.log("Already excist")

//         }


//         // let student = this.students.find(m=>m.id == stu.id);
//         // if (student != undefined) {
//         //     return console.log("Already excist")

//         // }

//         if (this.students.length != this.capacity) {
//            this.students.push(stu)
//            return;
            
//         }else{
//             console.log("Array is full")
//         }

       
//     }
// }

// group.addStudent(stu1);
// group.addStudent(stu2);
// group.addStudent(stu3);
// group.addStudent(stu4);
// group.addStudent(stu4);

// console.log(group.students);




// let group = {
//     name: "P130",
//     capacity: 5,
//     students: [],
//     addStudent: function (stu) {


//         if (this.students.length != group.capacity) {
//            return this.students.push(stu)
            
//         }else{
//             console.log("Array is full")
//         }

       
//     }
// }







// group.addStudent("Mirsamir");
// group.addStudent("Kerim");
// group.addStudent("Seid");
// group.addStudent("Sadiq");
// group.addStudent("Esqin");
// group.addStudent("Haqverdi");
// group.addStudent("Abdulla");



// console.log(group.students);




// function Book(name,author){
//     this.name = name;
//     this.author = author;

//     function grtFullData(){
//     console.log(name + " " + author);
//    }
// }

// let book =new Book("Xosrov","Nizami")


// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor = function(){
//     console.log(this.author)
// }

// console.log(book);  




// class Person{
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName(){
//         console.log(this.name + " " + this.surname)
//     }
// }


// class Employee  extends Person{
 
// }

// let employee = new Employee("Seid","Nuraliyev")

// employee.getFullName()

// console.log(employee.surname)


