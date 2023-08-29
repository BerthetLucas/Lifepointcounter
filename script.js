let screen = document.getElementById("result");

function display(newvalue) {
  screen.value = screen.value + newvalue;
  return newvalue;
}

function solve() {
  let acalculer = screen.value;

  let res = eval(screen.value);

  screen.value = res;

  return res;
}

function clearScreen() {
document.getElementById('result').value = "";
}
