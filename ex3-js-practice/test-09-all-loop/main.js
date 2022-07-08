const language = ["JAVA", "JavaScript", "C++", "C#", "HTML"]; // Array

// object
const player = {
  Name: "God",
  Skill: "Control Human",
  STR: 99,
  INT: 99,
  AGI: 50,
  LUK: 80,
  DEX: 77,
};

console.log("======== for loop ========");
for (let i = 0; i < language.length; i++) {
  const element = language[i];
  console.log(element);
}

console.log("======== forEach ========");
language.forEach((element) => {
  console.log(element);
});

console.log("======== for / in  ========"); // for array
for (const key in language) {
  console.log(language[key]);
}

console.log("======== for / in  ========"); // for object
for (const key in player) {
  console.log(key + ": " + player[key]);
}

console.log("======== for / of  ========"); // for array
for (const iterator of language) {
  console.log(iterator);
}

console.log("======== for / of  ========"); // for object
for (const key of Object.keys(player)) {
  console.log(key + ": " + player[key]);
}
