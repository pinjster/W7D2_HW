// Task 1
// Question 1: Use the array of shop items provided and present the the information in the following format
const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men's NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function formatObject({id, ...obj}){
    let keysLength = 0;
    for(let k of Object.keys(obj)){
        if(keysLength < k.length){
            keysLength = k.length;
        }
    }
    for(let [k, v] of Object.entries(obj)){
        let space = "";
        for(let i = 0; i < keysLength - k.length; i++){
            space += ' ';
        }
        console.log(k + ": " + space + v);
    }
}
function formatList(arr){
    console.log("\`\`\`");
    for(let i = 0; i < arr.length; i++){
        console.log("=======================================");
        formatObject(arr[i]);
    }
    console.log("\`\`\`");
}

formatList(shopItems);

//Question 2: Write a function that parses through the below object and displays all of their favorite food dishes
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function formatFoods({...obj}, bool=true){
    if(bool){
        console.log("\`\`\`");
    }
    for(let [k, v] of Object.entries(obj)){
        console.log(k + " contains:");
        if(Array.isArray(v)){
            if(v[0] instanceof Object){
                formatFoods(v[0], false);
            }
            else{
                for(let i = 0; i < v.length; i++){
                    console.log(v[i]);
                }
            }
        }
        else{
            console.log(v);
        }
    }
    if(bool){
        console.log("\`\`\`");
    }
}

formatFoods(hwPerson);

/* Question 3: Create a Promised based function that will check a string to determine if it's length is greater than 10. 
If the length is greater than 10 then resolve it and console log "Big word". 
If the length of the string is less than 10 then reject it and  console log "Small String"
*/
function checkLength(str) {
    new Promise((resolve, reject, perfect) => {
        if(str.length > 10){
            resolve(console.log("Big word"));
        }
        else if(str.length === 10){
            perfect(console.log("Perfect word"));
        }
        else{
            reject(console.log("Small String"));
        }
    })
}

checkLength("This is a mighty big string");
checkLength("smallstr");

/* Question 4: Create a base class of GameMember and 2 children classes of Dealer, Player
both dealer and player have:
hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers
hit() : ability to add  a random number [1-13] to their hand
When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)
When a Player hits they can hit as long as their total is under 21
Use the randomNumber function provided below to gernerate a random number 1-12
*/
class GameMember {
    constructor(){
        this.hand = [];
        this.total = 0;
        this.hit();
        this.hit();
    }

    hit(){
        num = Math.floor(Math.random() * 12) + 1;
        this.hand.push(num);
        this.total += num;
    }
}

class Dealer extends GameMember{
    constructor(){
        super(hand, total)
    }

    hit(){
        if(this.total < 17){
            this.num = Math.floor(Math.random() * 12) + 1;
            this.hand.push(num);
            this.total += num;
        }
    }
}

class Player extends GameMember{
    constructor(){
        super(hand, total)
    }

    hit(){
        if(this.total < 21){
            this.num = Math.floor(Math.random() * 12) + 1;
            this.hand.push(num);
            this.total += num;
        }
    }
}

const dealer = new Dealer();

//Task 2
//Codewars Problem 1: https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
function noBoringZeros(n) {
    if(n === 0){
      return 0;
    }
    if(n % 10 === 0){
      n = noBoringZeros(n / 10);
    }
    return n;
  }
//Codewars Problem 2: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
function distinct(a) {
    let newarr =[];
    for(let n of a){
      if(newarr.includes(n)){
        continue;
      }
      else{
        newarr.push(n)
      }
    }
    return newarr;
  }