"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.getDetails = function () {
        return this.id + " " + this.name;
    };
    return Person;
}());
exports.Person = Person;
var p1 = new Person(100, 'James');
console.log(p1.getDetails);
