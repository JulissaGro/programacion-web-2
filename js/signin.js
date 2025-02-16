const $username = $("#username");
const $nombre = $("#nombre");
const $genero = $("#genero");
const $apellidos = $("#apellidos");
const $fechaNac = $("#fecha-nac");
const $email = $("#email");
const $password = $("#contrasena");
const $passwordVerif = $("#contrasena-verify");
const $btnRegistrar = $("#registro-btn");
const $otroGenero = $("#opcion-otro");
const $formulario = $("#formulario");

function verifyGenero() {
  let optionSelected = $genero.find("option:selected");
  let valueSelected = optionSelected.val();
  if (valueSelected == "") {
    $genero.addClass("is-invalid").removeClass("is-valid");
    return false;
  } else {
    $genero.removeClass("is-invalid").addClass("is-valid");
  }
  return true;
}

function obtenerEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  
  return edad;
}

function verifyFecha() {
  let fechaIngresada = new Date($fechaNac.val());
  let edad = obtenerEdad(fechaIngresada);

  if (edad < 18 || edad == NaN) {
    $fechaNac.removeClass("is-valid").addClass("is-invalid");
    $invalida = $("#edad-invalida");
    $invalida.text("Solo se admiten personas mayores de 17");
    return false;
  } else {
    $fechaNac.removeClass("is-invalid").addClass("is-valid");
  }
  return true;
}

function verifyPassword() {
  if ($password.val() !== $passwordVerif.val()) {
    $passwordVerif.addClass("is-invalid").removeClass("is-valid");
    return false;
  } else {
    $passwordVerif.removeClass("is-invalid").addClass("is-valid");
  }
  return true;
}

$genero.change(function () {
  let optionSelected = $(this).find("option:selected");
  let valueSelected = optionSelected.val();
  if (valueSelected == "5") {
    const inputOtro = `
      <div data-mdb-input-init class="form-outline required">
        <label class="control-label form-label" for="otro-genero">Otro:</label>
        <input type="text" id="otro-genero" class="form-control" placeholder="no binario" required/>
        <div class="invalid-feedback">
          Ingresar género.
        </div>
      </div>`;
    $otroGenero.html(inputOtro);
  }else{
    $otroGenero.html("");
  }
});


$formulario.on("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  
  $(this).addClass("was-validated");
  verifyGenero();
  verifyFecha();
  verifyPassword();

  if (!this.checkValidity() || !verifyGenero() || !verifyFecha() || !verifyPassword()){
    return;
  }

  this.submit();
});


