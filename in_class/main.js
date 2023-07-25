console.log("Hello world")

const today = new Date()
console.log(today)
console.log(today.getDay())
console.log(today.toDateString())

/* 
switch(data to compare){
    case(0):
        action
        break;
    more cases
    more actions
    default:
        action
}
*/

switch(today.getDay()){
    case(0):
        console.log('Sunday');
        break
    case(1):
        console.log('Monday');
        break
    case(2):
        console.log('Tuesday');
        break
    case(3):
        console.log('Wednesday');
        break
    case(4):
        console.log('Thursdayay');
        break
    case(5):
        console.log('Friday');
        break
    case(6):
        console.log('Saturday');
        break
    default:
        console.log('Invalid Day');
}


//JS object
const firstObject = {
    name : 'Sean',
    'age' : 25,
    favouriteColor : 'blue'
};
console.log(firstObject);
console.table(firstObject);

console.log(firstObject['age']);
console.log(firstObject.age);
// ? only keys into object if exists
console.log(firstObject.vehicle?.year);
firstObject.vehicle = {
    make : 'tesla',
    model1 : 'X',
    year : 2020
};

console.table(firstObject.vehicle);

delete firstObject.age ;
console.log(firstObject);

const newKey = 'hairColor';
firstObject[newKey] = 'brown';
// In-class exercise 1
// Blue, C++, LA Rams, Chicago Fire, Liverpool
const person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

console.log(person2.favColor);
console.log(person2.progLanguages[2]);
console.log(person2.teams[1].football);
console.log(person2.teams[0].soccer[0]);
console.log(person2.teams[1].soccer[1]);

const { name, age, progLanguages } = person2
console.log(name, age, progLanguages);

firstObject.age = 26;
function displayInfo(person) {
    return `${person.name} is ${person.age} years old`;
}

console.log(displayInfo(firstObject));

const displayInfoArrow = ({name, age}) => `${name} is ${age} years old`;
console.log(displayInfoArrow(person2));

function displayWithQuote(quote, { name, favouriteColor }){
    return `${name} fav color: ${favColor} ${quote}`;
}
const quote = "I know kung fu";

// Doesn't work rn console.log(displayWithQuote(quote, firstObject));

const seanobject = {...firstObject}; //shallow copy
console.log(seanobject);
const firstObject2 = firstObject; //total copy, will affect each other
const seanObjectWithLanguage = {...seanobject, favouriteLang: 'javascript'};
console.log(seanObjectWithLanguage);
const seanVehicle = {
    make: 'Tesla',
    model: 'X',
    year: '2020',
    name: 'Zapdos'
}

const combinedObject = {vehicle: {...seanVehicle}, ...seanObjectWithLanguage};
console.log(combinedObject)
function displayInfoWithCar({name, age, favouriteColor, hairColor, favouriteLang, ...vehicle}) {
    console.table(vehicle);
    return `${name} ${age} ${favouriteColor} ${favouriteLang}`;
}
console.log("====================================");
console.log(displayInfoWithCar(combinedObject));

const destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}
function destructed({title, body, author, ...others}) {
    console.log(title);
    console.log(body);
    console.log(author);
    console.log(others);
}
destructed(destructMe);

const displayFriendInfo = (person) => {
    const friends = person.friends ?? ['dylan'];
    const bestFriend = person.friends?.[0] ?? 'kevin';
    console.log(`${person.name} is friends with`); 
    friends.map(friend => console.log(friend))
    console.log(`and bestfriend is ${bestFriend}`);
}
displayFriendInfo(seanobject);

seanobject.friends = ['brendan', 'sarah', 'ryan'];
displayFriendInfo(seanobject)

console.log({1: 'a'} == {1:'a'});
console.log(firstObject === firstObject2);

console.log({} ? 'empty obj is true' : 'is false'); // is true
console.log([] ? 'empty arr is true' : 'is false'); // is true

const emptyObject = {};

console.log(Object.keys(emptyObject).length > 0 ? 'object is not empty' : 'is empty');
console.log([].length > 0 ? 'array not empty' : 'array is empty');

//LUNCH

//iterating over objects
console.log(Object.keys(seanobject));

const seanobjectKeys = Object.keys(seanobject);

