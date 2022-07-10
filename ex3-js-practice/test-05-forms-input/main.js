window.onload = function () {
  const cars = ['Saab123', 'Volvo', 'BMW'];

  let y = 123;
  let z = '123';

  console.log(y == z);
  console.log(y === z);

  const t1 = document.querySelector('p');
  const t2 = document.querySelector('p');
  console.log(t1);
  console.log(t1);
  console.log(typeof t1);
  console.log(t2);

  // window.alert("Hello World");
  // console.log("Hello World");
  document.getElementById('myId').innerHTML = 'Hello ID';
  // document.getElementsByClass("myClass").innerHTML = "Hello Class";

  let a = 10,
    b = 20;
  console.log(typeof Boolean(a > b));

  console.log(typeof b.toString());

  console.log(typeof a.valueOf());
  console.log(typeof Boolean(a > b).valueOf());

  // let count = document.getElementsByClassName("myClass");

  // document.write("This is my web page! ");
  // for (let i = 0; i < count.length; i++) {
  //   console.log(count);
  // }
};
