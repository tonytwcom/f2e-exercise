

// Exp1
console.log('\nExp.1');
// alert("Hello World");                                           // 
console.log('This is my first JavaScript Project');

// Exp2
console.log('\nExp.2');
let myVariable = 100;
let myText= 'I\'m Tony'; 
console.log('myVariable: '+1234567890);
console.log('myVariable type: '+typeof myVariable);
console.log('myText: '+myText);
console.log('myText type: '+typeof myText);

// Exp.3
console.log('\nExp.3');
let myString='Good Morning ! How\'s your life treating you ?'  
let myColor=['Red','Gree','Blue']
console.log('myString: '+myString);
console.log('myString(19): '+myString.charAt(19));                  // 取 index 19 的值。charAt ( 只能一個整數 )，代表 index 19
console.log('myString.slice(1): '+myString.slice(1));               // 從 index 1 開始取字元最後
console.log('myString.slice(-1): '+myString.slice(-1));             // 取最後 1 個字元
console.log('myString.slice(-7): '+myString.slice(-7));             // 取最後 7 個字元
console.log('myString.slice(0,1): '+myString.slice(0,1));           // 取從 index 0 開始到 index 1 之前結束
console.log('myString.slice(0,1): '+myString.slice(5,8));           // 取從 index 5 開始取 index 8 之前結束
console.log('myColor: '+myColor);                                   // myColor: Red,Gree,Blue
console.log('myColor[0]: '+myColor[0]);                             // myColor[0]: Red 
console.log('myColor.slice: '+myColor.slice(0));                    // 從 index 0 向後取值。Red,Gree,Blue
console.log('myColor.slice: '+myColor.slice(1));                    // 從 index 1 向後取值。Gree,Blue
console.log('myColor.slice: '+myColor.slice(2));                    // 從 index 2 向後取值。Blue
console.log('myColor.slice: '+myColor.slice(0,1));                  // 從 index 0 取值取到 index 1 之前結束。Blue

// Exp.4
console.log('\nExp.4');
console.log(myString.indexOf('you')); 
console.log(myString.lastIndexOf('you')); 

// Exp.5
console.log('\nExp.5');
let upText= 'How do you work ?'; 
let lowText= 'How do you work ?' 
console.log('Have a nice day!'.toLowerCase());
upText=upText.toUpperCase();
console.log(upText);
console.log(lowText.toLowerCase());
console.log(lowText.includes('do'));
console.log(lowText.includes('cake'));


// Exp.6
// splite 用於字串的切割，並且回傳字串陣列
// const animals=['Dog','Cat','Foxy', 'Lion'];
const animals='Visual Stdio Code';
console.log('Respect! I\'m happy for you'.split());
console.log(animals.split(' '));

