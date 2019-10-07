// var x = {name: "Miska", surname: "Bacikova"};
// console.log(x);
// console.log(typeof x);

// var y = [1, 2, 3, 4, "ahoj"];
// console.log(y);
// console.log(typeof y);

// console.log(undefined == null); //true
// console.log(undefined === null); //false
// console.log(typeof x === typeof y); //true

// var x = 0x12AB;
// console.log(x);
// x = 0123;
// console.log(x);

// var str = "ahoj 'jahodka'";
// var str1 = 'ahoj "jahodka"';
// var editMode = false;
// var person = {name: 'Michaela', surname: 'Bacikova'};
// const str2 = `<div>
//     <h1>
//      ${editMode ? 'Editovana ' : 'Nova '} osoba: ${editMode ? person.name : ''}
//     </h1>
// </div>`

// var daco = true ? str : str1;
// // str2 = 'ahoj'; //--> throws error
// console.log(str2);

// var a = 10;
// var b = +"123";
// var zleCislo = a * b;
// console.log(zleCislo);

// var a = +12345678901234567;
// var b = +Number.MAX_VALUE;
// console.log(a);
// console.log(b);

// console.log(0 == false); //true
// console.log(1 == true); //true
// console.log(0 === false); //false
// console.log(1 === true); //false

// console.log(9 % 4);

// var a = 3;
// var b = 4;
		  
// b += a++ + b++ + a++;
// console.log(b);

// console.log(typeof a === "number");
// var temp = undefined;

var theDay = 3;
switch (theDay) {
    case 3: case 5: document.write("Finally Friday"); break;
    case 6: document.write("Super Saturday"); break;
    case 0: document.write("Sleepy Sunday"); break;
    default: document.write("I'm looking forward to this weekend!");
}

var i = 0; //3
while (i < 3) {
  document.write("*");
  i++;
}

var i = 0;
do {
    document.write("*");
    i++;
} while (i <= 3);

var x = [1, 2, 3, 5, 7, 9];
x[100] = "jahodka";
x[50] = undefined;
for (var i in x) {
    document.write(i + ": " + x[i] + "<br>");
}
// document.write(x[50]);



//var goo = false;
function foo() {
    //Short-circuit evaluation of && and || operators:
    if(true == true || goo) {
        console.log("|| PRESLO!!" + (true == true || goo) + "\n");
        //Passes, no error because goo isn't defined.
    }
    if(false && goo) {
        console.log("&& PRESLO!!\n");
        //Passes, no error because goo isn't defined.
    }

    //no | and & Java-like alternatives -> converts operands to bitwise
    /*
    if(true == true | goo) {
       console.log("| PRESLO!!" + (true == true | goo) + "\n"); // 0 because | works only in bitwise mode
       //Passes, no error because goo isn't defined.
    }
    if(false & goo) {
       console.log("& PRESLO!!" + true == true & goo + "\n");
       //Passes, no error because goo isn't defined.
    }
    */
}

x = foo;
// console.log(foo);
// console.log(foo());
// console.log(x());