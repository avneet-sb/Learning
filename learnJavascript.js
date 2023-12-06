// word keyword
// word = avi laddoo etc, words that dont have specified meaning in lang
// keyword = for if let const var

//var let const = all are variables
//var are globally scoped whereas let and const are block scoped
//var can be redefiined and re declared whereas let can only be updated not redefiened and 
//const cant do both

// hoisting means whenever a var is declared it automatically moves to the top of the code
//var a = 12;
//breaks by compiler ->
// var a; this moves to the top everytime thats why we can do console.log(a) before declaring ans it will give undefiend
// a = 12;
// undefined means it is declared but we dont know the value
// not defined means it is not even declared(defined)

//types in js 
//mainly of 2 types
//primitve = string, int , boolean, null
//reference = [],{},()
//jab bhi refernece type pass krenge to pass hogi referenced value which means no new copy will be made
//jab bhi primitive value pass hogi tb new copy create hogi
// to new copy pr change krne se purani pr fark nhi aega primitive me
// magar reference me bhot fark aega coz one value

//if else same like java
//for while loops same as java

// diff ways of declaring functin jn js
/* function printkr(a,b){
    console.log(a+b);
}

const add = function(a,b){
    console.log(a+b);
}
add(2,3);

let add = (a,b)=>a+b;
console.log(add(2,3));

agar return vala create krna ha to bhi ese hi hojaega simply return dalkr

function kro(){
    return "Hello";
}
*/

//Array 
// var a = [1,2,3,4];
// a.push(5); adds 5 to last of array
// a.pop(); remove last element of the array
// a.unshift(0); adds 0 to start of array
// a.shift(); remove first elemnt of arrray
// a.splice(idx,number of elements to be removed); splice removes idx from between the array
// a.splice(2,2); arr=[1,2,3,4,5] 
// ans = arr=[1,2,5] 

//Object = ek hi bande ke bare me baat krnaa (key value pair)
/*
var person = {
    name : "Avneet", // here name is property and it has value
    age : 22,
    profession : "Student",
    kuchbhi : function print(){console.log("name")} // this kuchbhi is a method
};

how to access properties
//console.log(person.name);
person.method()

how to change value 
person.name = "Avneet Singh"

to delete something from obj
delete person.name; command is used
*/


/*
   -- double dash topics
*/

// Diff b/w var let const
/*
1. old version of js only had var (es5) then new verison came with let and const(es6)
we study combination of es5 and es6

2. var is function scoped and let and const are braces scoped

function abcd(){
    for(var i = 1; i<11; i++){
        console.log(i);
    }
    console.log(i); // normally programminglang will give errors but in js var is function scoped
}     //meaning apne parent me kahi bhi use ho skta hai yeh
so for ke outside i print hoga

but 

if var ki jagah let use krenge to error aega kuki vo braces scoped hai only meaning apne for vale braces
tkk hi defined rhegaa aki bahr error dega

3. var adds itself to the window object whereas let const doesnt add itself to window object
window object means js me kuch features ese bhi hai jo js ka part nhi but browser se 
vo use krleta hai and these features jo provide krata hai usse window object jehte hai
var add krelta hai means its bad since it exposes our data by adding var to window
*/

// Browser context api contains three things that are provided to js for functioning
// 1. window object
// 2. Stack (ususal as other lang)
// 3. heap memory(")

// Execution context
// function ek apna execution cotext meaning ek imaginary container bana leta hai jisme 
// teen cheeze hoti hai 
// 1. variables in fn
// 2. functions defined inside that function
// 3. lexical environment(this defines scope of cheeze jinhe hum access kr skte hai ya nahi
// like sabse andar vala function uske bahr declared var access kr skta ha magar sabse bahr vala 
// kisi andar ke functin me dec var use nahi kr skta)

// how to copy reference values
/**
var a = [1,2,3,4,5];
var b = [...a]; this ... is called spread operator which says make a copy of the var whihc comes
after 3 dots

var obj = {};
var copyobj = {...obj};
 */

// Truthy falsy
/**
in js there are two types of values truthy and falsy
falsy = 0 false null undefined NaN document.all
rest all are truthy
 if(0 means a falsy value){
skips this if goes to else
 }else{

 }
 */

 //Switch
 /**
  switch(1){
    case 1:
        break;
    case 2:
        break;
  }
  */


