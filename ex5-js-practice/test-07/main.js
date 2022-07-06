
function printItemExp1() {
  document.getElementById("exp1_textarea").innerText = "Hello Anya";
}
function printItemExp2() {
  document.getElementById("exp2_p").innerText = "Hello Anya";
}

window.onload = function () {
  const button = document.getElementById("exp3_btn");
  button.addEventListener("click", printItemExp3);

  function printItemExp3() {
    document.getElementById("exp3_p").innerHTML +=
      "<h3>addEventListener Enabled !! </h3>";
  }
};
