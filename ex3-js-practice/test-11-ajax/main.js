function readfile() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText ;
  };
  xhttp.open("GET", "./salary102.json", true);
  xhttp.send();
}