for(let i = 0; i < seanobjectKeys.length; i++){
    console.log(`Value of ${seanobjectKeys[i]}: ${seanobject[seanobjectKeys[i]]} test`)
}

for(let k of Object.keys(seanobject)){
    console.log(`Value of ${k}: ${seanobject[k]}`);
}

console.log(Object.entries(seanobject));
for(const [k,v] of Object.entries(seanobject)){
    console.log('Entries');
    console.log(`Value of ${k}: ${v}`);
}
const seanobjectValues = Object.values(seanobject);
for(let i = 0; i < seanobjectValues.length; i++){
    console.log('Values');
    console.log(seanobjectValues[i]);
}

//for in loop
for(let k in seanobject){
    console.log(k, seanobject[k]);
}

console.log((() => ({1: 'a' }))())

const comedian = {
    fname: 'Chris',
    lname: 'Rock' ,
    displayFullName : function() {return `${this.fname} ${this.lname}`},
    displayFullNameArrow : () => `${this.fname} ${this.lname}`
}
console.log(comedian.displayFullName())

console.log(typeof []);
console.log([] instanceof Array);
console.log(Array.isArray([]));
console.log(typeof {});
console.log({} instanceof Object);
console.log(typeof 'abc');
console.log(typeof 123);
console.log(null instanceof Object);

const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function(){console.log(`${this.name} ${this.age}`)};
}

/* 
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.displayInfo = function () { console.log(`${this.name} ${this.age}`) }
    }
}
*/

const person = new Person('dylan', '33');
console.log(person.name);

// Classes ES6
class Human{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

displayInfo(){
    return `${this.name} ${this.age} ${this.gender}`
    }
}

const human = new Human('janis joplin', 24, 'female')

console.log(human.displayInfo());

class Child extends Human{
    constructor(name, age, gender, talking) {
        super(name, age, gender)
        this.talking = talking;
    }
    isTalking(){
        console.log( this.talking ? 'Is talking' : "Not talking");
    }
    displayInfo(){
        return `${this.name} ${this.age} ${this.gender} ${this.talking? 'talking' : 'not talking'}`
    }
}

const child = new Child('bam bam', 1, 'male', false);

console.log(child);
child.isTalking();
console.log(child.displayInfo());

class Car{
    constructor(make, model, year, color, odometer){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.odometer = odometer;
    }
    displayInfo(){
        return `${this.color} ${this.year} ${this.make} ${this.model} (${this.odometer} mi.)`;
    }
    paintJob(c){
        this.color = c;
    }
}

const crz = new Car('Honda', 'CR-Z', '2012', 'silver', 118452);
console.log(crz.displayInfo());
crz.paintJob('purple');
console.log(crz.displayInfo());

// outers 
/* 
outer(){
    // code
    inner(){
        //code
    }
    return inner
}
*/

function classManager(){
    console.log("In class manager");
    const studentArray = [];
    function addStudents(...students){
        studentArray.push(...students);
        console.log(studentArray);
    }
    return addStudents
}

const matrix123 = classManager();
matrix123('ben', 'david');
matrix123('michael');

//callstack
function one(){
    console.log('in one');
    two();
    console.log("finished");
}

one()

function two() {
    console.log('in two');
    three();
    console.log("remove two from call stack");
}

function three() {
    console.log('in three');
    console.log('remove three from callstack');
    return null
}

console.log('above timeout');
setTimeout(() => console.log('in timeout'), 1000);
console.log('below timeout');

//callback
function doHW(subject, callback){
    console.log(`Starting my ${subject} homework`)
    callback()
}
function homework() {
    console.log('Completing javascript hw')
}
doHW('javascript', homework)

//promise
function checkEven(num) {
    return new Promise((res, rej) => {
        if(num % 2 === 0){
            setInterval(() => res(true), 3000);
        }
        else {
            rej(false);
        }
    })
}

console.log(checkEven(3))

checkEven(10)
console.log('After Promise');

async function handlePromise(num){
    await checkEven(num).then((result) => console.log(result)).catch((error) => {console.log(error)})
    console.log("after promise fulfilled");
}
handlePromise(10);

const handlePromiseArrow = async (num) => {
    await handlePromise(num).then((result) => console.log(result)).catch((error) => {console.log(error)})
    console.log("after promise in arrow")
}

handlePromiseArrow(100)