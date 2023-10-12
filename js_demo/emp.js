import Person from './person.js'
export class Employee extends Person{
    constructor(id,name,salary){
        super(id,name);
        this.salary=salary;
    }

    getDetails(params) {
        return super.getDetails()+" "+this.salary;
    }

}