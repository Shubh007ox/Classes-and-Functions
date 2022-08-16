class Student{
    static count = 0
    constructor(Name,age,Phone_number,Board_marks){
        this.Name = Name
        this.age = age
        this.Phone_number = Phone_number
        this.Board_marks = Board_marks
        Student.count++;
    }
    getcount(){
        console.log('number of student is '+ Student.count)
    }

    
}
Student.prototype.eligible = function(Marks){
    if(this.Board_marks>Marks){
        console.log(`${this.Name} is eligible`)
    }else{
        console.log(`${this.Name} is not eligible`)
    }
}

const student1 = new Student('shubham',23,924842,95);
const student2 = new Student('gaurav',24,924842,90);
const student3 = new Student('Rahul',24,924842,45);
const student4 = new Student('shyam',24,924842,25);
const student5 = new Student('yash',24,924842,14);

console.log(student1.Name)
console.log(student2);
student1.eligible(35);
student2.eligible(34);
student3.eligible(50);
student5.getcount();