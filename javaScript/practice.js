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

 console.log("Y-01: " , y);
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

console.log(z);  // js wala block ekak athule block ekak hadhala eka eliye idhan access karanna puluwan 
// --- Meka JS Wala Bug Ekak---- 

// block eken eliye idhan assign karanna puluwan wena bug eka fix karanna thama me (let , const) eka enne

// var eka thamai mulin js release weddi awe 

// null eken wenne assign karapu eken kisima watinakamak na
// undifind eken wenne mukuth na

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
console.clear(); // eka dhunnahama okkoma clear wela yanawa
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
