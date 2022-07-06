function fn_count() {
  let num1,
    num2,
    sum = 0;
  num1 = Number(document.getElementById("id_input_num1").value);
  num2 = Number(document.getElementById("id_input_num2").value);
  sum = document.getElementById("id_input_sum_num").value = num1 + num2;

  document.getElementById("id_p_show").innerText =
    "num1 is " + num1 + "\n num2 is " + num2 + "\n num1 + num2 = " + sum;
}

function fn_clear() {
  document.getElementById("id_input_num1").value = null;
  document.getElementById("id_input_num2").value = null;
  document.getElementById("id_input_sum_num").value = null;
  document.getElementById("id_p_show").innerText = null;
}
