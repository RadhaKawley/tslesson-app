//interface notation
interface UserInterface{
    name:string,
    age:number,
    email?:string,
}
const radha:UserInterface={
    name:'Radha Kawley',
    age:20,
}
const radha1:UserInterface={
    name:'Radha 1 Sathe',
    age:30,
    email:'radha@test.com'
}
console.log(radha.name);
console.log(radha1.email);
//type notation copmletely equivalemt
type UserType={
    name:string,
    age:number,
    email?:string,
}
const sathe:UserType={
    name :'Radha Sathe',
    age:40
}
console.log(sathe.age);