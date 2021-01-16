function mostrarValoracion() {
  const valor = document.querySelector("#valoracion").value;
  alert("Has valorado con " + valor + " puntos");
}

function mostrarNumeroDeCuenta() {
  const pais = document.querySelector("#pais");
  const iban = document.querySelector("#iban");
  const entidad = document.querySelector("#entidad");
  const sucursal = document.querySelector("#sucursal");
  const dc = document.querySelector("#dc");
  const cuenta = document.querySelector("#cuenta");
  alert(
    "Le informamos que su cuenta bancaria es: " +
      pais.value +
      "-" +
      iban.value +
      "-" +
      entidad.value +
      "-" +
      sucursal.value +
      "-" +
      dc.value +
      "-" +
      sucursal.value +
      "-" +
      cuenta.value
  );
}

function mostrarDiaSemana() {
  const fecha = document.body.querySelector("input[type='date']");
  const diaSemana = new Date(fecha.value).getDay();
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  alert(
    "La fecha seleccionada en el elemento de fecha es un " + dias[diaSemana]
  );
}
