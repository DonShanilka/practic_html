

// JS Wala bugs thiyenawa.. ehema wenne meka hadhuwe dhawas 10kin nisa.
// Adhatath fix une nathi busg thiyenawa

console.log("Welcom to The Java Script"); // sout eka ganne meke

var x = 2;  // var eken thama variable hadhanne js wala

var l = 'Shanilka';
y = 'IJSE';
n = null;
k = undefined; // undefined eken kiyanne user visin value ekak dhala na
console.log(l , y);
console.log(n);

// js wala variable wala data type ekak na. api dhena value ekata anuwa thamai data type eka hadhenne.


// var 4x // mehema variable hadhanna ba  // variable hadhanawanam _s   ,  $log   ,  x4   -- mehema var hadhanna puluwan


function myFunction() { 
 // function ekak hadhanne mehema JS wala

 var y = "Welcome to IJSE";     // meke body ekata kiyanawa block ekak

 console.log("Y-01: " , y); // Js Wala Concatinate karanne mehema
}

myFunction(); // Call function

//
//    {
//      mekath block ekak
//    }
//

{
 let z = "welcome to IJSE 67";                                                                                                            
 console.log(z);

 z = "Welcom to Sri Lanka";
 console.log(z);
}

// console.log(z);  // js wala block ekak athule block ekak hadhala eka eliye idhan access karanna puluwan 

// --- Meka JS Wala Bug Ekak---- 

// block eken eliye idhan assign karanna puluwan wena bug eka fix karanna thama me (let , const) eka enne

// var eka thamai mulin js release weddi awe 

// null eken wenne assign karapu eken kisima watinakamak na
// undifind eken wenne mukuth na

// const n = 30; // const eka gaththahama mekata wena valuse dhanna ba ai
// n = 40; // mehema ba

//let x = "Shanilka"; // var wenuwata let use karanne.. ai e ?  var eke thiya bug fix karanna thama (let) eka awe

var k = 20;
console.log(typeof k);

x = null;

x = Symbol("F00");
console.log(typeof x); //symble

x = BigInt = ("12312423535");
console.log(typeof x);

x = {}; // Js Wala object ekak hadhanne mehema
console.log(typeof x);

x = [];
console.log(typeof x);

x = function(){

}

console.log(); // onama ekak print karaganna meka use karanne // Java Wala System out eka wage
console.error(); // mokak hari erro ekak pront karaganna
console.warn(); // warinng ekak print karaganna onenam meka gannawa
console.info(); // mekath log eka wage thama
// console.clear(); // eka dhunnahama okkoma clear wela yanawa
console.table(); // tabuler data table ekak widhiyata pawicchchi karnana -- 
// meyage athule kye valuse pears thama yawanne . 

// let str = "Hello World";

// str.charAt(6);
// console.log(str);

// concat meka use karala string 2k concat karaganna puluwan
// str.concat("Bye -- " , str);

let url1 = "https.//";

url1.startsWith("https");  // me method eken wenne dhena values ekata samana ekakdha thiyenne kiyala baalanaw
url1.endsWith(".lk");  // meken weene end wene mekendha kiyala dhanaganna eka
String.fromCharCode(71); // string kiyana object
url1.includes("Shanilka"); // oya thiyena string eka thiyenawadha balanawa kohe hari
url1.indexOf("world"); // meka patan ganna thana thiyena caractor eka ex - 4 
url1.match(/o/g); // o eka thiyana caractor kiyak thiyenawadha kiyala balallan.. tiyenam eka Array ekaakata dhanawa [o,o]
url1.replace("," , "-"); // meken karanne ( , ) ekata repalce karanawa ( - ) eka.
url1.search("go"); // myath wada karanne indexof widhiyatamai. "go" kiyala thiyena index eka hoyaganna . meka nathnam -1 eka return karanawa
url1.slice(5,10); // String ekaka thiyena part ekak extract karala ganna ... 5 idhan 10 wenakan thiyena index tika gannawa


let str6 = "JavaScript";
str6.toLocaleUpperCase(); // meken okkoma capital letters karanawa
str6.toLocaleLowerCase(); // meken okkoma simple letters karanawa

str6.trim(); // dhepaththe space thiyenam e dheka ain karala dhanawa.. matdha space thibbata awulak na.

var s8 = new String("Shanilka");
s8.valueOf();  // string object ekak ganna

s8.split(","); // wachana ( , ) ekakin wen karanawa


let a = 4;
let b = 5;

a+b;
b-4;

b+=5;

console.log(b);


let a1 = 10;
let a2 = 40;
let a3 = 90;

if (a1 < a2) {
 var tem = a2;
} if (a2 < a3) {
 var tem = a3 ;
} if (a3 < a1){
 var tem = a1;
}

console.log(tem);


a == 1 ; // equals operater
a === 3; //string equality oparator  -- Meya karanne Value ekath samanadha balala Typs ekath samanadha balanawa

b != 2; // not equals
b !== 5; // String not equals


var marks = 60;

