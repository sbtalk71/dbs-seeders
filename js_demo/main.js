import { Employee } from "./emp.js";
import { Person } from "./person.js";

const person=new Person(123,'James');

console.log(person.getDetails())

const emp=new Employee(124,'Monika',45000);

console.log(emp.getDetails())