/** loops
 var a = [1,2,3,4,5]

 a.foreach(function(val){
    console.log(val);
 });

 var obj = {
    name:"Avneet",
    age:8,
    city:"fbd"
 }

 for(var key in obj){
    console.log(obj[key]);
 }

 do-while loop same as java
 */

 /*
 Callback Function

 setTimeout(function(){
    console.log("Hello");
 },3000);

 more like functions jinki value abhi nahi pta but kuch time baad ptaa lagegi.
  
  */

// First classs functions
//  var b = function(){console.log("Hello")} // this is called first class functions which means we
//  //can pass functions to variables also in js
//  function abcd(a){
//     a();
//  }
//  abcd(b);

/*
Array in js are nothing but objects if arr a = [1,2,3,4,5] 
in reality it is
a = {
    0:1,
    1:2,
    2:3,
    3:4,
    4:5,
}
so it is an onject in reality so we can store negative indexes in array in js also

var a = [1,2,3,4,5,];
a[-1] = 0;

for(var key in a){
    console.log(a[key]) //gives value of properties
}

// console.log(a); output=> [ 1, 2, 3, 4, 5, '-1': 0 ]

 */

//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//

// SYNC ASYNC JAVASCRIPT

/*
synchronous - means synchronously krte jaao jese 4 task hai to phle a then b then c then d
asynchronous - means no fix order koi function async hai eg c to it means a hoga then b hoga
then c chla jaegaa SIDE STACK me and background me processing krega till completion and d task
b ke immediately baad hojaega 

async me ese functions likhe jaate jinka pta nahi hota value kab laakr denge or vo baki 
tasks ko block na kre isliye unhe async banayaa jataa hau

there are two stacks:
main stack - yaha functions aakr output krte hai just like main memory
side stack - yaha functions bhje jaate hai backhround me processing krne ke liyee till completion
issi me rhte hai fn

event loop- checks whenever the main stack is empty ki side stack me koi hai and if koi hai or agar
vo complete hgya hai to mainm elaakr output kraa do and checks again till side stack empty


javascript asynchronous nhi hai since yeh single threaded lang hai means ek bari pr ek ko hi
cpu milega to yeh tasks ke beech me jdi jldi shift marti hai to seem fast and multi threaded

setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest

agar inme se kuch bhi use kr rhe ho to async fn hai


Ab async js me do parts hote hai 
ek async code jo kuch kaam krta hai:
setTimeout
setInterval
promises
fetch
axios
XMLHttpRequest

and doosra callbacks jo usse output krega yaa btaega ki async
ka result kya rha cheez jo dhundni thi vo mili ya nahi:
callbacks 
then catch
async await


PROMISE

ab promise ek tareeke ka async call hai jo thir party pr lagaate ki vo kuch cheez laakr de

ab yeh teen phases me rhe skta hai pehla ki pending hai, doosra ki resolve hogya promise,
teesra ki reject hogya promise

Syntax:
var ans = new Promise((res,rej)=>{
    if(true){
        return res();  //return with parentheses
    }else{
        return rej();
    }
})

ans
.then(function(){
    console.log("Resolved")
})
.catch(function(){
    console.log("reject")
})

ab asynchronously me random order aata depending upon knsa task pehle khtm hua
BUT agar order me laana ho asynchronously to kese laaye

var ans = new Promise((res,rej)=>{
    return res("Pehla task");
})

var t2 = ans.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{    //promise ki chain banaakr promis ke andar promise
        return res("doosra task")
    })
})

t2.then(function(data){
    console.log(data);
})

console.log("teesra rask")

output :teesra rask
        Pehla task
        doosra task


ASYNC AWAIT

async await use hota hai jab bhi kabhi third party se data lene bhjte hai to promise 
kehtee ha usse ab prmise ko handle krne ke liye bht then ka use krna pdta hai
to itne then ka use hataane ke liye we use async await

koi bhi cheez kuch lene jaa rhi hai to use async fn and jahaa lene jaa rhi usse await bana do
const fetch = require('node-fetch');
async function ab(){
    //fetch(`https://randomuser.me/api`)
    // .then(function(raw){
    //     return raw.json();
    // }).then(function(d){
    //     console.log(d);
    // })
    // async await yeh saare then ko hataane ke kaaam aata hai and code significantly chota krta hau
    var a = await fetch(`https://randomuser.me/api`)
    var b = await a.json();
    console.log(b);
}

ab();


Concurrency = js me sync async code sath chl rha hai isse conccurrency kehte hai
parralelism = different cores se kaam krwaanaa
throttling = kisi code ka control krna number of executions ka
*/


