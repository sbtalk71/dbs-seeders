
 export class Person{
    
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    getDetails(params) {
        return this.id+" "+this.name
    }
}

export default Person;