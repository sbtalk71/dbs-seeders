
const fruits=['apple','mango','guava'];

const allFruits=[...fruits,'banana','orange'];
console.log(allFruits)

const car={
    make:'suzuki',
    model:'brezza',
    year:2013
}

car.year=2016

const newCar={...car,year:2016}

console.log(newCar);