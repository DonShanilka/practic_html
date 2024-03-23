console.log("Welcom to The Java Script");

var x = 2;
var l = 'Shanilka';
y = 'IJSE';
n = null;
k = undefined; // user visin value ekak dhala na
console.log(l , y);
console.log(n);

// var 4x // mehema variable hadhanna ba  // _s   ,  $log   ,  x4   -- mehema var hadhanna puluwan


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

//console.log(z);  // js wala block ekak athule block ekak hadhala eka eliye idhan access karanna puluwan 
// --- Meka JS Wala Bug Ekak---- 
// me bug eka fix karanna thamai (let , const) eka enne

// var eka thamai mulin release une

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

console.log(); // onama ekak print karaganna
console.error(); // mokak hari erro ekak pront karaganna
console.warn(); // warinng ekak print karaganna onenam meka gannawa
console.info(); // mekath log eka wage thama
console.clear(); // eka dhunnahama okkoma clear wela yanawa
console.table(); // tabuler data table ekak widhiyata pawicchchi karnana -- 
// meyage athule kye valuse pears thama yawanne . 
