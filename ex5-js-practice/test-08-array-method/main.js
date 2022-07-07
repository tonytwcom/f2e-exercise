const player = {
  // object
  Name: "God",
  Skill: "Control Human",
  STR: 99,
  INT: 99,
  AGI: 50,
  LUK: 80,
  DEX: 77,
};
console.log(Object.keys(player)); // 取出整個物件
console.log(Object.keys(player).length); //

const language = ["JAVA", "JavaScript", "C++", "C#", "HTML"];
const frame = ["Rreact", "Vue", "Angular"];

console.log(language.toString()); // Array toString(). All Object can use toString() in JavaScript !!
console.log(language.join("、")); // Array join(string)：字串間的連結 [不賦值]
console.log(language.push("TypeScript")); // Array push(string)：最後一個元素加到 Array 中
console.log(language.pop()); // Array pop()：返回 Array 的最後一個元素的值
console.log(language.shift()); //Array shift()：刪除 Array[0] 的元素
console.log(language.unshift("Ruby")); // Array unshift(string)：在 Array[0] 加入一個元素
console.log(language.length); // 求元素個數
delete language[0]; // language[0] 變成 undefined
console.log(language[0]);
const tools = language.concat(frame); // A.concat(B)：A 後面加入 B
console.log(tools);
console.log(language.slice(2, 3)); // slice 切片不會影響 Array 內容，slice(star,end)
console.log(language.slice(3)); // 從 Array[3] 切到最後一個元素
console.log(language);
console.log(language.splice(2, 1)); // splice 拼接會影響 Array 內容，splice(star,remove)
console.log(language);
