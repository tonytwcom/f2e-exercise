
// Exp1
console.log("\nExp.1");
// alert("Hello World");
console.log("This is my first JavaScript Project");

// Exp2
console.log("\nExp.2");
let myVariable = 100;
let myText = "I'm Tony";
console.log("myVariable: " + 1234567890);
console.log("myVariable type: " + typeof myVariable);
console.log("myText: " + myText);
console.log("myText type: " + typeof myText);

// Exp.3
console.log("\nExp.3");
let myString = "Good Morning ! How's your life treating you ?";
let myColor = ["Red", "Gree", "Blue"];
console.log("myString: " + myString);
console.log("myString(19): " + myString.charAt(19)); // 取 index 19 的值。charAt ( 只能是一個整數 )，代表 index 19
console.log("myString.slice(1): " + myString.slice(1)); // 從 index 1 開始取字元最後
console.log("myString.slice(-1): " + myString.slice(-1)); // 取最後 1 個字元
console.log("myString.slice(-7): " + myString.slice(-7)); // 取最後 7 個字元
console.log("myString.slice(0,1): " + myString.slice(0, 1)); // 取從 index 0 開始到 index 1 之前結束
console.log("myString.slice(0,1): " + myString.slice(5, 8)); // 取從 index 5 開始取 index 8 之前結束
console.log("myColor: " + myColor); // myColor: Red,Gree,Blue
console.log("myColor[0]: " + myColor[0]); // myColor[0]: Red
console.log("myColor.slice: " + myColor.slice(0)); // 從 index 0 向後取值。Red,Gree,Blue
console.log("myColor.slice: " + myColor.slice(1)); // 從 index 1 向後取值。Gree,Blue
console.log("myColor.slice: " + myColor.slice(2)); // 從 index 2 向後取值。Blue
console.log("myColor.slice: " + myColor.slice(0, 1)); // 從 index 0 取值取到 index 1 之前結束。Blue

// Exp.4
console.log("\nExp.4");
console.log(myString.indexOf("you"));
console.log(myString.lastIndexOf("you"));

// Exp.5
console.log("\nExp.5");
let upText = "How do you work ?";
let lowText = "How do you work ?";
console.log("Have a nice day!".toLowerCase());
upText = upText.toUpperCase();
console.log(upText);
console.log(lowText.toLowerCase());
console.log(lowText.includes("do"));
console.log(lowText.includes("cake"));

// Exp.6
// splite 用於字串的切割，並且回傳字串陣列
console.log("\nExp.6");
const animals = "Visual Stdio Code";
console.log("Respect! I'm happy for you".split());
console.log(animals.split(" "));

// Exp.7
console.log("\nExp.7");
console.log(Math.random() * 10);

// Exp.8
console.log("\nExp.8");
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(Math.random() * 4 + 1));
console.log(Math.floor(2.1));

// Exp.9
console.log("\nExp.9");
let testScore = 89;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore > 60) {
  grade = "D";
} else if (testScore === 60) {
  grade = " Respect !";
} else {
  grade = "E";
}

console.log("grade= " + grade);

// Exp.10
console.log("\nExp.10");
switch (Math.floor(Math.random() * 10)) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("No match");
}

// Exp.11 - Conditional (ternary) operator
console.log("\nExp.11");
let wifi = "Open Sesame";
let toUser = true;
let wifiAccess = toUser
  ? `Yes, we offer free Wi-Fi ( ${wifi} ) to user.`
  : "Sorry, we don't provide the Wi-Fi";
console.log(wifiAccess);

// Exp.12 - Loop
console.log("\nExp.12");

// for (let i = 0; i < array.length; i++) {

// }

// Exp.13 - Functions
console.log("\nExp.13");
function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }

  return "sum is " + (num1 + num2);
}

console.log(sum());
console.log(sum(5, 10));
console.log(sum(5));

// Exp.14 - Scope
console.log("\nExp.14");
let num = 10;

{
  num = 100;
}

function add() {
  let num = 20;
  return num;
}

add();
console.log("num= " + num);
console.log(1);

// Exp.15 - Arrow Functions
console.log("\nExp.15");
let arraws = (a, b) => a + b;
console.log(arraws(10, 10));

// Exp.16 - Array
console.log("\nExp.16");
let myCar = ["BMW", "Tesla", "Banz", "Mazda", "Prosche", 100];
console.log(myCar.map((item) => item));

// Exp.17 - Objects
console.log("\nExp.17");
const myObj = { name: "Tony" };
console.log(myObj);

const anotherObj = {
  alive: true,
  answer: 18,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  actioon: function () {
    return `Time for ${this.beverage.afternoon}`;
  },
};
console.log(anotherObj.actioon());

// Exp.18 - Objects 2
console.log("\nExp.18");
const band = {
  voclas: "Robert Plant",
  guitar: "Jimm Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band));     // 使用 Object 呼叫 band 
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job} , It's ${band[job]} !`);
}


// Exp.19 - JSON
console.log("\nExp.19");


// Exp.20 - Error and Error Handling
console.log("\nExp.20");

"use strict";  //放在第一行



