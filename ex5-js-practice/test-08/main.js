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
console.log(Object.keys(player)); //取物件內容
console.log(Object.keys(player).length);

const language = ["JAVA", "JavaScript", "C++", "C#", "HTML"];

console.log(language.toString()); // Array toString()
console.log(language.join("、")); // Array join(string)：字串間的連結 [淺拷貝]
console.log(language.pop()); // Array pop()：返回 Array 的最後一個元素 [深拷貝]
console.log(language.shift()); //Array pop()：返回 Array 的第一個元素 [深拷貝]
console.log(language.push("TypeScript")); // Array push(string)：Array 加入元素 [深拷貝]
