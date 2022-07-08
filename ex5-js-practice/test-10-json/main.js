window.onload = function () {
  const person = {
    name: "John",
    age: 30,
    city: "Taipei",
    player: {
      ID: "God",
      Skill: "Control Human",
      STR: 99,
      INT: 99,
      AGI: 50,
      LUK: 80,
      DEX: 77,
    },
  };

  // 注意模板的寫法
  const person_data = JSON.parse(JSON.stringify(person));
  console.log(person_data);
  document.getElementById("role_name").innerHTML = `姓名：${person_data.name}`;
  document.getElementById("role_age").innerHTML = `年齡：${person_data.age}`;
  document.getElementById(
    "role_city"
  ).innerHTML = `居住地：${person_data.city}`;

  document.getElementById(
    "role_id"
  ).innerHTML = `遊戲名稱：${person_data.city}`;

  document.getElementById(
    "role_skill"
  ).innerHTML = `技能：${person_data.player.Skill}`;

  document.getElementById(
    "role_str"
  ).innerHTML = `STR：${person_data.player.STR}`;

  document.getElementById(
    "role_agi"
  ).innerHTML = `AGI：${person_data.player.AGI}`;

  document.getElementById(
    "role_luk"
  ).innerHTML = `LUK：${person_data.player.LUK}`;

  document.getElementById(
    "role_dex"
  ).innerHTML = `DEX：${person_data.player.DEX}`;
};
