// DEFININIR VARIABLES//
var l;
let y;
const NOMBRE_CONSTANTE=2;
let x=3, u=2; //Ayuda para crear variables  


l=2;
y=4;

let p = l + y;

//MUESTRA//
console.log(p);

// VARIABLES var //
var firstname = "Laura";
var lastname = "Romero";

var num1 = 2;
var num2 = 2;
let result = (num1 + num2);

//CONCATENAR VARIABLES//
let fullname = firstname + "" + lastname;
console.log(fullname);

var a=5;
var b=5;
var c=a+b;
console.log(c);

//RE-DECLARACION DE VARIABLES (funciona solo con var)//
var r="L";
var r;

//ALCANCE DE LAS VARIABLES let//
{
    let ab=2;
    console.log(ab);//-->FUNCIONA, pq esta dentro del bloque//
}//BLOQUE DE codigo

console.log(ab);//--> Si esta por fuera del bloque no se ejecuta

//ALCANCE DE var//
var ap="Lulu";
{
    console.log(ap);
}
//Las variables declaradas con VAR son globales y se pueden llamar fuera o dentro del bloque 

//*USA MAS LET*-->consejo//