if(marks > 75) {
 console.log("A");
} else if (marks > 65) {
 console.log("B");
} else if (marks > 55) {
 console.log("C");
} else if(marks > 35){
 console.log("S");
}

var x = 10;

var result = (x > 5) ? "OK" : "No";
console.log("Result = ",result);

var mark = 55;

var newResult = (mark > 75) ? "A" : (mark > 65) ? "B" : (mark > 55) ? "C" : (mark > 45) ? "C":"S";
console.log(newResult);

for(var i = 0; i < 10; i++){
 console.log("HEllo Shanilka");
}

for(var i = 1; i < 100; i++){
 if(i%2==0){
  console.log(i);
 }
}

var z = 1;
while(z <= 100){
 if(z%2===0) console.log(z);
 z++;
}

do{
 if(i%2==0){
  console.log(i);
 }
 i++
} while (i <= 100);


// JS Funtion

// java wala wage nemei JS walata widhi godak thiyenawa funtion hadhanne.... wenne ekama dhe

// name Funtion 

// function kiyana key word eken thama meka haddhanne

function myfunction(){
 // meka thama funtion eke body eka
 console.log("MY 1st Funtion");
}  // name funtion eka kiyanne funtion kye word eka mulata dhala hadhana eka

myFunction(); // call funtion


function fun2(name1 , name2){   //function fun2(var name1 , var name2) -- var kiyana eka dhanna one na JS wala parameter pass karaddi
 console.log(name1 + name2);
} // para meeter ekata idea ekak na valu eka mokakdha kiyala..mokadha meka type safe na... Ekata thama TypeScript thiyenne

fun2("Nishith" , "Shanilka");



// Funtion Expretion
var myfun3 = function(){ // me funtion ekata name ekak na ... e wenuwata meka variable ekakata dhanawa
 console.log("Fun3");
}

myfun3();



// Arrow Funtion
var arraowFuntion = () => {  // meka use karanne liyana code gana adu karaganna
 console.log("Arrow Funtion");
}

arraowFuntion();


var arraowFuntion2 = (para1 , para2) => {
 console.log(para1,para2);
}

arraowFuntion2(10 ,20);



// Anonimus Funtion

//meka pahadhiliwa adhura ganna bari ekak ... name ekak na
// meka use karanne imidiantly inwork karanna karanna thama meka use karanne

// javac eke pearpos eka karanne complilerwa inwork karanawa

(function(){
 console.log("Anonimaus Funtion");
})



// callback funtion

function callback(){
 console.log("CallBack");
}

// function shanilka(parameter12){
//  parameter12();
// }

// shanilka(10 ,callback());



// DOM Manipulation

// peo js wala dom eke thiyana eliment select karanna widhi 6k thiyenawa

//
var result = document.getElementsByTagName("h1"); // tage name eka var ekakata dhanawa
console.log("Result",result); //  eka print karagannawa
console.log("Result",result[2].innerText); // index eke thiyena text eka gannawa meken..   (.innerText)

result[1].innerText = "<i>Shanilka</i>"; // meken wenne html eka wenas nowi live server eken wenas karannama kena ganne
console.log(result[1]); // meke dhena hama ekama print wenawa

result[0].innerHTML = "<i>Shanilka</i>"; // meke tag eka nathiwa print wenawa adhala eka
console.log(result[0]);


// ID eka ganna
var getid = document.getElementById("myP"); // meken wenne adhala id eka gannawa
console.log(getid);

getid.innerText = "Hello Sahan Udhakara";


// get element by class name

var getclass = document.getElementsByClassName("btn");
console.log(getclass);

getclass.innerText = "Fuck You";
console.log(getclass);


//var getName = document.getElementsByName();  // name atribute eken ganne

//document.querySelector("p"); // paragraf eka dhenawa

//var getAll = document.querySelectorAll("#myP"); // okkoma gannawa
//console.log(getAll);

//document.querySelectorAll("ul>li"); // css wala thiyena hama widhiyakatama meka ganna puluwan


// new

//peo css
var eliment = document.getElementsByTagName("h5")[0];
eliment.style.color="red";                  // style karanawa
eliment.style.backgroundColor="yellow";
console.log(eliment);


var style = "color: blue; background: yello";
eliment.style.cssText = style; // mehemarh puluwan


//
document.getElementsByTagName("button")[0].addEventListener('click', function(){  // click kiyana event eka lisnt karan innawa
 console.log("Click"); // click unoth meke athule thiyena ena imediantly click karanna
});



// Funtion Constructor
// meka wadiya use wenne na

var fn = new Function(para1, para2,para4,para5); // mekata onatharan parameeter difind karanna puluwan // anthima parameeter ekata dhanne body eke wenna one mokakdha eka.eka dhanneth string ekak widhiyata
var result = fn(100, 200);
console.log("Result: ", result); 

document.querySelectorAll("input")[0].addEventListener("input", function(event){
 document.getElementsByTagName("h5")[0].innerText = event.target.value;
})

     

