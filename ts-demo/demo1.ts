
export class Person{
    
    constructor(private id:number,private name:string){}


    public getDetails(): string{
        return this.id+" "+this.name;
    }
}

const p1=new Person(100,'James');
console.log(p1.getDetails);