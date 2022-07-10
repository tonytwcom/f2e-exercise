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
    this.names = str_Name;
    this.skill = str_Skill;
    this.str = int_STR;
    this.int = int_INT;
    this.agi = int_AGI;
    this.luk = int_LUK;
    this.dex = int_DEX;
  }
}

// min~max : Math.floor(Math.random()*(max-min)+min)
function rand_60_to_100() {
  let num = Math.floor(Math.random() * 40 + 60);
  return num;
}

window.onload = function () {
  let race = ['God', 'Hunam', 'Dwarf'];
  let rance_skill = {
    God: 'Human Control',
    Hunam: 'Dance',
    Dwarf: 'God Control',
  };

  function count_person() {
    const count_person = 1;
    for (let index = 1; index <= count_person; index++) {
      let select_rance = Math.floor(Math.random() * 3); // 0~2
      let player = new Role(
        race[select_rance],
        rance_skill[race[select_rance]],
        rand_60_to_100(), // int_STR
        rand_60_to_100(), // int_INT
        rand_60_to_100(), // int_AGI
        rand_60_to_100(), // int_LUK
        rand_60_to_100() // int_DEX
      );
      console.log(player);
      document.getElementById(
        'role-info-show'
      ).innerHTML = `種族：${player.names}<br>技能：${player.skill}<br>
      STR：${player.str}<br>
      INT：${player.int}<br>
      AGI：${player.agi}<br>
      LUK：${player.luk}<br>
      DEX：${player.dex}<br>`;
    }
  }

  const button = document.getElementById('create_btn');
  button.addEventListener('click', create_role_btn);
  function create_role_btn() {
    count_person();
  }
};
