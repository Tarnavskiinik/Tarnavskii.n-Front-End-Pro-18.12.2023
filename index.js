class Student{
    constructor(name, lastName, year){
        this.name = name;
        this.lastName = lastName;
        this.year = year;
        this.grade = [];
        this.visit = [];
    }

    age(){
        return new Date().getFullYear() - this.year
    }
    averageScore() {
        const sumScore = this.grade.reduce((a, b) => a + b, 0);
        const currVisit = sumScore / this.visit.length;
        return currVisit;
    }
    present(){
        if(this.visit.length < 25){
            this.visit.push(true)
        }else{
            console.log("Максимальна кількість записів про відвідуваність досягнута.")
        }
    }
    absent() {
        if (this.visit.length < 25) {
            this.visit.push(false);
        }
    }
    summary() {
        const averageGrade = this.averageScore();
        const averageVisit = this.visit.filter(a => a).length / this.visit.length;

        if (averageGrade > 90 && averageVisit > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || averageVisit > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
const student = new Student("Іван", "Іванов", 1999);
const secondStudent = new Student("Марія", "Петренко", 2001);

student.present();
student.absent()
student.present();

console.log("Студент 1:", student.summary());

secondStudent.present();
secondStudent.present();

console.log("Студент 2:", secondStudent.summary());