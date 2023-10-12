const names=['james','jack','mohan','jerry'];

for(let name of names){
    console.log(name);
}

names.push('hary','vimal','tom');
console.log(names);

const greetedNames=names.map(x=>"hello "+x);
console.log(greetedNames)

const namesFiltered=names.filter(x=>x.length<5);

console.log(namesFiltered)
names.forEach()