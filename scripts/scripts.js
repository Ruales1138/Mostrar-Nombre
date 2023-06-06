function showFullName() {
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = "Nombre Completo: " + name + " " + lastName;
  document.getElementById("fullName").innerText = fullName;
};

function show7Days() {
  var sum = 0;
  var inputs = document.getElementsByClassName("numbers");
  for (let i = 0; i < inputs.length; i++) {
    sum += Number(inputs[i].value)
  }
  document.getElementById("7days").innerText = "Vasos de agua totales: " + sum;
};

function show5Days() {
  var sum = 0;
  var inputs = document.getElementsByClassName("numbers");
  for (let i = 0; i < 5; i++) {
    sum += Number(inputs[i].value)
  }
  document.getElementById("5days").innerText = "Vasos de agua en 5 dias: " + sum;
};