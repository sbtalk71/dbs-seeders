
class Person{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    getDetails(params) {
        return this.id+" "+this.name
    }
}

class Employee extends Person{
    constructor(id,name,salary){
        super(id,name);
        this.salary=salary;
    }

    getDetails(params) {
        return super.getDetails()+" "+this.salary;
    }

}

const person=new Person(123,'James');

console.log(person.getDetails())

const emp=new Employee(124,'Monika',45000);

console.log(emp.getDetails())