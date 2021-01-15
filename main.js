function mostrarValoracion() {
  const boton = document.body.querySelector('input[type="range"]');
  alert(boton.value);
}

function mostrarNumeroDeCuenta() {
  const pais = document.body.querySelector("input[name='pais']");
  const iban = document.body.querySelector("input[name='iban']");
  const entidad = document.body.querySelector("input[name='entidad']");
  const sucursal = document.body.querySelector("input[name='sucursal']");
  const dc = document.body.querySelector("input[name='dc']");
  const cuenta = document.body.querySelector("input[name='cuenta']");
  alert(
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
  alert(dias[diaSemana], diaSemana);
}
