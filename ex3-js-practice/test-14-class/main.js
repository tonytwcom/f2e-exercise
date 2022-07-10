class Role {
  constructor(
    str_Name,
    str_Skill,
    int_STR,
    int_INT,
    int_AGI,
    int_LUK,
    int_DEX
  ) {
    this.name = str_Name;
    this.skill = str_Skill;
    this.str = int_STR;
    this.int = int_INT;
    this.agi = int_AGI;
    this.luk = int_LUK;
    this.dex = int_DEX;
  }
}

window.onload = function () {
  let player = new Role('God', 'human-control', 99, 87, 98, 84, 95);
  const x = Object.values(player);
  console.log(x);

  // document.getElementById('role-info-show').innerHTML = player_1.name;
};
