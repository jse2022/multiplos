import "./styles.css";
let numero = Number(prompt("Ingrese numero: "));

for (let x = 1; x < 100; x++) {
  let multiplos = numero * x;
  if (multiplos > 100) {
    break;
  }

  console.log(multiplos);
}
