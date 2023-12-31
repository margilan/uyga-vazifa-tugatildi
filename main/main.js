const btn = document.getElementById("btn");
const name = document.getElementById("name");
const age = document.getElementById("age");
const car = document.getElementById("car");
const desc = document.getElementById("description");

function validate() {
  if (!name.value) {
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "lightgray";
  }

  if (!age.value) {
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (age.value <= 0 || age.value > 150) {
    alert("Siz bunday yoshda bo'lishingzi mumkin emas !!!");
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (!Number(age.value)) {
    alert("Yosh raqamda kiritlishi kerak !!!");
    age.focus();
    return false;
  } else {
    age.style.outlineColor = "lightgray";
  }

  if (!car.value) {
    car.focus();
    alert("Mashinani kiritishingiz zarur !!!");
    return false;
  } else {
    car.style.outlineColor = "lightgray";
  }

  if (!desc.value) {
    desc.focus();
    desc.style.outlineColor = "red";
    alert("Izoh kiritishingiz zarur !!!");
    return false;
  } else {
    desc.style.outlineColor = "lightgray";
  }

  return true;
}

function clear() {
  name.value = "";
  car.value = "";
  age.value = "";
  desc.value = "";
}

btn && btn.addEventListener("click", function () {
    if (validate()) {
      const user = {
        name: name.value,
        age: age.value,
        car: car.value,
        desc: desc.value,
      };
      let dataLocalStorage = [];
      if(localStorage.getItem('users')){
        dataLocalStorage = JSON.parse(localStorage.getItem('users'))
      }
      dataLocalStorage.push(user);
      localStorage.setItem('users' , JSON.stringify(dataLocalStorage))
      clear();
      
    }
  });