//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//


/*
 Higher Order Fns and First Class fns
 Kuch nhi bas jo fns parameters me fns accept krte hai unhe higher order fns jehte hai ya fir koi fn return krde fn hi to bhi hof hota hao
 ans jo fns as parameters jaate hai that are first class fns. FORST CLASS KO var me bhi save kr skte
 var abd = function(){
    //fc fn
 }

 for eg :
 arr.forEach(function(val){ // forEach is hof
    something
 })
 */

 /*
 Constructor Fns

 similar like class and constructors but there is no class functions se hi constructor ana dete hai seedha
 define: jo functions me this keyword use hua ho for properties and usse access krte time new ka use kre vo constructor fn hotga hai

 function abcd(color){   //CONSTRUCTOR FN
    this.color = color;
    this.type = "Phone";
 }

 var d1 = new abcd("red");
 console.log(d1)
 */

 /**
  * NEW keyword
  * new keyword is used to create an empty object of any function
  * eg: new class()  creates an empty object of class function
  */

/**
 * IIFE - immediately invoked function expression
 * iife hai function ko turant chlane ki kala is tareeke se ki hum usme private var banaa paye or unhe bahr se access na kr paaye
 * 
 * syntax:
 * var ans = (function(){
 *      var privateval = 12;
 *      return {
 *          getter: function(){
 *              console.log(privateval);   //this will help us access privte val from outside and ensure security
 *          },
 *          setter: function(val){
 *              privateval = val;
 *          }
 *      }
 * })()
 * 
 * ans.getter(); // this will give privtae val value as output
 */

/**
 * prototype 
 * it means js kuch pre provided properties and functions deta hai to user to use like object jab bhi banaegaa to kuch properties
 * jo humne nhi banayi vo hume milegi humesha for eg: var obj = {name : " Avneet"};
 * obj.hasOwnProperty("name") // output will be true
 *
 * similary like array has property .length to find length
 */

/**
 * Prototypal inheritance
 * inheritance done using prototype is called prototypal inheritance
 * 
 * Syntax:
 * 
var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    canTeleport: false    
}

var me = {
    name: "Avneet",
    student: true
}

me.__proto__ = human;  // yaha pr using __proto__ me ne human se inherit krli uski propertiues and now can use human's every property

console.log(me.canFly)  // output will be false
 */

/**
 * THIS keyword
 * this keyword value changes from scope to scope 
 * 
 * if global scope that is
 * console.log(this); output will be the window object
 * 
 * if local scope that is inside a function
 * function abcd(){
 *      console.log(this)   // this will also return window object
 * }
 * 
 * if this keyword is used in object then this refers to the object
 * 
 * var obj = {
 *      name : "Avneet",
 *      fun: function(){
 *          console.log(this)  output will be complete object will be returned.
 *      }
 * }
 * 
 * if used on event listeners
 * 
 * var button = document.querySelector("#button")

    button.addEventListener("click",function(){
        console.log(this)
    })

    this will correspond to whatever is before addevemntlistener which in this case is button with id #button
 */



/**
 * CALL APPLY BIND
 * yeh tb use hota hai jab hume kisi function ki this ki value by default window se hatakr kisi object pr point krvaani hooo
 * CALL 
 * 
 * function abcd(){
    console.log(this)
}

var obj = {
    name : "AVNEET"
}

abcd.call(obj); 

agr normally abcd ko chlaate to this ki value window ati magar yaha value aayi obj kuki humne this ko obj pr point krva dia tha

APPLY 
function abcd(val1, val2){
    console.log(this,val1,val2)
}

var obj = {
    name : "AVNEET"
}

abcd.apply(obj,[1,2]); 

apply use hota hai to pass arguments in form of arrray. call ke sath bhi pass kr skte bas waha array me nahi dena hota

BIND

function abcd(val1, val2){
    console.log(this,val1,val2)
}

var obj = {
    name : "AVNEET"
}

var bindedfnc = abcd.bind(obj)

bindedfnc();

bind print nahu krega bas bind krdega this ki value ko obj se then us naye binded fnc ko hume manyally chlana pdefa apne hatho se

*/

/**
 * PURE Impure fnc
 * 
 * PURE : fnc jo 
 * 1. same input ke liye humesha same output de 
 * 2. globl variables ko change na kre
 * 
 * impure : fnc jo pure nahi hai eg :  math.random vale fnc ka exapmle
 */